<script setup lang="ts">
import { ref } from "vue";
import {
  LearnedRepository,
  LearnedRegisterForm,
} from "../repositories/generated";
import { useRouter } from "vue-router";

const learnRequiredValidation = (value: string) =>
  !!value || "今日の学びを入力してください。";
const learnMaxValidation = (value: string) =>
  value.length <= 140 || "140文字以内で入力してください。";
const learnRules = [learnRequiredValidation, learnMaxValidation];

const valid = ref(false);
const inputting = ref("");
const router = useRouter();

const submit = async () => {
  //TODO TakeLatest
  //TODO catchとかは共通化したい
  const params: LearnedRegisterForm = {
    content: inputting.value,
  };
  await LearnedRepository.register({ requestBody: params })
    .then(() => {
      console.log("OK!");
      router.replace("/");
      //TODO notify
    })
    .catch((error) => {
      console.log("Error!" + error);
    });
};
</script>

<template>
  <h2 class="mt-10 w-50 mx-auto">今日の学び,気づきは？</h2>
  <v-form ref="form" v-model="valid">
    <v-textarea
      class="mt-10 w-50 mx-auto"
      placeholder="今日の学びを入力してください。"
      variant="outlined"
      v-model="inputting"
      :rules="learnRules"
    ></v-textarea>
    <div class="mt-10 w-50 mx-auto">
      <v-btn :disabled="!valid" color="indigo-darken-3" @click="submit"
        >投稿</v-btn
      >
    </div>
  </v-form>
</template>
