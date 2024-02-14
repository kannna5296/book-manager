<script setup lang="ts">
import { toDateStringFromString, toDateStringFromDate } from '@/util/util'
import { CustomButton } from '@/components/atoms';
import { notify } from "@kyvg/vue3-notification";
import { BookRepository, BookDetailResponse, RentalRepository, RentalRegisterForm } from '@/repositories/generated';
import { ref, computed } from 'vue'
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const bookId = route.params.id.toString()

const fetchResult = ref<BookDetailResponse>();

const displayRentalStatus = (returned: Boolean | undefined) => {
  if (returned == undefined) return "未"
  return returned ? "済" : "未"
}

const canRental = computed(() => fetchResult.value?.canRental);
const rentalSuccessMessage = ref("");

const today = new Date();
const deadlineIfTodayRental = ref(new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000));

const execRental = async () => {
  const form: RentalRegisterForm = {
    bookId: Number(bookId),
    // TODO 管理画面のユーザが、どのエンドユーザが借りるのか入力できるようにする
    userId: 1,
    deadline: deadlineIfTodayRental.value.toISOString()
  };
  await RentalRepository.register({ requestBody: form })
    .then(() => {
      // TODO リロード後に通知が走る仕組みにしたい
      notify({
        title: "レンタルに成功しました",
        type: "info"
      });
    }
    )
    .catch(() => {
      notify({
        title: "レンタルに失敗しました",
        type: "error"
      });
    });
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

const back = () => {
  router.back();
}
</script>

<template>
  <div class="mt-10 w-75 mx-auto">
    <h1>書籍詳細</h1>
    <CustomButton @click="back" buttonText="戻る"></CustomButton>
    <h3 class="mt-10">基本情報</h3>
    <notifications />
    <v-dialog max-width="75%">
      <template v-slot:activator="{ props }">
        <div class="bg-info">{{ rentalSuccessMessage }}</div>
        <!-- なんか変なのでpropsの渡し方見直し -->
        <CustomButton v-if="canRental" v-bind="props" buttonText="レンタルする"></CustomButton>
        <div v-else class="text-red">レンタル中のため、レンタルできません。</div>
      </template>

      <template v-slot:default="{ isActive }">
        <v-card title="レンタルしますか？">
          <v-card-text>
            返却期限は{{ toDateStringFromDate(deadlineIfTodayRental) }}です。
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <CustomButton @click="execRental" buttonText="レンタルする"></CustomButton>
            <CustomButton @click="isActive.value = false" buttonText="戻る"></CustomButton>
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
          <td>{{ toDateStringFromString(item.rentedAt) }}</td>
          <td>{{ toDateStringFromString(item.deadline) }}</td>
          <td>
            <div class="d-flex align-center justify-space-around">
              <div>{{ displayRentalStatus(item.returned) }}</div>
              <CustomButton v-if="!item.returned" buttonText="返却"></CustomButton>
            </div>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>