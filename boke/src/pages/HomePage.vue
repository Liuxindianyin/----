<template>
    <div>
      <h1>欢迎来到我的博客</h1>
      <PostList :posts="posts" />
    </div>
  </template>
  
  <script>
  import PostList from '../components/PostList.vue';
  
  export default {
    components: {
      PostList
    },
    data() {
      return {
        posts: [
          {
            id: 1,
            title: '医学与计算机的交叉点',
            excerpt: '探索医学与计算机科学之间的紧密联系...',
            coverImage: '/src/assets/medical-computing.jpg'
          },
          {
            id: 2,
            title: '编程入门指南',
            excerpt: '了解编程的基础知识，从这里开始...',
            coverImage: '/src/assets/programming-basics.jpg'
          }
        ]
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
  