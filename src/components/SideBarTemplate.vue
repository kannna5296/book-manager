<script setup lang="ts">
import { ref } from "vue";
import { auth } from "../firebase/firebase";
import router from "../router/router.ts";

const userName = ref<string>("");
const userPhotoUrl = ref<string>("");
const login = ref<boolean>(false);

auth.onAuthStateChanged((user) => {
  if (user != null) {
    console.log(user.photoURL);
    userName.value = user.displayName || "";
    userPhotoUrl.value = user.photoURL || "";
    login.value = true;
  }
});

const logout = () => {
  userName.value = "";
  login.value = false;
  auth.signOut();
  router.push("/signin");
};
</script>

<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-if="login"
      model-value
      class="pt-4"
      color="grey-darken-3"
    >
      <template v-slot:prepend>
        <v-list-item
          lines="two"
          :prepend-avatar="userPhotoUrl"
          :title="userName"
          subtitle="logged in"
        ></v-list-item>
        <v-list-item
          >今日は{{ new Date().toLocaleDateString() }}です！</v-list-item
        >
      </template>
      <v-divider></v-divider>
      <v-btn class="ma-4" @click="logout">ログアウト</v-btn>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
