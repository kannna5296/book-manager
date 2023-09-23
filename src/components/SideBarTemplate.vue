<script setup lang="ts">
import { ref } from "vue";
import { auth } from "../firebase/firebase";
import router from "../router/router.ts";

const userName = ref<string>("");
const loginMessage = ref<string>("");
const login = ref<boolean>(false);

auth.onAuthStateChanged((user) => {
  if (user != null) {
    userName.value = user.displayName || "";
    loginMessage.value = "logged in";
    login.value = true;
  }
});

const logout = () => {
  userName.value = "";
  loginMessage.value = "";
  login.value = false;
  auth.signOut();
  router.push("/signin");
};
</script>

<template>
  <v-app id="inspire">
    <!--TODO 一旦無視-->
    <v-navigation-drawer
      v-if="login"
      model-value
      class="pt-4"
      color="indigo-darken-1"
    >
      <template v-slot:prepend>
        <v-list-item
          lines="two"
          :title="userName"
          :subtitle="loginMessage"
        ></v-list-item>
      </template>
      <v-divider></v-divider>
      <v-btn class="ma-4" @click="logout">ログアウト</v-btn>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
