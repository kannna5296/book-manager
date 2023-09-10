<script setup lang="ts">
import {
  LearnedIndexResponse,
  LearnedRepository,
} from "../repositories/generated";
import { ref, Ref } from "vue";

const responses: Ref<LearnedIndexResponse[]> = ref([]);

const getLearns = async () => {
  //TODO TakeLatest
  //TODO catchとかは共通化したい
  await LearnedRepository.index()
    .then((res) => {
      console.log("OK!");
      responses.value.push(...res);
      console.log(responses.value.length);
    })
    .catch((error) => {
      console.log("Error!" + error);
    });
};

getLearns();
</script>

<template>
  <h2 class="mt-10 w-50 mx-auto">学び一覧</h2>
  <div class="mt-10 w-50 mx-auto">
    <router-link to="/add">
      <v-btn color="indigo-darken-3">学びを追加</v-btn>
    </router-link>
  </div>
  <v-row
    align-content="center"
    class="mt-10 w-50 mx-auto"
    v-for="res in responses"
  >
    <v-card width="700" class="pa-4" :subtitle="res.date" variant="outlined">
      {{ res.content }}
    </v-card>
  </v-row>
</template>
