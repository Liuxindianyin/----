<template>
    <div>
      <Header />
      <div class="category-container">
        <h1>{{ categoryName }} 分类</h1>
        <div class="filter">
          <label for="search">搜索：</label>
          <input id="search" v-model="searchTerm" placeholder="输入关键词..." />
        </div>
        <PostList :posts="filteredPosts" />
      </div>
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';
  import PostList from '../components/PostList.vue';
  
  export default {
    components: {
      Header,
      Footer,
      PostList
    },
    data() {
      return {
        categoryName: this.$route.params.name,
        searchTerm: '',
        posts: [
          { id: 1, title: '医学与计算机', content: '...', category: '医学' },
          { id: 2, title: '编程的基础', content: '...', category: '计算机' }
        ]
      };
    },
    computed: {
      filteredPosts() {
        return this.posts.filter(post => {
          return post.category === this.categoryName &&
                 post.title.includes(this.searchTerm);
        });
      }
    }
  };
  </script>
  
  <style scoped>
  .category-container {
    padding: 20px;
  }
  .filter {
    margin-bottom: 20px;
  }
  input {
    padding: 8px;
    font-size: 16px;
    width: 100%;
    max-width: 300px;
  }
  </style>
  
  