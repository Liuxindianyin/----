<!-- src/components/AlgorithmVisualizer.vue -->
<template>
    <div class="visualizer">
      <h2>算法可视化</h2>
      <div class="controls">
        <select v-model="selectedAlgorithm">
          <option value="bubbleSort">冒泡排序</option>
          <option value="selectionSort">选择排序</option>
          <option value="quickSort">快速排序</option>
        </select>
        <button @click="startSorting">开始排序</button>
        <button @click="generateArray">生成新数组</button>
      </div>
      <div class="array-container">
        <div v-for="(value, index) in array" :key="index" class="array-bar" :style="{ height: value + 'px' }"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        array: [],
        isSorting: false,
        selectedAlgorithm: 'bubbleSort',
      };
    },
    methods: {
      generateArray() {
        this.array = Array.from({ length: 50 }, () => Math.floor(Math.random() * 300) + 20);
      },
      async startSorting() {
        if (this.isSorting) return;
        this.isSorting = true;
  
        switch (this.selectedAlgorithm) {
          case 'bubbleSort':
            await this.bubbleSort();
            break;
          case 'selectionSort':
            await this.selectionSort();
            break;
          case 'quickSort':
            await this.quickSort(0, this.array.length - 1);
            break;
        }
  
        this.isSorting = false;
      },
      async bubbleSort() {
        const arr = [...this.array];
        for (let i = 0; i < arr.length - 1; i++) {
          for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
              this.array = [...arr];
              await this.delay(50);
            }
          }
        }
      },
      async selectionSort() {
        const arr = [...this.array];
        for (let i = 0; i < arr.length; i++) {
          let minIdx = i;
          for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIdx]) {
              minIdx = j;
            }
          }
          if (minIdx !== i) {
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
            this.array = [...arr];
            await this.delay(50);
          }
        }
      },
      async quickSort(low, high) {
        if (low < high) {
          const pi = await this.partition(low, high);
          await this.quickSort(low, pi - 1);
          await this.quickSort(pi + 1, high);
        }
      },
      async partition(low, high) {
        const arr = [...this.array];
        const pivot = arr[high];
        let i = low - 1;
  
        for (let j = low; j < high; j++) {
          if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
            this.array = [...arr];
            await this.delay(50);
          }
        }
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        this.array = [...arr];
        await this.delay(50);
        return i + 1;
      },
      delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
    },
    mounted() {
      this.generateArray();
    }
  };
  </script>
  
  <style scoped>
  .visualizer {
    text-align: center;
  }
  .controls {
    margin-bottom: 20px;
  }
  select {
    margin-right: 10px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  button {
    margin-right: 10px;
    padding: 10px 20px;
    background-color: #6200ea;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:disabled {
    background-color: #999;
    cursor: not-allowed;
  }
  .array-container {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 300px;
    margin: 20px 0;
  }
  .array-bar {
    width: 10px;
    margin: 0 2px;
    background-color: #6200ea;
    transition: height 0.3s ease;
  }
  </style>
  