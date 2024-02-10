<script setup lang="ts">
import { BookRepository, PageBookSearchResponse } from '@/repositories/generated';
import { ref } from 'vue'

const searchResult = ref<PageBookSearchResponse>()

const createSearchParams = () => ({
  // TODO URLから取得する
  id: "a",
  name: "aa",
  author: "hoge",
  page: 1,
  size: 10
})
const getBooks = () => {
  const searchParams = createSearchParams();
  BookRepository.search(searchParams).then((result) => {
    // useTakeLatest的なWrap関数あ作る
    searchResult.value = result
  }
  )
}
getBooks();
</script>

<template>
  <div class="mt-10 w-75 mx-auto">
    <h1>書籍一覧</h1>
    <!-- Component化 -->
    <div class="mb-1 align-center">
      ID
      <v-text-field density="compact" variant="outlined" placeholder="1"></v-text-field>
    </div>
    <div class="mb-1 align-center">
      書籍名
      <v-text-field density="compact" variant="outlined" placeholder="人を動かす"></v-text-field>
    </div>
    <div class="mb-1 align-center">
      著者名
      <v-text-field density="compact" variant="outlined" placeholder="D・カーネギー"></v-text-field>
    </div>
    <v-table theme="light">
      <thead>
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
      </thead>
      <tbody>
        <tr v-for="(item) in searchResult?.content" :key="item.name">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.author }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>
