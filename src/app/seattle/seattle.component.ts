import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {

  humidity: number;
  temp_avg: number;
  temp_hi: number;
  temp_low: number;
  status: string;


  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    // this.score = 12;
    this._weatherService.retrieveWeather('Seattle, WA', (weatherData) => { //callback is here
      this.humidity = weatherData["main"]["humidity"];
      this.temp_avg = weatherData["main"]["temp"];
      this.temp_hi = weatherData["main"]["temp_max"];
      this.temp_low = weatherData["main"]["temp_min"];
      this.status = weatherData["weather"][0]["description"];
      console.log(this.humidity)
    },() => { //errorback function this is the second parameter of retrieveTasks
      console.log("error something")
    });
  }

}
