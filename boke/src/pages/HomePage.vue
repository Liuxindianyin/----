<template>
  <div id="home">
    <!-- 粒子背景容器 -->
    <div id="tsparticles"></div>
    
    <!-- 顶部部分：介绍、欢迎语等 -->
    <section class="hero" data-aos="fade-up">
      <h1>欢迎来到我的博客</h1>
      <p>探索医学与计算机科学的交叉点</p>
    </section>

    <!-- 成长经历部分 -->
    <section class="timeline-section" data-aos="fade-up">
      <h2>我的成长经历</h2>
      <Timeline :events="events" />
    </section>

    <!-- 博客文章部分 -->
    <section class="blog-section" data-aos="fade-up">
      <h2>最新文章</h2>
      <PostList :posts="posts" />
    </section>
  </div>
</template>

<script>
import Timeline from '../components/Timeline.vue';
import PostList from '../components/PostList.vue';
import { loadFull } from "tsparticles"; // 使用 loadFull 导入
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  components: {
    Timeline,
    PostList
  },
  mounted() {
    // 初始化粒子背景
    loadFull(tsParticles);
    tsParticles.load("tsparticles", {
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4,
          },
          push: {
            quantity: 4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outMode: "bounce",
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          random: true,
          value: 5,
        },
      },
      detectRetina: true,
    });

    // 初始化AOS动画
    AOS.init();
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: '医学与计算机的交叉点',
          excerpt: '探索医学与计算机科学之间的紧密联系...',
          coverImage: new URL('../assets/medical-computing.jpg', import.meta.url).href
        },
        {
          id: 2,
          title: '编程入门指南',
          excerpt: '了解编程的基础知识，从这里开始...',
          coverImage: new URL('../assets/programming-basics.jpg', import.meta.url).href
        }
      ],
      events: [
          { year: '2023.8', description: '在武汉大学开始攻读医学专业，并对计算机科学产生浓厚兴趣。' },
          { year: '2023.11', description: '在学习高数两个月后，抱着试一试的态度参加了大学生数学竞赛，获得了三等奖' },
          { year: '2024.4', description: '参加华中杯数学建模大赛，准备时间不长，最终拿到一个入门奖' },
          { year: '2024.7', description: '参加了亚太杯中文赛区数模比赛' },
          { year: '2024.8', description: '开始学习搭建网站，先后学习了html，css，js以及vue。' }
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

/* 粒子背景容器样式 */
#tsparticles {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
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
