<template>
    <div class="social-share">
      <a :href="`https://twitter.com/share?url=${postUrl}&text=${postTitle}`" target="_blank">Twitter</a>
      <a :href="`https://www.facebook.com/sharer/sharer.php?u=${postUrl}`" target="_blank">Facebook</a>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      postUrl: String,
      postTitle: String
    }
  };
  </script>
  
  <style scoped>
  .social-share {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }
  
  .social-share a {
    text-decoration: none;
    color: var(--primary-color);
    font-weight: 500;
  }
  </style>
  