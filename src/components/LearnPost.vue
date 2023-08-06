<script setup lang="ts">
import axios from "axios";

axios.get("/hello").then(function (response) {
  console.log(response.data);
});
</script>

<template>
  <h2>今日の学び投稿</h2>
  <v-row align-content="center" class="mt-10">
    <v-col>
      <div class="w-50 mx-auto my-5">
        <v-text-field placeholder="今日の学び1"></v-text-field>
        <v-text-field placeholder="今日の学び2"></v-text-field>
        <v-text-field placeholder="今日の学び3"></v-text-field>
      </div>
    </v-col>
  </v-row>
  <v-row justify="center">
    <v-btn>POST</v-btn>
  </v-row>
</template>
