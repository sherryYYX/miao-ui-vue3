<template>
<div class="topnav">
    <div class="logo">LOGO</div>
    <ul class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
    </ul>
    <span class="toggleMenu" @click="toggleMenu">
        <img src="../assets/icon/threeLine.svg" alt="" />
    </span>
</div>
</template>

<script lang="ts">
import {
    inject,
    Ref
} from "vue";
export default {
    setup() {
        const menuVisible = inject < Ref < boolean >> ("menuVisible");
        const toggleMenu = () => {
            menuVisible.value = !menuVisible.value;
        };
        return {
            toggleMenu,
        };
    },
};
</script>

<style lang="scss" scoped>
.topnav {
    background: pink;
    display: flex;
    padding: 16px;
    position: relative;
    z-index: 10;
    justify-content: center;
    align-items: center;

    >.logo {
        max-width: 6em;
        margin-right: auto;
    }

    >.menu {
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;

        >li {
            margin: 0 1em;
        }
    }

    >.toggleMenu {
        display: inline-block;
        width: 24px;
        height: 24px;
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
        display: none;

        >img {
            width: 22px;
            height: 22px;
        }
    }

    @media (max-width: 500px) {
        >.menu {
            display: none;
        }

        .logo {
            margin: 0 auto;
        }

        .toggleMenu {
            display: inline-block;
        }
    }
}
</style>
