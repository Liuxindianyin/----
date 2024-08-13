<template>
  <div class="social-share">
    <button @click="shareOnTwitter">分享到Twitter</button>
    <button @click="shareOnFacebook">分享到Facebook</button>
  </div>
</template>

<script>
export default {
  props: ['postUrl', 'postTitle'],
  methods: {
    shareOnTwitter() {
      const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(this.postTitle)}&url=${encodeURIComponent(this.postUrl)}`;
      window.open(url, '_blank');
    },
    shareOnFacebook() {
      const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.postUrl)}`;
      window.open(url, '_blank');
    }
  }
};
</script>

<style scoped>
.social-share {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.social-share button {
  background-color: var(--button-bg);
  color: var(--button-text);
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.social-share button:hover {
  background-color: var(--button-hover-bg);
}
</style>
