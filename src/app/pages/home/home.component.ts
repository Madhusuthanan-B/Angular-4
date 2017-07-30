import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
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

}
