<template>
    <div class="main-container">
        <Header class="header-container" />

        <Nav class="nav-container" />

        <div class="bodyer-container">
            <div class="content-container">
                <router-view class="content" />
            </div>
        </div>
    </div>
</template>

<script lang="jsx" setup>
import Header from '@/views/main/Header.vue'
import Nav from '@/views/main/Nav.vue'

</script>

<style lang="scss" scoped>
@import "./variables.scss";

.main-container {
    width: 100vw;
    min-height: 100vh;

    .header-container {
        width: calc(100vw - #{$nav-width});
        height: $header-height;
        line-height: $header-height;
        text-align: center;
        font-size: 24px;
        position: fixed;
        left: $nav-width;
        background-color: #21252b;
        color: #707682;
        user-select: none;
    }

    .nav-container {
        width: $nav-width;
        height: 100vh;
        position: fixed;
        user-select: none;
    }

    .bodyer-container {
        display: flex;
        flex-direction: column;
        padding-top: $header-height;
        padding-left: $nav-width;
        min-height: 100vh;

        .content-container {
            flex: 1;
            padding: 20px;
        }
    }
}
</style>
