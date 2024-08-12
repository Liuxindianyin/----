<template>
    <div class="post-list">
      <div v-for="post in posts" :key="post.id" class="post-item">
        <router-link :to="`/post/${post.id}`">
          <h2>{{ post.title }}</h2>
          <p>{{ post.content.slice(0, 100) }}...</p>
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
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
  
  .post-item {
    background-color: var(--bg-color);
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .post-item:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
  }
  
  .post-item h2 {
    margin: 0;
    padding: 16px;
    font-size: 1.5em;
  }
  
  .post-item p {
    padding: 0 16px 16px 16px;
    color: var(--text-color);
  }
  </style>
  