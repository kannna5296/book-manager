<script setup lang="ts">
import { BookRepository, BookDetailResponse, RentalRepository, RentalRegisterForm } from '@/repositories/generated';
import { ref, computed } from 'vue'
import {
  useRoute,
} from "vue-router";

const route = useRoute();
const bookId = route.params.id.toString()

const fetchResult = ref<BookDetailResponse>();

const displayRentalStatus = (returned: Boolean | undefined) => {
  if (returned == undefined) return "未"
  return returned ? "済" : "未"
}

const canRental = computed(() => fetchResult.value?.canRental);

const today = new Date();
const deadlineIfTodayRental = ref(new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000));
console.log()
console.log(deadlineIfTodayRental)

const execRental = async () => {
  const form: RentalRegisterForm = {
    bookId: Number(bookId),
    // TODO ユーザが入力できるようにする
    userId: 1,
    deadline: deadlineIfTodayRental.value.toISOString()
  }
  await RentalRepository.register({ requestBody: form })
}

const getBook = async () => {
  await BookRepository.detail({ bookId })
    .then((result) => {
      // useTakeLatest的なWrap関数あ作る
      fetchResult.value = result
    }
    )
}
getBook();
</script>

<template>
  <div class="mt-10 w-75 mx-auto">
    <h1>書籍詳細</h1>
    <h3 class="mt-10">基本情報</h3>
    <v-dialog max-width="75%">
      <template v-slot:activator="{ props }">
        <v-btn v-if="canRental" v-bind="props">レンタルする</v-btn>
        <div v-else class="text-red">レンタル中のため、レンタルできません。</div>
      </template>

      <template v-slot:default="{ isActive }">
        <v-card title="レンタルしますか？">
          <v-card-text>
            返却期限は{{ deadlineIfTodayRental.toISOString().split('T')[0] }}です。
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text="レンタルする" @click="execRental"></v-btn>
            <v-btn text="戻る" @click="isActive.value = false"></v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
    <v-table v-if="fetchResult" theme="light">
      <tbody>
        <tr>
          <td>ID</td>
          <td>{{ fetchResult.id }}</td>
        </tr>
        <tr>
          <td>書籍名</td>
          <td>{{ fetchResult.name }}</td>
        </tr>
        <tr>
          <td>著者名</td>
          <td>{{ fetchResult.author }}</td>
        </tr>
      </tbody>
    </v-table>

    <h3 class="mt-10">レンタル情報</h3>
    <v-table v-if="fetchResult?.rentals" theme="light">
      <thead>
        <tr>
          <th class="text-left">
            ユーザID
          </th>
          <th class="text-left">
            レンタル日付
          </th>
          <th class="text-left">
            返却期限日
          </th>
          <th class="text-left">
            返却ステータス
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item) in fetchResult?.rentals">
          <td>{{ item.userId }}</td>
          <td>{{ item.rentedAt }}</td>
          <td>{{ item.deadline }}</td>
          <td>{{ displayRentalStatus(item.returned) }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>
