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
  --bg-color: #ffffff;
  --text-color: #000000;
  --button-bg: #42b983;
  --button-text: #ffffff;
  --button-hover-bg: #369a73;
}

[data-theme='dark'] {
  --bg-color: #1e1e1e;
  --text-color: #ffffff;
  --button-bg: #555555;
  --button-text: #ffffff;
  --button-hover-bg: #777777;
}

body {
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
}

button:hover {
  background-color: var(--button-hover-bg);
}
</style>
