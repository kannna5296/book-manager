<script setup lang="ts">
import { computed } from 'vue';


const props = defineProps<{
    headerText?: string;
    placeholderText?: string;
    modelValue?: any;
}>()

// TODO 検索画効いてないので
const emit = defineEmits({
    "update:modelValue": (_value?: any) => true,
})

const model = computed({
    get: () => props.modelValue,
    set: (value?: any) => emit("update:modelValue", value),
})

</script>
<template>
    <div class="mb-1 align-center">
        {{ headerText }}
        <v-text-field density="compact" variant="outlined" :placeholder=placeholderText v-model="model"></v-text-field>
    </div>
</template>
