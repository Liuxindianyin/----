<template>
    <div class="sorting-visualizer">
      <h1>排序算法可视化</h1>
      <div class="controls">
        <button @click="generateArray">生成新数组</button>
        <button @click="bubbleSort">冒泡排序</button>
        <button @click="quickSort">快速排序</button>
        <button @click="mergeSort">归并排序</button>
      </div>
      <div class="array-container">
        <div v-for="(value, index) in array" :key="index" :style="{ height: `${value}px` }" class="array-bar"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        array: [],
      };
    },
    mounted() {
      this.generateArray();
    },
    methods: {
      generateArray() {
        this.array = Array.from({ length: 100 }, () => Math.floor(Math.random() * 300) + 20);
      },
      async bubbleSort() {
        let array = this.array.slice();
        for (let i = 0; i < array.length; i++) {
          for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
              this.swap(array, j, j + 1);
              this.array = array;
              await this.sleep(20);
            }
          }
        }
      },
      async quickSort() {
        await this.quickSortHelper(this.array, 0, this.array.length - 1);
      },
      async quickSortHelper(array, low, high) {
        if (low < high) {
          const pi = await this.partition(array, low, high);
          await this.quickSortHelper(array, low, pi - 1);
          await this.quickSortHelper(array, pi + 1, high);
        }
      },
      async partition(array, low, high) {
        const pivot = array[high];
        let i = low - 1;
        for (let j = low; j < high; j++) {
          if (array[j] < pivot) {
            i++;
            this.swap(array, i, j);
            this.array = array;
            await this.sleep(50);
          }
        }
        this.swap(array, i + 1, high);
        this.array = array;
        await this.sleep(50);
        return i + 1;
      },
      async mergeSort() {
        const array = this.array.slice();
        await this.mergeSortHelper(array, 0, array.length - 1);
      },
      async mergeSortHelper(array, left, right) {
        if (left >= right) return;
        const middle = left + Math.floor((right - left) / 2);
        await this.mergeSortHelper(array, left, middle);
        await this.mergeSortHelper(array, middle + 1, right);
        await this.merge(array, left, middle, right);
      },
      async merge(array, left, middle, right) {
        const leftArr = array.slice(left, middle + 1);
        const rightArr = array.slice(middle + 1, right + 1);
        let i = 0, j = 0, k = left;
        while (i < leftArr.length && j < rightArr.length) {
          if (leftArr[i] <= rightArr[j]) {
            array[k++] = leftArr[i++];
          } else {
            array[k++] = rightArr[j++];
          }
          this.array = array;
          await this.sleep(50);
        }
        while (i < leftArr.length) {
          array[k++] = leftArr[i++];
          this.array = array;
          await this.sleep(50);
        }
        while (j < rightArr.length) {
          array[k++] = rightArr[j++];
          this.array = array;
          await this.sleep(50);
        }
      },
      swap(array, i, j) {
        [array[i], array[j]] = [array[j], array[i]];
      },
      sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
    }
  };
  </script>
  
  <style scoped>
  .sorting-visualizer {
    padding: 20px;
    background-color: #121212;
    color: white;
    min-height: 100vh;
  }
  
  .controls {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  button {
    background-color: #6200ea;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #3700b3;
  }
  
  .array-container {
    display: flex;
    align-items: flex-end;
    height: 300px;
    margin-top: 50px;
  }
  
  .array-bar {
    width: 10px;
    background-color: #03dac6;
    margin: 0 1px;
    transition: all 0.3s ease;
  }
  
  .array-bar.sorted {
    background-color: #6200ea;
  }
  </style>
  