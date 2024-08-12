<template>
  <div>
    <Header />
    <ThemeToggle />
    <div class="main-content">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import ThemeToggle from './components/ThemeToggle.vue';

export default {
  components: {
    Header,
    Footer,
    ThemeToggle
  }
};
</script>

<style>
:root {
  --bg-color: #f5f5f5;
  --text-color: #333333;
  --primary-color: #6200ea; /* 主色 */
  --secondary-color: #03dac5; /* 次色 */
  --button-bg: var(--primary-color);
  --button-text: #ffffff;
  --button-hover-bg: #3700b3;
  --card-bg: #ffffff;
  --card-shadow: rgba(0, 0, 0, 0.1);
  --font-family: 'Roboto', sans-serif;
}

[data-theme='dark'] {
  --bg-color: #121212;
  --text-color: #ffffff;
  --primary-color: #bb86fc;
  --secondary-color: #03dac5;
  --button-bg: var(--primary-color);
  --button-text: #000000;
  --button-hover-bg: #3700b3;
  --card-bg: #1f1f1f;
  --card-shadow: rgba(0, 0, 0, 0.5);
}

body {
  margin: 0;
  font-family: var(--font-family);
  background-color: var(--bg-color);
  color: var(--text-color);
}

.main-content {
  padding: 20px;
  padding-bottom: 80px; /* 预留空间给固定的页脚 */
}

button {
  background-color: var(--button-bg);
  color: var(--button-text);
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 5px;
  transition: transform 0.2s ease, background-color 0.3s ease;
}

button:hover {
  transform: translateY(-3px);
  background-color: var(--button-hover-bg);
}
</style>
