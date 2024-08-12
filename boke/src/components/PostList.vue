<template>
    <div class="post-list">
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </template>
  
  <script>
  import PostCard from './PostCard.vue';
  
  export default {
    components: {
      PostCard
    },
    props: {
      posts: {
        type: Array,
        default: () => []
      }
    }
  };
  </script>
  
  <style scoped>
  .post-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
  }
  </style>
  