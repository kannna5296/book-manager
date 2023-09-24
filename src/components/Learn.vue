<script setup lang="ts">
import dayjs from "dayjs";
import {
  Timestamp,
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase/firebase.ts";
import { ref } from "vue";
import { auth } from "../firebase/firebase.ts";

class Learn {
  content: string;
  createdAt: Timestamp;
  constructor(content: string, createdAt: Timestamp) {
    this.content = content;
    this.createdAt = createdAt;
  }
}

const userId = ref("");
const learns = ref<Learn[]>(new Array<Learn>());

const getLearns = async () => {
  // async/awaitの入れ子、多分変
  auth.onAuthStateChanged(async (user) => {
    if (!user) {
      console.log("user is null");
      return;
    }
    userId.value = user.uid;

    const learnsSnapShot = await getDocs(
      query(
        collection(db, "learned"),
        where("userId", "==", userId.value),
        orderBy("createdAt", "desc")
      )
    );

    learnsSnapShot.forEach((doc) => {
      const user = new Learn(doc.data().content, doc.data().createdAt);
      learns.value.push(user);
    });
  });
};
getLearns();
</script>

<template>
  <h2 class="mt-10 w-50 mx-auto">今日までの気づき一覧</h2>
  <div class="mt-10 w-50 mx-auto">
    <router-link to="/add">
      <v-btn color="indigo-darken-3">気づきを追加</v-btn>
    </router-link>
  </div>
  <v-row
    align-content="center"
    class="mt-10 w-50 mx-auto"
    v-for="learn in learns"
  >
    <v-card
      width="700"
      class="pa-4"
      :subtitle="dayjs(learn.createdAt.toDate()).format('YYYY-MM-DD')"
      variant="outlined"
    >
      {{ learn.content }}
    </v-card>
  </v-row>
</template>
