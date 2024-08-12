<template>
    <div class="card">
      <img :src="post.coverImage" alt="Post Cover" class="card-image" />
      <div class="card-content">
        <h2>{{ post.title }}</h2>
        <p>{{ post.excerpt }}</p>
        <router-link :to="`/post/${post.id}`" class="read-more">阅读更多</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      post: Object
    }
  };
  </script>
  
  <style scoped>
  .card {
    background-color: var(--card-bg);
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
    box-shadow: 0 4px 8px var(--card-shadow);
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px var(--card-shadow);
  }
  
  .card-image {
    width: 100%;
    height: auto;
  }
  
  .card-content {
    padding: 16px;
  }
  
  .card-content h2 {
    font-size: 1.5em;
    margin-bottom: 8px;
  }
  
  .card-content p {
    font-size: 1em;
    margin-bottom: 16px;
    color: var(--text-color);
  }
  
  .read-more {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 500;
  }
  </style>
  