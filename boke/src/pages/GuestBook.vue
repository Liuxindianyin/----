<template>
  <div class="guestbook">
    <h1>留言板</h1>
    <form @submit.prevent="submitMessage">
      <textarea 
        v-model="newMessage.content" 
        placeholder="留下你的留言..." 
        required>
      </textarea>
      <input v-model="newMessage.author" placeholder="你的名字" required />
      <button type="submit">提交留言</button>
    </form>

    <div v-for="(message, index) in paginatedMessages" :key="index" class="message">
      <div class="message-header">
        <strong>{{ message.author }}</strong>
        <span>{{ formatDate(message.date) }}</span>
      </div>
      <p>{{ message.content }}</p>
      <div class="message-actions">
        <button @click="toggleLike(index)">👍 {{ message.likes }}</button>
        <button @click="replyMessage(index)">回复</button>
      </div>

      <!-- 回复框 -->
      <form v-if="message.showReplyBox" @submit.prevent="submitReply(index)">
        <textarea v-model="message.replyContent" placeholder="写下你的回复..." required></textarea>
        <button type="submit">提交回复</button>
      </form>

      <!-- 回复显示 -->
      <div v-if="message.replies && message.replies.length" class="replies">
        <div v-for="(reply, replyIndex) in message.replies" :key="replyIndex" class="reply">
          <div class="reply-header">
            <strong>{{ reply.author }}</strong>
            <span>{{ formatDate(reply.date) }}</span>
          </div>
          <p>{{ reply.content }}</p>
        </div>
      </div>
    </div>

    <!-- 分页导航 -->
    <div class="pagination">
      <button :disabled="currentPage === 1" @click="changePage(currentPage - 1)">上一页</button>
      <span>第 {{ currentPage }} 页</span>
      <button :disabled="currentPage === totalPages" @click="changePage(currentPage + 1)">下一页</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newMessage: {
        content: '',
        author: ''
      },
      messages: [],
      currentPage: 1,
      messagesPerPage: 5, // 每页显示的留言数量
    };
  },
  computed: {
    paginatedMessages() {
      const start = (this.currentPage - 1) * this.messagesPerPage;
      const end = start + this.messagesPerPage;
      return this.messages.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.messages.length / this.messagesPerPage);
    }
  },
  methods: {
    submitMessage() {
      const newMsg = {
        ...this.newMessage,
        date: new Date(),
        likes: 0,
        replies: [],
        showReplyBox: false,
        replyContent: '',
      };
      this.messages.push(newMsg);
      this.newMessage.content = '';
      this.newMessage.author = '';
    },
    formatDate(date) {
      return new Date(date).toLocaleString();
    },
    toggleLike(index) {
      this.messages[index].likes += 1;
    },
    replyMessage(index) {
      this.messages[index].showReplyBox = !this.messages[index].showReplyBox;
    },
    submitReply(index) {
      const reply = {
        content: this.messages[index].replyContent,
        author: '匿名用户',
        date: new Date(),
      };
      this.messages[index].replies.push(reply);
      this.messages[index].replyContent = '';
      this.messages[index].showReplyBox = false;
    },
    changePage(page) {
      this.currentPage = page;
    }
  }
};
</script>

<style scoped>
.guestbook {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.guestbook h1 {
  text-align: center;
  color: #6200ea;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

textarea {
  resize: none;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  min-height: 100px;
}

input {
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
}

button {
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #6200ea;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #3700b3;
}

.message {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f9f9f9;
}

.message-header {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  color: #333;
}

.message-actions {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.replies {
  margin-top: 10px;
  padding-left: 20px;
}

.reply {
  margin-top: 10px;
  padding: 10px;
  background-color: #f1f1f1;
  border-radius: 4px;
}

.reply-header {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
}

.pagination {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
</style>
