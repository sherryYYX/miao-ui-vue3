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
        const menuVisible = ref(false); //引入变量是否看到aside
        provide('xxx', menuVisible) //标记为所有组件都可以使用
    },
};
</script>

<style></style>
