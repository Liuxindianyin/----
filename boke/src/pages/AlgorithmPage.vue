<template>
    <div class="algorithm-page">
      <h1>算法可视化</h1>
      
      <!-- 算法选择按钮 -->
      <div class="algorithm-selector">
        <button v-for="algo in algorithms" :key="algo.name" @click="selectedAlgorithm = algo">
          {{ algo.displayName }}
        </button>
      </div>
  
      <!-- 算法可视化展示 -->
      <div v-if="selectedAlgorithm" class="algorithm-visualization">
        <component :is="selectedAlgorithm.component" />
      </div>
    </div>
  </template>
  
  <script>
  // 导入各个算法可视化组件
  import SortingVisualizer from '../components/SortingVisualizer.vue';
  import PathfindingVisualizer from '../components/PathfindingVisualizer.vue';
  import GraphAlgorithmVisualizer from '../components/GraphAlgorithmVisualizer.vue';
  
  export default {
    data() {
      return {
        selectedAlgorithm: null,
        algorithms: [
          { name: 'sorting', displayName: '排序算法', component: SortingVisualizer },
          { name: 'pathfinding', displayName: '路径搜索算法', component: PathfindingVisualizer },
          { name: 'graph', displayName: '图形算法', component: GraphAlgorithmVisualizer },
        ],
      };
    }
  };
  </script>
  
  <style scoped>
  .algorithm-page {
    padding: 20px;
  }
  
  .algorithm-selector {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
  }
  
  .algorithm-selector button {
    background-color: #6200ea;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .algorithm-selector button:hover {
    background-color: #3700b3;
  }
  
  .algorithm-visualization {
    margin-top: 40px;
  }
  </style>
  