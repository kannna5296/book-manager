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
  <h2>学び一覧</h2>
  <v-row
    align-content="center"
    class="mt-10 w-50 mx-auto"
    v-for="res in responses"
  >
    {{ res.bookName }}
    <ul>
      <li v-for="leaned in res.learnedList">
        {{ leaned }}
      </li>
    </ul>
  </v-row>
</template>
