<template>
    <div class="timeline">
      <div v-for="(event, index) in events" :key="index" 
           class="timeline-event" 
           :class="index % 2 === 0 ? 'left' : 'right'"
           ref="eventNodes">
        <div class="timeline-content">
          <h3>{{ event.year }}</h3>
          <p>{{ event.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      events: {
        type: Array,
        required: true
      }
    },
    mounted() {
      const options = {
        root: null,
        threshold: 0.1
      };
  
      const callback = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      };
  
      const observer = new IntersectionObserver(callback, options);
      this.$refs.eventNodes.forEach(node => {
        observer.observe(node);
      });
    }
  };
  </script>
  
  <style scoped>
  .timeline {
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px 0;
  }
  
  .timeline-event {
    display: flex;
    justify-content: center;
    position: relative;
    margin-bottom: 40px;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
  
  .timeline-event.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .timeline-content {
    background: linear-gradient(135deg, #6200ea, #03dac5);
    color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    width: 45%;
    position: relative;
  }
  
  .timeline-content::before {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: white;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
  }
  
  .timeline-content.left {
    text-align: right;
    margin-right: auto;
  }
  
  .timeline-content.left::before {
    right: -25px;
  }
  
  .timeline-content.right {
    text-align: left;
    margin-left: auto;
  }
  
  .timeline-content.right::before {
    left: -25px;
  }
  
  @media screen and (max-width: 768px) {
    .timeline-content {
      width: 90%;
      text-align: center;
    }
  
    .timeline-content.left,
    .timeline-content.right {
      margin: 0 auto;
    }
  
    .timeline-content::before {
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
  }
  </style>
  