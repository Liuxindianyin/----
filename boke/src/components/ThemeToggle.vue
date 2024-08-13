<template>
  <button @click="toggleTheme">
    切换到 {{ isDark ? '浅色模式' : '深色模式' }}
  </button>
</template>

<script>
export default {
  data() {
    return {
      isDark: false,
    };
  },
  methods: {
    toggleTheme() {
      this.isDark = !this.isDark;
      document.documentElement.setAttribute(
        'data-theme',
        this.isDark ? 'dark' : 'light'
      );
    },
  },
};
</script>

<style scoped>
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
