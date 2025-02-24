
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  weatherMsg?: WeatherMessage;
  lang: string = "cs";

  constructor() { }

  goToDetail(name: string, region: string) {
    throw new Error('Method not implemented.');
  }

  async searchClicked(lokace:string) {

    this.weatherMsg = await this.fetchCurrentInfo(lokace, this.lang);
  }

  async searchSaved(lokace:string) {
    this.weatherMsg = await this.fetchCurrentInfo(
      lokace, this.lang
    );
  }

  async fetchCurrentInfo(location: string, lang: string): Promise<WeatherMessage> {
    const url = `${environment.baseUrl}/current.json?key=${environment.apiKey}&q=${location}&lang=${lang}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  }

  async fetchCurrentInfoSaved(location: string,region: string, lang: string): Promise<WeatherMessage> {
    const url = `${environment.baseUrl}/current.json?key=${environment.apiKey}&q=${location},${region}&lang=${lang}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  }

}

export interface WeatherMessage {
  location: Location;
  current: Current;
}

export interface Current {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
}

export interface Condition {
  text: string;
  icon: string;
  code: number;
}

export interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}
