import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';



@Injectable()
export class WeatherService {

  constructor(private _http: HttpClient) { }

  dailyForecast() {
    return this._http.get("api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=df7f0f1a311c73c03ca105a07aab009c")
      .map(result => result);
  }

}
