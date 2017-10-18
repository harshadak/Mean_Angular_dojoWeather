import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; // <— Imported

@Injectable()
export class WeatherService {

  apiKey = '&appid=ed0ea140436fc30efff8a1e5fa2e9b79';

  constructor(private _http: Http) { }
  retrieveWeather(city, callback, errorback) {
    this._http.get('https://api.openweathermap.org/data/2.5/weather?q='+city+this.apiKey+'&units=imperial').subscribe( 
      (response) => { 
        callback(response.json());
       }, // <— first method
      (error) => { 
        errorback();
        console.log(error);
       } // <— second method
      
    );
  }

}
