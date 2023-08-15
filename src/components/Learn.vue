<script setup lang="ts">
import { LearnedRepository } from "../repositories/generated";
const responses =
  //TODO TakeLatest
  await LearnedRepository.index().then((res) => {
    return res.learnedList;
  });
// .catch((error) => {
//   console.log("しっぱい!" + error);
//   return [];
// });
</script>

<template>
  <h2>今までの学び一覧</h2>
  <li v-for="res in responses">
    {{ res.content }}
  </li>
  <v-row align-content="center" class="mt-10 w-50 mx-auto"> 8/1 </v-row>
  <v-row align-content="center" class="mt-10 w-50 mx-auto"> 8/2 </v-row>
  <v-row align-content="center" class="mt-10 w-50 mx-auto"> 8/3 </v-row>
  <v-row align-content="center" class="mt-10 w-50 mx-auto"> 8/4 </v-row>
</template>
