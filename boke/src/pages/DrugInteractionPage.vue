<template>
    <div class="container">
      <section class="header-section">
        <h1>药物作用信息图</h1>
        <p>探索不同药物的作用与效果。</p>
      </section>
  
      <section class="chart-section">
        <h2>药物作用折线图示例</h2>
        <div class="examples">
          <div id="drug-effect-chart-1" class="chart"></div>
          <div id="drug-effect-chart-2" class="chart"></div>
          <div id="drug-effect-chart-3" class="chart"></div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import Highcharts from 'highcharts';
  
  export default {
    mounted() {
      this.renderChart1();
      this.renderChart2();
      this.renderChart3();
    },
    methods: {
      renderChart1() {
        Highcharts.chart('drug-effect-chart-1', {
          chart: {
            type: 'line',
            backgroundColor: '#f0f8ff',
          },
          title: {
            text: '药物A的剂量-反应曲线',
            style: { color: '#6200ea', fontSize: '20px' },
          },
          xAxis: {
            categories: ['0mg', '10mg', '20mg', '30mg', '40mg'],
          },
          yAxis: {
            title: {
              text: '反应强度',
            },
          },
          series: [
            {
              name: '药物A',
              data: [0, 15, 30, 50, 60],
              color: '#03dac5',
            },
          ],
        });
      },
      renderChart2() {
        Highcharts.chart('drug-effect-chart-2', {
          chart: {
            type: 'line',
            backgroundColor: '#f0fff0',
          },
          title: {
            text: '药物B的剂量-反应曲线',
            style: { color: '#6200ea', fontSize: '20px' },
          },
          xAxis: {
            categories: ['0mg', '10mg', '20mg', '30mg', '40mg'],
          },
          yAxis: {
            title: {
              text: '反应强度',
            },
          },
          series: [
            {
              name: '药物B',
              data: [0, 10, 25, 45, 55],
              color: '#ff9800',
            },
          ],
        });
      },
      renderChart3() {
        Highcharts.chart('drug-effect-chart-3', {
          chart: {
            type: 'line',
            backgroundColor: '#fff0f5',
          },
          title: {
            text: '药物C的剂量-反应曲线',
            style: { color: '#6200ea', fontSize: '20px' },
          },
          xAxis: {
            categories: ['0mg', '10mg', '20mg', '30mg', '40mg'],
          },
          yAxis: {
            title: {
              text: '反应强度',
            },
          },
          series: [
            {
              name: '药物C',
              data: [0, 20, 40, 60, 80],
              color: '#f44336',
            },
          ],
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .header-section {
    text-align: center;
    margin-bottom: 40px;
  }
  
  .header-section h1 {
    font-size: 3em;
    color: #6200ea;
    margin-bottom: 10px;
  }
  
  .header-section p {
    font-size: 1.2em;
    color: #333;
  }
  
  .chart-section {
    margin-bottom: 40px;
  }
  
  .chart-section h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #6200ea;
  }
  
  .examples {
    display: flex;
    justify-content: space-around;
    gap: 20px;
    flex-wrap: wrap;
  }
  
  .chart {
    width: 350px;
    height: 350px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
  </style>
  