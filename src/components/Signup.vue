<!-- 元ネタ https://github.com/vuetifyjs/vuetify/blob/master/packages/docs/src/examples/v-form/misc-exposed.vue -->
<script setup lang="ts">
import { ref } from "vue";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   updateProfile,
// } from "firebase/auth";
// import router from "@/router/index.ts";
// import MacOSIcon from "../svg/MacOSIcon.vue";

const email = ref("");
const password = ref("");
const name = ref("");
const valid = ref(true);
const errorMessage = ref("");

// 「メール」バリデーション
const emailRequiredValidation = (value: string) =>
  !!value || "メールアドレスを入力してください。";
const emailFormValidation = (value: string) =>
  /.+@.+\..+/.test(value) || "メールアドレスの形式が不正です";
const emailRules = [emailRequiredValidation, emailFormValidation];

// 「パスワード」バリデーション
const passwordRequiredValidation = (value: string) =>
  !!value || "パスワードを入力してください。";
const passwordRules = [passwordRequiredValidation];

// 「名前」バリデーション
const nameRequiredValidation = (value: string) =>
  !!value || "お名前を入力してください。";
const nameLengthLimitValidation = (value: string) =>
  (value && value.length <= 10) || "お名前は10文字以下で入力してください。";
const nameRules = [nameRequiredValidation, nameLengthLimitValidation];

// const submit = async () => {
//   const auth = getAuth();
//   await createUserWithEmailAndPassword(auth, email.value, password.value)
//     .then((userCredential) => {
//       updateProfile(userCredential.user, { displayName: name.value }); //displayNameを更新する

//       // LocalStorage使う理由はよくわからない
//       localStorage.message = "ユーザの新規作成に成功しました。";

//       // TOPにリダイレクト処理
//       router.push("/login");
//     })
//     .catch((error) => {
//       console.log(error);
//       errorMessage.value = "ユーザーの新規作成に失敗しました。";
//     });
// };
</script>

<template>
  <h2 class="mt-10 w-50 mx-auto">新規登録</h2>
  <div class="mt-10 w-50 mx-auto">
    <v-btn variant="text" color="pink-darken-4" to="/signin">
      >すでに登録済みの方はこちら</v-btn
    >
  </div>
  <v-form ref="form" v-model="valid">
    <v-text-field
      class="mt-10 w-50 mx-auto"
      v-model="name"
      :rules="nameRules"
      label="Username"
      hint="Enter your name to access this website"
      required
    ></v-text-field>

    <v-text-field
      class="mt-10 w-50 mx-auto"
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      hint="Enter your email to access this website"
      required
    ></v-text-field>

    <v-text-field
      class="mt-10 w-50 mx-auto"
      v-model="password"
      :rules="passwordRules"
      label="Password"
      type="password"
      hint="Enter your password to access this website"
      required
    ></v-text-field>
    <div class="mt-10 w-50 mx-auto">
      <v-btn class="signup-button" color="success" :disabled="!valid"
        >SIGNUP</v-btn
      >
      <v-btn class="clear-button">CLEAR</v-btn>
    </div>
    <v-alert v-if="errorMessage" dense outlined type="error">{{
      errorMessage
    }}</v-alert>
  </v-form>
</template>
