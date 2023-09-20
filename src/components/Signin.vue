<script setup lang="ts">
import { ref } from "vue";
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

const message = ref("");
const errorMessage = ref("");
</script>

<template>
  <h2 class="mt-10 w-50 mx-auto">サインイン</h2>
  <div class="mt-10 w-50 mx-auto">
    <v-btn variant="text" color="pink-darken-4" to="signup">
      >新規登録はこちら</v-btn
    >
  </div>
  <v-form ref="form">
    <div class="mt-10 w-50 mx-auto">
      <!-- UIいじりたい-->
      <v-btn color="success" @click="signInWithGoogle">GOOGLでSIGNIN</v-btn>
    </div>
  </v-form>
  <v-alert v-if="message" dense outlined type="success">{{ message }}</v-alert>
  <v-alert v-if="errorMessage" dense outlined type="error">{{
    errorMessage
  }}</v-alert>
</template>
