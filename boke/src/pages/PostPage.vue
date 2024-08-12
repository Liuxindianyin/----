<template>
    <div>
      <h1>{{ post.title }}</h1>
      <p>{{ post.content }}</p>
      <SocialShare :postUrl="currentUrl" :postTitle="post.title" />
    </div>
  </template>
  
  <script>
  import SocialShare from '../components/SocialShare.vue';
  
  export default {
    components: {
      SocialShare
    },
    data() {
      return {
        post: {
          id: 1,
          title: '医学与计算机的交叉点',
          content: '这是文章的详细内容...'
        },
        currentUrl: window.location.href
      };
    }
  };
  </script>
  
  <style scoped>
  h1 {
    font-size: 2em;
    margin-bottom: 20px;
  }
  </style>
  