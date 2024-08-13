<template>
  <div class="growth-container">
    <h1>成长经历</h1>
    <Timeline :events="events" />
  </div>
</template>

<script>
import Timeline from '../components/Timeline.vue';

export default {
  components: {
    Timeline
  },
  data() {
    return {
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
.growth-container {
  padding: 40px;
  background: linear-gradient(to right, #8e2de2, #4a00e0);
  color: white;
  border-radius: 15px;
}

.growth-container h1 {
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 20px;
}

.timeline-container {
  margin-top: 20px;
}
</style>
