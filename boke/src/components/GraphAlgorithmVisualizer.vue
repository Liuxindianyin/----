<template>
    <div>
      <h2>图形算法可视化</h2>
      <div class="graph-container">
        <div 
          v-for="(node, index) in nodes" 
          :key="index" 
          :class="['graph-node', { 'visited': node.visited }]" 
          @click="traverseDFS(index)">
          {{ node.label }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nodes: Array.from({ length: 10 }, (_, index) => ({
          label: `Node ${index + 1}`,
          visited: false
        })),
        edges: [
          [0, 1], [0, 2], [1, 3], [1, 4],
          [2, 5], [2, 6], [3, 7], [4, 8], [5, 9]
        ],
      };
    },
    methods: {
      traverseDFS(startIndex) {
        const stack = [startIndex];
        while (stack.length > 0) {
          const nodeIndex = stack.pop();
          if (!this.nodes[nodeIndex].visited) {
            this.$set(this.nodes[nodeIndex], 'visited', true);
            const connectedNodes = this.edges
              .filter(edge => edge[0] === nodeIndex)
              .map(edge => edge[1]);
            stack.push(...connectedNodes);
          }
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .graph-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    margin-top: 20px;
  }
  
  .graph-node {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #6200ea;
    color: white;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .graph-node.visited {
    background-color: #03dac5;
  }
  </style>
  