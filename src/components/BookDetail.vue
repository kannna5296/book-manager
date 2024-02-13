<script setup lang="ts">
import { BookRepository, BookDetailResponse } from '@/repositories/generated';
import { ref } from 'vue'
import {
  useRoute,
} from "vue-router";

const route = useRoute();
const bookId = route.params.id.toString()

const fetchResult = ref<BookDetailResponse>();

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
    <v-table v-if="fetchResult" theme="light">
      <!-- <thead>
        <tr>
          <th class="text-left">
            ID
          </th>
          <th class="text-left">
            書籍名
          </th>
          <th class="text-left">
            著者名
          </th>
        </tr>
      </thead> -->
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
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item) in fetchResult?.rentals">
          <td>{{ item.userId }}</td>
          <td>{{ item.rentedAt }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>
