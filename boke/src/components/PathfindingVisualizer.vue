<template>
    <div class="pathfinding-visualizer">
      <h1>路径查找算法可视化</h1>
      <div class="controls">
        <button @click="generateGrid">生成网格</button>
        <button @click="findPath">查找路径</button>
      </div>
      <div class="grid">
        <div v-for="(row, rowIndex) in grid" :key="rowIndex" class="row">
          <div v-for="(node, nodeIndex) in row" :key="nodeIndex" :class="getNodeClass(node)" @click="toggleObstacle(rowIndex, nodeIndex)"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        grid: [],
        startNode: { row: 0, col: 0 },
        endNode: { row: 9, col: 19 },
      };
    },
    mounted() {
      this.generateGrid();
    },
    methods: {
      generateGrid() {
        this.grid = Array.from({ length: 10 }, (_, row) => Array.from({ length: 20 }, (_, col) => ({
          row,
          col,
          isStart: row === this.startNode.row && col === this.startNode.col,
          isEnd: row === this.endNode.row && col === this.endNode.col,
          isObstacle: false,
          isVisited: false,
          isPath: false,
        })));
      },
      toggleObstacle(row, col) {
        if (this.isStartOrEnd(row, col)) return;
        this.grid[row][col].isObstacle = !this.grid[row][col].isObstacle;
      },
      async findPath() {
        // 简单的宽度优先搜索实现
        const queue = [this.grid[this.startNode.row][this.startNode.col]];
        const directions = [
          { row: -1, col: 0 },
          { row: 1, col: 0 },
          { row: 0, col: -1 },
          { row: 0, col: 1 },
        ];
  
        while (queue.length) {
          const node = queue.shift();
          if (node.isEnd) {
            await this.tracePath(node);
            return;
          }
  
          for (const direction of directions) {
            const newRow = node.row + direction.row;
            const newCol = node.col + direction.col;
            if (this.isValid(newRow, newCol)) {
              const nextNode = this.grid[newRow][newCol];
              if (!nextNode.isVisited && !nextNode.isObstacle) {
                nextNode.isVisited = true;
                nextNode.previousNode = node;
                queue.push(nextNode);
                this.grid = [...this.grid];
                await this.sleep(50);
              }
            }
          }
        }
      },
      async tracePath(node) {
        while (node.previousNode) {
          node.isPath = true;
          node = node.previousNode;
          this.grid = [...this.grid];
          await this.sleep(50);
        }
      },
      isValid(row, col) {
        return row >= 0 && row < this.grid.length && col >= 0 && col < this.grid[0].length;
      },
      isStartOrEnd(row, col) {
        return (row === this.startNode.row && col === this.startNode.col) || (row === this.endNode.row && col === this.endNode.col);
      },
      getNodeClass(node) {
        if (node.isStart) return 'node start';
        if (node.isEnd) return 'node end';
        if (node.isObstacle) return 'node obstacle';
        if (node.isPath) return 'node path';
        if (node.isVisited) return 'node visited';
        return 'node';
      },
      sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
    }
  };
  </script>
  
  <style scoped>
  .pathfinding-visualizer {
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
  
  .grid {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  
  .row {
    display: flex;
    gap: 5px;
  }
  
  .node {
    width: 30px;
    height: 30px;
    background-color: #444;
    border-radius: 4px;
  }
  
  .node.start {
    background-color: #03dac6;
  }
  
  .node.end {
    background-color: #ff0266;
  }
  
  .node.obstacle {
    background-color: #000;
  }
  
  .node.visited {
    background-color: #6200ea;
    transition: background-color 0.3s ease;
  }
  
  .node.path {
    background-color: #ffd600;
    transition: background-color 0.3s ease;
  }
  </style>
  