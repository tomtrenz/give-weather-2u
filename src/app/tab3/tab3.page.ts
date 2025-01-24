import { Component, OnInit } from "@angular/core";
import { Location, WeatherMessage, WeatherService } from "../api/weather.service";
import { FavoritesService } from "../services/favorites.service";
import { Storage } from '@ionic/storage-angular';

import { FavoriteLocation } from '../app.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  weatherMsg?: WeatherMessage;
  lang: string = "cs";
  lokace: string = "";
  oblibeneLokace: FavoriteLocation[] = [];

  constructor(private storage: Storage, public weatherService: WeatherService, public favoritesService:FavoritesService) { }

}
