<template>
    <div>
      <h1>{{ categoryName }} 分类</h1>
      <PostList :posts="filteredPosts" />
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
        categoryName: this.$route.params.name,
        posts: [
          { id: 1, title: '医学与计算机', content: '...', category: '医学' },
          { id: 2, title: '编程的基础', content: '...', category: '计算机' }
        ]
      };
    },
    computed: {
      filteredPosts() {
        return this.posts.filter(post => post.category === this.categoryName);
      }
    }
  };
  </script>
  
  <style scoped>
  h1 {
    font-size: 2em;
    margin-bottom: 20px;
  }
  </style>
  