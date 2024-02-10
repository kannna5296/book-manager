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
  <h1 class="mt-10 w-50 mx-auto">書籍一覧</h1>
  <div v-for="(result) in searchResult?.content">
    {{ result.id }}:{{ result.name }}:{{ result.author }}
  </div>
</template>
