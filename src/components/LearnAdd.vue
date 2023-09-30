<script setup lang="ts">
import { ref } from "vue";
import {
  collection,
  addDoc,
  getDocs,
  query,
  Timestamp,
  where,
} from "firebase/firestore";
import { db } from "@/firebase/firebase.ts";
import { auth } from "@/firebase/firebase.ts";
import { useRouter } from "vue-router";

const today: Date = new Date();
today.setHours(0, 0, 0, 0);
const startDate: Timestamp = Timestamp.fromDate(today);
today.setDate(today.getDate() + 1); //新規変数作りたいけどJavaScript的にはどうするのがイイんや
const endDate: Timestamp = Timestamp.fromDate(today);

const learnRequiredValidation = (value: string) =>
  !!value || "今日の気づきを入力してください。";
const learnMaxValidation = (value: string) =>
  value.length <= 140 || "140文字以内で入力してください。";
const learnRules = [learnRequiredValidation, learnMaxValidation];

const valid = ref(false);
const duplicatedOnDay = ref(false);
const errorMessage = ref("");
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

const getLearns = async () => {
  auth.onAuthStateChanged(async () => {
    const learnsSnapShot = await getDocs(
      query(
        collection(db, "learned"),
        where("userId", "==", userId.value),
        where("createdAt", ">=", startDate),
        where("createdAt", "<", endDate)
      )
    );
    if (learnsSnapShot.size > 0) {
      duplicatedOnDay.value = true;
      errorMessage.value =
        "今日はすでに気づきを投稿しているので投稿できません。";
    }
  });
};
getLearns();

const submit = async () => {
  console.log("submitting...");

  addDoc(collection(db, "learned"), {
    content: inputting.value,
    userId: userId.value,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  })
    .then(() => {
      router.push("/");
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>

<template>
  <h2 class="mt-10 w-50 mx-auto">今日の気づきは？</h2>
  <div class="mt-10 w-50 mx-auto">
    <router-link to="/">
      <v-btn color="grey-darken-4">一覧に戻る</v-btn>
    </router-link>
  </div>
  <v-form ref="form" v-model="valid">
    <v-textarea
      class="mt-10 w-50 mx-auto"
      placeholder="今日の気づきや学びを入力してください。(140文字以内)"
      variant="outlined"
      v-model="inputting"
      :rules="learnRules"
    ></v-textarea>
    <v-alert
      class="mt-10 w-50 mx-auto"
      v-if="errorMessage"
      variant="outlined"
      type="error"
      >{{ errorMessage }}</v-alert
    >
    <div class="mt-10 w-50 mx-auto">
      <v-btn
        :disabled="!valid || duplicatedOnDay"
        color="indigo-darken-3"
        @click="submit"
        >投稿</v-btn
      >
    </div>
  </v-form>
</template>
