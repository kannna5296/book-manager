<script setup lang="ts">
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase.ts";
import { ref, Ref } from "vue";
import { auth } from "../firebase/firebase.ts";

const learns: Ref<string[]> = ref([]);
const userId = ref("");

auth.onAuthStateChanged((user) => {
  if (!user) {
    console.log("user is null");
    return;
  }
  userId.value = user.uid;
});
const getLearns = async () => {
  const learnsSnapShot = await getDocs(
    query(
      collection(db, "learned"),
      where("userId", "==", userId.value),
      orderBy("createdAt", "asc")
    )
  );
  learnsSnapShot.forEach((doc) => {
    learns.value.push(doc.data().content);
  });
};

getLearns();
</script>

<template>
  <h2 class="mt-10 w-50 mx-auto">学び一覧</h2>
  <div class="mt-10 w-50 mx-auto">
    <router-link to="/add">
      <v-btn color="indigo-darken-3">学びを追加</v-btn>
    </router-link>
  </div>
  <v-row
    align-content="center"
    class="mt-10 w-50 mx-auto"
    v-for="learn in learns"
  >
    <v-card width="700" class="pa-4" variant="outlined">
      {{ learn }}
    </v-card>
  </v-row>
</template>
