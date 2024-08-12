<template>
    <button @click="toggleTheme">
      切换到 {{ isDark ? '浅色模式' : '深色模式' }}
    </button>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isDark: false
      };
    },
    methods: {
      toggleTheme() {
        this.isDark = !this.isDark;
        document.documentElement.setAttribute(
          'data-theme',
          this.isDark ? 'dark' : 'light'
        );
        localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
      }
    },
    mounted() {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        this.isDark = savedTheme === 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
      } else {
        this.isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute(
          'data-theme',
          this.isDark ? 'dark' : 'light'
        );
      }
    }
  };
  </script>
  
  <style scoped>
  button {
    padding: 10px 20px;
    cursor: pointer;
    background-color: var(--button-bg);
    color: var(--button-text);
    border: none;
    border-radius: 5px;
    font-size: 14px;
    margin-left: 20px;
  }
  </style>
  
  