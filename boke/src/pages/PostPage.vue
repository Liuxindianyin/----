<template>
    <div>
      <Header />
      <div class="post-container">
        <h1>{{ post.title }}</h1>
        <p>{{ post.content }}</p>
        <div class="stats">
          <span>查看次数: {{ views }}</span>
          <button @click="toggleLike">
            {{ liked ? '❤️ 已点赞' : '🤍 点赞' }} ({{ likes }})
          </button>
        </div>
        <CommentSection :postId="post.id" />
      </div>
      <Footer />
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';
  import CommentSection from '../components/CommentSection.vue';
  
  export default {
    components: {
      Header,
      Footer,
      CommentSection
    },
    data() {
      return {
        post: {},
        views: 0,
        likes: 0,
        liked: false
      };
    },
    methods: {
      fetchPost() {
        this.post = {
          id: this.$route.params.id,
          title: '医学与编程的交叉点',
          content: '内容丰富的文章...'
        };
        this.views = parseInt(localStorage.getItem(`post-${this.post.id}-views`) || 0) + 1;
        localStorage.setItem(`post-${this.post.id}-views`, this.views);
  
        this.likes = parseInt(localStorage.getItem(`post-${this.post.id}-likes`) || 0);
        this.liked = localStorage.getItem(`post-${this.post.id}-liked`) === 'true';
      },
      toggleLike() {
        this.liked = !this.liked;
        if (this.liked) {
          this.likes += 1;
        } else {
          this.likes -= 1;
        }
        localStorage.setItem(`post-${this.post.id}-likes`, this.likes);
        localStorage.setItem(`post-${this.post.id}-liked`, this.liked);
      }
    },
    mounted() {
      this.fetchPost();
    }
  };
  </script>
  
  <style scoped>
  .post-container {
    padding: 20px;
  }
  .stats {
    margin-top: 20px;
  }
  button {
    padding: 5px 10px;
    font-size: 16px;
    cursor: pointer;
    background-color: var(--button-bg);
    color: var(--button-text);
    border: none;
    border-radius: 5px;
  }
  button:hover {
    background-color: #369a73;
  }
  </style>
  