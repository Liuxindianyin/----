<template>
  <header class="header">
    <div class="logo">
      <router-link to="/">个人博客</router-link>
    </div>
    <nav>
      <ul class="nav-links">
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/about">关于我</router-link></li>
        <li><router-link to="/growth">成长经历</router-link></li>
        <li><router-link to="/guestbook">留言板</router-link></li>
        <li><router-link to="/algorithm">算法可视化</router-link></li>
      </ul>
    </nav>
    <div class="theme-toggle">
      <ThemeToggle />
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: linear-gradient(90deg, #0d0d0d, #2a2a2a); /* 更深的渐变背景 */
  color: #ffffff;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.7); /* 增加阴影使其看起来更立体 */
}

.logo a {
  font-size: 1.8em;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 40px; /* 增加导航项之间的间距 */
  padding: 0;
  margin: 0;
}

.nav-links li {
  position: relative;
}

.nav-links a {
  color: #f0f0f0; /* 微调颜色，使其与背景更协调 */
  text-transform: uppercase;
  font-weight: 500; /* 稍微减轻字体粗细，显得更精致 */
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px; /* 添加圆角，使按钮更柔和 */
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.nav-links a:hover {
  background-color: #03dac5; /* 使用主题的次要颜色作为悬浮背景色 */
  color: #000000; /* 悬浮时文本颜色为黑色，确保对比度 */
  transform: scale(1.05);
}

.nav-links li::after {
  content: '';
  display: block;
  width: 0;
  height: 2px;
  background-color: #03dac5;
  position: absolute;
  bottom: -5px;
  left: 50%;
  transition: width 0.3s ease, left 0.3s ease;
}

.nav-links li:hover::after {
  width: 100%;
  left: 0;
}

.nav-links a.router-link-exact-active {
  background-color: #6200ea; /* 激活状态下使用主色 */
  color: #ffffff; /* 保持白色字体 */
}

.theme-toggle {
  display: flex;
  align-items: center;
}
</style>
