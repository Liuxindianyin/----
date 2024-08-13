<template>
  <div class="about-container">
    <h1>关于我</h1>
    <p>
      我是一个医学专业的学生，对计算机科学和编程有着浓厚的兴趣。
      目前在探索如何将这两个领域结合起来，创造出更多有价值的成果。
    </p>
    <img :src="aboutMeImage" alt="About me">
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      aboutMeImage: new URL('../assets/about-me.jpg', import.meta.url).href
    };
  }
};
</script>

<style scoped>
.about-container {
  padding: 40px;
  background: linear-gradient(to right, #4e54c8, #8f94fb);
  color: white;
  border-radius: 15px;
  text-align: center;
}

.about-container h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
}

.about-container p {
  font-size: 1.2em;
  margin-bottom: 20px;
}

.about-container img {
  max-width: 100%;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
