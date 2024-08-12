<template>
    <header>
      <nav>
        <router-link to="/">首页</router-link>
        <router-link to="/about">关于我</router-link>
        <router-link to="/growth">成长经历</router-link> <!-- 添加新链接 -->
        <router-link to="/guestbook">留言板</router-link>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header'
  };
  </script>
  
  <style scoped>
  header {
    padding: 20px;
    background-color: var(--primary-color);
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  nav a {
    margin-right: 15px;
    color: white;
    text-decoration: none;
  }
  
  nav a:hover {
    text-decoration: underline;
  }
  </style>
  