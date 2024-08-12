<template>
    <div class="comment-section">
      <h2>评论</h2>
      <textarea v-model="newComment" placeholder="写下你的评论..."></textarea>
      <button @click="addComment">提交</button>
      <ul>
        <li v-for="comment in comments" :key="comment.id">{{ comment.text }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      postId: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        newComment: '',
        comments: []
      };
    },
    methods: {
      addComment() {
        if (this.newComment.trim()) {
          this.comments.push({
            id: this.comments.length + 1,
            text: this.newComment
          });
          this.newComment = '';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .comment-section {
    margin-top: 30px;
  }
  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
  }
  button {
    padding: 10px 20px;
    background-color: #42b983;
    color: white;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #369a73;
  }
  ul {
    margin-top: 20px;
  }
  li {
    margin-bottom: 10px;
  }
  </style>
  