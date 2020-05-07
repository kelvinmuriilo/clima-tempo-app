import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Temperatura } from './app.modelo';

//Terceiros
import { Observable } from 'rxjs';

const URL: string = 'https://api.hgbrasil.com/weather?';
const KEY: string = '3142b34b';
//const KEY: string = 'f48c32d0';
const CONFIG: Array<string> = [
    'only_results',
    'temp',
    'description',
    'city',
    'humidity',
    'forecast', 
    'max', 
    'min', 
    'weekday',
    'wind_speedy'
];


@Injectable({
  providedIn: 'root'
})
export class ClimaTempoService {

    private headers = new HttpHeaders({
        "Content-Type": "application/json",
        "Accept": "application/json"
      });

  constructor(
      private httpClient: HttpClient
  ) { }

  getTemperaturaa(nomeCidade: string): Observable<any>{
      console.log(`${URL}array_limit=5&fields=${CONFIG.toString()}&format=json-cors&key=${KEY}&city_name=Aracaju`)
      return this.httpClient.get<any>(
          `${URL}array_limit=6&fields=${CONFIG.toString()}&format=json-cors&key=${KEY}&city_name=${nomeCidade}`
        );
  }
  getTemperatura(nomeCidade: string){
    return {

        "temp": 30,
        "date": "03/05/2020",
        "time": "14:54",
        "condition_code": "29",
        "description": "Parcialmente nublado",
        "currently": "dia",
        "cid": "",
        "city": "Recife, PE",
        "img_id": "29",
        "humidity": 70,
        "wind_speedy": "3.6 km/h",
        "sunrise": "05:22 am",
        "sunset": "05:10 pm",
        "condition_slug": "cloud",
        "city_name": "Recife",
        "forecast": [
            {
                "date": "04/05",
                "weekday": "Seg",
                "max": 28,
                "min": 26,
                "description": "Parcialmente nublado",
                "condition": "cloudly_day"
            },
            {
                "date": "05/05",
                "weekday": "Ter",
                "max": 28,
                "min": 26,
                "description": "Trovoadas dispersas",
                "condition": "storm"
            },
            {
                "date": "06/05",
                "weekday": "Qua",
                "max": 28,
                "min": 26,
                "description": "Tempestades isoladas",
                "condition": "storm"
            },
            {
                "date": "07/05",
                "weekday": "Qui",
                "max": 27,
                "min": 25,
                "description": "Tempestades isoladas",
                "condition": "storm"
            },
            {
                "date": "08/05",
                "weekday": "Sex",
                "max": 28,
                "min": 25,
                "description": "Alguns chuviscos",
                "condition": "rain"
            }
        ]
      
    }
  }

  

}
