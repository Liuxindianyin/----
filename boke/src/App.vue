<template>
  <div id="app">
    <Header />
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>

<style scoped>
.main-content {
  padding: 20px;
  min-height: 100vh; /* 确保内容占满屏幕 */
  background: linear-gradient(to right, #3a3a8e, #9d50bb); /* 渐变背景 */
  color: var(--text-color);
}
</style>
