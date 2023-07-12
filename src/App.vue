<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';

console.log('ENV:', import.meta.env.MODE);

onMounted(() => {
  console.log('app mounted');
});
</script>

<template>
  <div style="margin-bottom: 12px; padding: 8px">
    <RouterLink to="/">首頁</RouterLink> |
    <RouterLink to="/about">關於我</RouterLink>
  </div>
  <RouterView />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap');
// 引入 主控樣式最核心的main.scss
@import '@/assets/scss/reset';
@import '@/assets/scss/style';
@import '@/assets/scss/home';
</style>
