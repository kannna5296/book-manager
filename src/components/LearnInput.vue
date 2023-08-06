<script setup lang="ts"></script>
<template>
  <v-row align-content="center" class="mt-10">
    <v-col>
      <div class="w-50 mx-auto my-5">
        <p class="text-center mb-5">今日の学び</p>
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
