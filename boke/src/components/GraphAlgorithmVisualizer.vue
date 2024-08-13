<template>
    <div class="graph-visualizer">
      <h1>图算法可视化</h1>
      <div class="controls">
        <button @click="resetGraph">重置图</button>
        <button @click="runDijkstra">运行 Dijkstra 算法</button>
      </div>
      <div ref="canvas" class="graph-canvas"></div>
    </div>
  </template>
  
  <script>
  import * as d3 from 'd3';
  
  export default {
    data() {
      return {
        nodes: [],
        links: [],
      };
    },
    mounted() {
      this.resetGraph();
    },
    methods: {
      resetGraph() {
        // 创建一个简单的图结构
        this.nodes = [
          { id: 1, x: 50, y: 50 },
          { id: 2, x: 250, y: 50 },
          { id: 3, x: 50, y: 250 },
          { id: 4, x: 250, y: 250 },
        ];
        this.links = [
          { source: 1, target: 2, weight: 1 },
          { source: 1, target: 3, weight: 3 },
          { source: 2, target: 4, weight: 1 },
          { source: 3, target: 4, weight: 2 },
        ];
        this.drawGraph();
      },
      drawGraph() {
        const canvas = d3.select(this.$refs.canvas);
        canvas.selectAll("*").remove();
  
        const width = this.$refs.canvas.clientWidth;
        const height = this.$refs.canvas.clientHeight;
  
        const svg = canvas.append("svg")
          .attr("width", width)
          .attr("height", height);
  
        const linkElements = svg.append("g")
          .selectAll("line")
          .data(this.links)
          .enter().append("line")
          .attr("x1", d => this.getNode(d.source).x)
          .attr("y1", d => this.getNode(d.source).y)
          .attr("x2", d => this.getNode(d.target).x)
          .attr("y2", d => this.getNode(d.target).y)
          .attr("stroke-width", 2)
          .attr("stroke", "#aaa");
  
        const nodeElements = svg.append("g")
          .selectAll("circle")
          .data(this.nodes)
          .enter().append("circle")
          .attr("cx", d => d.x)
          .attr("cy", d => d.y)
          .attr("r", 20)
          .attr("fill", "#03dac6");
  
        nodeElements.call(d3.drag()
          .on("start", (event, d) => {
            d3.select(event.sourceEvent.target).raise().attr("stroke", "black");
          })
          .on("drag", (event, d) => {
            d.x = event.x;
            d.y = event.y;
            d3.select(event.sourceEvent.target)
              .attr("cx", d.x)
              .attr("cy", d.y);
            linkElements
              .attr("x1", d => this.getNode(d.source).x)
              .attr("y1", d => this.getNode(d.source).y)
              .attr("x2", d => this.getNode(d.target).x)
              .attr("y2", d => this.getNode(d.target).y);
          })
          .on("end", (event, d) => {
            d3.select(event.sourceEvent.target).attr("stroke", null);
          }));
      },
      getNode(id) {
        return this.nodes.find(node => node.id === id);
      },
      runDijkstra() {
        // 实现Dijkstra算法的可视化
        alert('这里运行Dijkstra算法');
      }
    }
  };
  </script>
  
  <style scoped>
  .graph-visualizer {
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
  
  .graph-canvas {
    width: 100%;
    height: 600px;
    border: 1px solid #444;
  }
  </style>
  