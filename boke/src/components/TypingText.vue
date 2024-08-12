<template>
    <div class="typing-text">
      {{ displayText }}
    </div>
  </template>
  
  <script>
  export default {
    props: {
      text: {
        type: String,
        required: true
      },
      speed: {
        type: Number,
        default: 100
      }
    },
    data() {
      return {
        displayText: '',
        index: 0
      };
    },
    mounted() {
      this.type();
    },
    methods: {
      type() {
        if (this.index < this.text.length) {
          this.displayText += this.text[this.index];
          this.index++;
          setTimeout(this.type, this.speed);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .typing-text {
    font-size: 2em;
    font-weight: bold;
    color: var(--text-color);
    white-space: nowrap;
    overflow: hidden;
    border-right: 2px solid var(--text-color);
    animation: blink 0.75s step-end infinite;
  }
  
  @keyframes blink {
    from, to {
      border-color: transparent;
    }
    50% {
      border-color: var(--text-color);
    }
  }
  </style>
  