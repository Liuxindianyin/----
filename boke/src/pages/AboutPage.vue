<template>
  <div class="about-container">
    <!-- 个人介绍部分 -->
    <section class="intro-section" data-aos="fade-up">
      <h1>关于我</h1>
      <p>
        你好！我是武汉大学的一名医学生，同时也是一名对编程与医学交叉领域充满热情的学习者。
        我热衷于探索如何利用编程和数据分析来改进医学研究和临床实践。
      </p>
    </section>

    <!-- 技能展示部分 -->
    <section class="skills-section" data-aos="fade-up">
      <h2>技能</h2>
      <div class="skills">
        <div class="skill">
          <span>医学研究</span>
          <div class="progress-bar">
            <div class="progress" style="width: 90%"></div>
          </div>
        </div>
        <div class="skill">
          <span>Python 编程</span>
          <div class="progress-bar">
            <div class="progress" style="width: 80%"></div>
          </div>
        </div>
        <div class="skill">
          <span>Vue.js 开发</span>
          <div class="progress-bar">
            <div class="progress" style="width: 70%"></div>
          </div>
        </div>
        <div class="skill">
          <span>数据分析</span>
          <div class="progress-bar">
            <div class="progress" style="width: 75%"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- 项目经历部分 -->
    <section class="projects-section" data-aos="fade-up">
      <h2>项目经历</h2>
      <ul>
        <li>健康数据分析工具开发</li>
        <li>医学与编程相关的跨学科研究项目</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
};
</script>

<style scoped>
.about-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.intro-section {
  text-align: center;
  margin-bottom: 40px;
}

.intro-section h1 {
  font-size: 2.5em;
  color: #4a148c; /* 深紫色 */
}

.intro-section p {
  font-size: 1.2em;
  color: #333333; /* 深灰色，提升对比度 */
  line-height: 1.6;
}

.skills-section h2,
.projects-section h2 {
  font-size: 2em;
  color: #311b92; /* 紫色，增强对比 */
  margin-bottom: 20px;
}

.skills {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 40px;
}

.skill {
  display: flex;
  flex-direction: column;
}

.skill span {
  font-weight: bold;
  margin-bottom: 5px;
  color: #212121; /* 深灰色文字 */
}

.progress-bar {
  background-color: #eeeeee; /* 浅灰色背景 */
  border-radius: 5px;
  overflow: hidden;
}

.progress {
  background-color: #6200ea; /* 使用主色作为进度条颜色 */
  height: 10px;
  transition: width 0.5s ease;
}

.projects-section ul {
  list-style-type: disc;
  margin-left: 20px;
  color: #424242; /* 更深的灰色，确保文字清晰 */
}

.projects-section li {
  margin-bottom: 10px;
  font-size: 1.1em;
}
</style>
