<template>
  <nav>
    <ul>
      <li><router-link to="/">首页</router-link></li>
      <li><router-link to="/about">关于我</router-link></li>
      <li><router-link to="/growth">成长经历</router-link></li>
      <li><router-link to="/guestbook">留言板</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background-color: var(--primary-color);
  padding: 10px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 15px;
}

li {
  display: inline;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
