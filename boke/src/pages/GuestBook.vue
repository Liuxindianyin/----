<template>
    <div>
      <h1>留言板</h1>
      <textarea v-model="newMessage" placeholder="留下您的留言..."></textarea>
      <button @click="addMessage">提交留言</button>
      <ul>
        <li v-for="message in messages" :key="message.id">
          <p>{{ message.text }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newMessage: '',
        messages: []
      };
    },
    methods: {
      addMessage() {
        if (this.newMessage.trim()) {
          this.messages.push({
            id: this.messages.length + 1,
            text: this.newMessage
          });
          this.newMessage = '';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: var(--bg-color);
    color: var(--text-color);
  }
  
  button {
    padding: 10px 20px;
    background-color: var(--button-bg);
    color: var(--button-text);
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: var(--button-hover-bg);
  }
  
  ul {
    margin-top: 20px;
  }
  
  li {
    padding: 10px;
    background-color: var(--bg-color);
    border-bottom: 1px solid #ddd;
  }
  </style>
  
  