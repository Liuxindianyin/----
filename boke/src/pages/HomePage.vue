<template>
  <div id="home">
    <!-- 顶部部分：介绍、欢迎语等 -->
    <section class="hero">
      <h1>欢迎来到我的博客</h1>
      <p>探索医学与计算机科学的交叉点</p>
    </section>

    <!-- 成长经历部分 -->
    <section class="timeline-section">
      <h2>我的成长经历</h2>
      <Timeline :events="events" />
    </section>

    <!-- 博客文章部分 -->
    <section class="blog-section">
      <h2>最新文章</h2>
      <PostList :posts="posts" />
    </section>
  </div>
</template>

<script>
import Timeline from '../components/Timeline.vue';
import PostList from '../components/PostList.vue';

export default {
  components: {
    Timeline,
    PostList
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: '医学与计算机的交叉点',
          excerpt: '探索医学与计算机科学之间的紧密联系...',
          coverImage: new URL('../assets/medical-computing.jpg', import.meta.url).href  // 使用 new URL 方式导入图片
        },
        {
          id: 2,
          title: '编程入门指南',
          excerpt: '了解编程的基础知识，从这里开始...',
          coverImage: new URL('../assets/programming-basics.jpg', import.meta.url).href  // 使用 new URL 方式导入图片
        }
      ],
      events: [
        { year: '2015', description: '开始攻读医学专业，并对计算机科学产生浓厚兴趣。' },
        { year: '2017', description: '加入编程社团，开始学习编程语言，如Python和JavaScript。' },
        { year: '2018', description: '完成了第一个医疗相关的编程项目，将编程应用于医学研究。' },
        { year: '2020', description: '参与了多个开源项目，并在医学与编程领域取得了初步成果。' },
        { year: '2022', description: '开始探索人工智能在医学中的应用，并参与相关研究项目。' }
      ]
    };
  }
};
</script>

<style scoped>
/* 全局背景设置，使用视差效果 */
#home {
  background-color: #f0f0f0;
  overflow-x: hidden;
}

.hero {
  height: 100vh;
  background: linear-gradient(to right, #4e54c8, #8f94fb);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero h1 {
  font-size: 3em;
  margin-bottom: 0.5em;
  animation: fadeInDown 1s ease-in-out;
}

.hero p {
  font-size: 1.5em;
  animation: fadeInUp 1s ease-in-out;
}

.timeline-section {
  background: linear-gradient(to right, #ece9e6, #ffffff);
  padding: 60px 0;
}

.blog-section {
  background: linear-gradient(to right, #8e2de2, #4a00e0);
  padding: 60px 0;
  color: white;
}

.timeline-section h2,
.blog-section h2 {
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 40px;
  color: #6200ea;
}

/* 视差背景效果 */
#home::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/hero-bg.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  z-index: -1;
  filter: brightness(0.7);
}

/* 标题动画的关键帧 */
@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
