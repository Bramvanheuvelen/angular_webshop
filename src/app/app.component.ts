import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webshop-homework';

  chart = [];

  constructor(private weatherHttp: WeatherService) {}

  ngOnInit() {
    this.weatherHttp.dailyForecast()
      .subscribe(result => {

        let temp_max = result['list'].map(result => result.main.temp_max)
        let temp_min = result['list'].map(result => result.main.temp_min)
        let alldates = result['list'].map(result => result.dt)

        let weatherDates = []
        alldates.forEach((res) => {
          let jsdate = new Date(res * 1000)
          weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric'}))
        })

        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: weatherDates,
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
