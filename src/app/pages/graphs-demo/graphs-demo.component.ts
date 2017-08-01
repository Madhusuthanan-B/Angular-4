import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-graphs-demo',
  templateUrl: './graphs-demo.component.html',
  styleUrls: ['./graphs-demo.component.css']
})
export class GraphsDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initializeGroupedBarChart();
    this.initializePolarChart();
    this.initializeBubbleChart();
    this.initializeLineChart();
  }

  initializeGroupedBarChart() {
    const canvas = document.getElementById('bar-chart-grouped');
    const chart = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: ['2013', '2014', '2016', '2017'],
        datasets: [
          {
            label: 'Angular',
            backgroundColor: '#3e95cd',
            data: [25, 40, 60, 85]
          }, {
            label: 'Backbone',
            backgroundColor: '#8e5ea2',
            data: [80, 60, 47, 15]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Angular vs Backbone growth (Percentage)'
        }
      }
    });
  }

  initializePolarChart() {
    const polarChart = new Chart(document.getElementById('polar-chart'), {
      type: 'polarArea',
      data: {
        labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
        datasets: [
          {
            label: 'Population (millions)',
            backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850'],
            data: [2478, 5267, 734, 784, 433]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Predicted world population (millions) in 2050'
        }
      }
    });
  }

  initializeBubbleChart() {
    const bubbleChart = new Chart(document.getElementById('doughnut-chart'), {
      type: 'doughnut',
      data: {
        labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
        datasets: [
          {
            label: 'Population (millions)',
            backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850'],
            data: [2478, 5267, 734, 784, 433]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Predicted world population (millions) in 2050'
        }
      }
    });
  }

  initializeLineChart() {
    const lineChart = new Chart(document.getElementById('line-chart'), {
      type: 'line',
      data: {
        labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
        datasets: [{
          data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
          label: 'Africa',
          borderColor: '#3e95cd',
          fill: false
        }, {
          data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
          label: 'Asia',
          borderColor: '#8e5ea2',
          fill: false
        }, {
          data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
          label: 'Europe',
          borderColor: '#3cba9f',
          fill: false
        }, {
          data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
          label: 'Latin America',
          borderColor: '#e8c3b9',
          fill: false
        }, {
          data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
          label: 'North America',
          borderColor: '#c45850',
          fill: false
        }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'World population per region (in millions)'
        }
      }
    });
  }

}
