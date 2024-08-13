<template>
    <div ref="chart" class="chart-container"></div>
  </template>
  
  <script>
  import * as echarts from 'echarts';
  
  export default {
    mounted() {
      this.initChart();
    },
    methods: {
      initChart() {
        const chart = echarts.init(this.$refs.chart);
        const option = {
          title: {
            text: '医学与编程交叉研究数据'
          },
          tooltip: {},
          xAxis: {
            data: ['2015', '2017', '2020', '2022']
          },
          yAxis: {},
          series: [{
            name: '研究成果',
            type: 'bar',
            data: [5, 20, 36, 10]
          }]
        };
        chart.setOption(option);
      }
    }
  };
  </script>
  
  <style scoped>
  .chart-container {
    width: 100%;
    height: 400px;
  }
  </style>
  