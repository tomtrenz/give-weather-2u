import { Component } from "@angular/core";
import { Location, WeatherMessage, WeatherService } from "../api/weather.service";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
  standalone: false,
})
export class Tab1Page {
  weatherMsg?: WeatherMessage;
  lang: string = "cs";
  lokace: string = "Brno";


  constructor(private weatherService: WeatherService) {}

  async searchClicked() {
    console.log(this.weatherMsg?.location);

    this.weatherMsg = await this.weatherService.fetchCurrentInfo(
      this.lokace, this.lang
    );
  }
}