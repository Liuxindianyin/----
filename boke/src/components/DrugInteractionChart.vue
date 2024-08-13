<template>
    <div id="drug-interaction-chart"></div>
  </template>
  
  <script>
  import Highcharts from 'highcharts';
  
  export default {
    name: 'DrugInteractionChart',
    props: {
      chartData: {
        type: Array,
        required: true,
      },
    },
    mounted() {
      this.renderChart();
    },
    methods: {
      renderChart() {
        Highcharts.chart('drug-interaction-chart', {
          chart: {
            type: 'networkgraph',
            backgroundColor: '#f5f5f5', // 设置背景颜色
          },
          title: {
            text: '药物互动信息图',
            style: {
              color: '#6200ea',
              fontSize: '24px',
            },
          },
          plotOptions: {
            networkgraph: {
              keys: ['from', 'to'],
              layoutAlgorithm: {
                enableSimulation: true,
              },
            },
          },
          series: [
            {
              dataLabels: {
                enabled: true,
                linkFormat: '',
                allowOverlap: true,
                style: {
                  fontSize: '16px',
                  color: '#000000',
                },
              },
              marker: {
                radius: 10,
              },
              data: this.chartData,
            },
          ],
        });
      },
    },
  };
  </script>
  
  <style scoped>
  #drug-interaction-chart {
    width: 100%;
    height: 500px;
    margin: 20px auto;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
  </style>
  