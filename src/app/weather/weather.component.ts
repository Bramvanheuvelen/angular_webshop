import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  chart = [];

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.dailyForecast()
      .subscribe(result => {
        console.log(result)

        let temp_max = result.main.temp_max
        let temp_min = result.main.temp_min

        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: result.id,
            datasets: [
              {
                data: temp_max,
                borderColor: '#3cba9f',
                fill: false
              },
              {
                data: temp_min,
                borderColor: '#ffcc00',
                fill: false
              },
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }]
            }
          }
        })

      })
  }
}

