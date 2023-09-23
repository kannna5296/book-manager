<script setup lang="ts">
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import router from "../router/router.ts";
import { initializeFirebaseApp } from "../firebase/firebase";

initializeFirebaseApp();

const auth = getAuth();
const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then(() => {
      router.push("/");
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>

<template>
  <h2 class="mt-10 w-50 mx-auto text-center">日々是好日</h2>
  <h3 class="mt-10 w-50 mx-auto text-center">
    本日もお疲れ様でした。今日の学びを記録しましょう。
  </h3>
  <v-row class="mt-10 w-50 mx-auto" justify="center">
    <v-btn color="success" @click="signInWithGoogle">GOOGLEでSIGNIN</v-btn>
  </v-row>
</template>
