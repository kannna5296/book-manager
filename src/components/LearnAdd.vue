<script setup lang="ts">
import { ref } from "vue";
const learnRequiredValidation = (value: string) =>
  !!value || "今日の学びを入力してください。";
const learnMaxValidation = (value: string) =>
  value.length <= 140 || "140文字以内で入力してください。";
const learnRules = [learnRequiredValidation, learnMaxValidation];

const valid = ref(false);
</script>

<template>
  <h2 class="mt-10 w-50 mx-auto">今日の学び,気づきは？</h2>
  <v-form ref="form" v-model="valid">
    <v-textarea
      class="mt-10 w-50 mx-auto"
      label="Label"
      variant="outlined"
      :rules="learnRules"
    ></v-textarea>
    <div class="mt-10 w-50 mx-auto">
      <v-btn :disabled="!valid" color="indigo-darken-3">投稿</v-btn>
    </div>
  </v-form>
</template>
