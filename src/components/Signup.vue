<script setup lang="ts">
// import { ref } from "vue";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import router from "../router/router.ts";
import { initializeFirebaseApp } from "../firebase/firebase";

// これ毎回せなあかんの？？？
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
  <h2 class="mt-10 w-50 mx-auto">新規登録</h2>
  <div class="mt-10 w-50 mx-auto">
    <v-btn variant="text" color="pink-darken-4" to="/signin">
      >すでに登録済みの方はこちら</v-btn
    >
  </div>
  <v-form ref="form">
    <div class="mt-10 w-50 mx-auto">
      <!-- UIいじりたい-->
      <v-btn class="signup-button" color="success" @click="signInWithGoogle"
        >GOOGLでSIGNUP</v-btn
      >
    </div>
  </v-form>
</template>
