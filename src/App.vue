<template>
<router-view />
</template>

<script lang="ts">
import {
    provide,
    ref
} from "vue";
export default {
    name: "App",
    setup() {
        const width = document.documentElement.clientWidth;
        const menuVisible = ref(width <= 500 ? false : true); //引入变量是否看到asidet
        provide("menuVisible", menuVisible); //标记为所有组件都可以使用
    },
};
</script>

<style></style>
