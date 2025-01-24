import { Component, OnInit } from "@angular/core";
import { Location, WeatherMessage, WeatherService } from "../api/weather.service";
import { FavoritesService } from "../services/favorites.service";
import { Storage } from '@ionic/storage-angular';

import { FavoriteLocation } from '../app.component';


@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
  standalone: false,
})
export class Tab1Page implements OnInit {
  searchValue:string = "";

  async loadTemperaturesForFavorites() {
    for (const lokace of this.favoritesService.oblibeneLokace) {
      try {
        const data = await this.weatherService.fetchCurrentInfoSaved(lokace.name, lokace.region, 'cs');
        lokace.currentTemp = data.current?.temp_c;
      } catch (err) {
        console.error('Chyba při načtení teploty pro', lokace, err);
      }
    }
  }

  ngOnInit() {


        // 2) Nyní projdi každou uloženou lokaci a načti počasí
        this.loadTemperaturesForFavorites();
  };

  doSearch() {
    this.weatherService.searchClicked(this.searchValue);
  };



  constructor(public storage: Storage, public weatherService: WeatherService, public favoritesService:FavoritesService) { }





}