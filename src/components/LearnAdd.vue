<script setup lang="ts">
import { ref } from "vue";
import {
  collection,
  addDoc,
  Timestamp,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase/firebase.ts";
import { auth } from "../firebase/firebase.ts";
import { useRouter } from "vue-router";

const learnRequiredValidation = (value: string) =>
  !!value || "今日の学びを入力してください。";
const learnMaxValidation = (value: string) =>
  value.length <= 140 || "140文字以内で入力してください。";
const learnRules = [learnRequiredValidation, learnMaxValidation];

const valid = ref(false);
const inputting = ref("");
const router = useRouter();
const userId = ref("");

auth.onAuthStateChanged((user) => {
  if (!user) {
    console.log("user is null");
    return;
  }
  userId.value = user.uid;
});

const submit = async () => {
  console.log("submitting...");
  console.log(userId.value);

  const hoge = query(
    collection(db, "learned"),
    where("userId", "==", userId.value)
  );
  if (hoge != null) return;

  addDoc(collection(db, "learned"), {
    content: inputting.value,
    userId: userId.value,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  })
    .then((result) => {
      console.log("submit success!");
      console.log(result);
      router.push("/");
    })
    .catch((error) => {
      console.log("submit failed!!");
      console.log(error);
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
