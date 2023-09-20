<script setup lang="ts">
import { ref } from "vue";
import { auth } from "../firebase/firebase";
import router from "../router/router.ts";

auth.onAuthStateChanged((user) => {
  if (user) {
    userName.value = user.displayName;
  }
});
const userName = ref<string | null>("");

const logout = () => {
  userName.value = null;
  auth.signOut();
  router.push("/signin");
};
</script>

<template>
  <v-app id="inspire">
    <div v-if="userName">
      <p>{{ userName }}さんログイン中</p>
      <v-btn @click="logout">ログアウト</v-btn>
    </div>

    <!--TODO 一旦無視-->
    <!-- <v-navigation-drawer model-value class="pt-4" color="grey-lighten-3" rail>
      <v-avatar
        v-for="n in 6"
        :key="n"
        :color="`grey-${n === 1 ? 'darken' : 'lighten'}-1`"
        :size="n === 1 ? 36 : 20"
        class="d-block text-center mx-auto mb-9"
      ></v-avatar>
    </v-navigation-drawer> -->

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
