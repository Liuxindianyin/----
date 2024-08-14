<template>
  <header class="header">
    <div class="logo">
      <router-link to="/">网站</router-link>
    </div>
    <nav>
      <ul class="nav-links">
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/drug-interaction">药物互动信息图</router-link></li>
        <li><router-link to="/growth">成长经历</router-link></li>
        <li><router-link to="/guestbook">留言板</router-link></li>
        <li><router-link to="/algorithm">算法可视化</router-link></li>
        <li><router-link to="/about">关于我</router-link></li> <!-- 将“关于我”放在最后 -->
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
  background: linear-gradient(90deg, #0d0d0d, #2a2a2a); /* 深色渐变背景 */
  color: #ffffff;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.7); /* 深色阴影 */
}

.logo a {
  font-size: 2em; /* 更大更显眼的Logo */
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.logo a:hover {
  color: #03dac5; /* 悬停时改变Logo颜色 */
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 40px; /* 加大间距，增强视觉分隔 */
  padding: 0;
  margin: 0;
}

.nav-links li {
  position: relative;
}

.nav-links a {
  color: #f0f0f0;
  text-transform: uppercase;
  font-weight: 600; /* 更粗的字体使导航项更突出 */
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 10px; /* 更大的圆角使按钮更柔和 */
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.nav-links a:hover {
  background-color: #03dac5;
  color: #000000;
  transform: scale(1.08); /* 更大的悬停效果 */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4); /* 悬停时添加阴影 */
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
  background-color: #6200ea;
  color: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4); /* 激活状态添加阴影 */
}

.theme-toggle {
  display: flex;
  align-items: center;
}
</style>
