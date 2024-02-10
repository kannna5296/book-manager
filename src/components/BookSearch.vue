<script setup lang="ts">
import { BookRepository } from '@/repositories/generated';

const createSearchParams = () => ({
  id: "a",
  name: "aa",
  author: "hoge",
  page: 1,
  size: 10
})
const getBooks = () => {
  const searchParams = createSearchParams();
  return BookRepository.search(searchParams)
}
getBooks()
</script>

<template>
  <h1 class="mt-10 w-50 mx-auto">書籍一覧</h1>
</template>
