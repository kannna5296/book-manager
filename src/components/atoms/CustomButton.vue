<script setup lang="ts">

type Props = {
    buttonText?: string;
    color?: "primary" | "error" | "white";
}

// 外から指定しなくても良いデフォルト値
const props = withDefaults(defineProps<Props>(), {
    color: "primary"
});


const emit = defineEmits(["click"])

const onClick = () => {
    emit("click")
}

</script>
<template>
    <div class="ma-3">
        <v-btn rounded="lg" :color="props.color" @click="onClick">{{ props.buttonText }}</v-btn>
    </div>
</template>
