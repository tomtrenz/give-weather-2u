import { Injectable } from '@angular/core';
import { FavoriteLocation } from '../app.component';
import { Location, WeatherMessage, WeatherService } from "../api/weather.service";
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

    public oblibeneLokace: FavoriteLocation[] = [];

    async ngOnInit() {
      // Teď už je storage vytvořený v app.component.ts
      // Jen si načteš data
      const ulozeneLokace: FavoriteLocation[] = await this.storage.get('oblibeneLokace');
      const Praha: FavoriteLocation = { name: "Praha", region: "Hlavni mesto Praha" };
      const Brno: FavoriteLocation = { name: "Brno", region: "Jihomoravsky kraj" };
      this.oblibeneLokace = ulozeneLokace || [Praha, Brno];
    }

    constructor(private storage: Storage, private weatherService: WeatherService) { }

    async addCity(name: string, region: string) {
      const newCity: FavoriteLocation = { name: name, region: region };
      this.oblibeneLokace.push(newCity);
      await this.storage.set('oblibeneLokace', this.oblibeneLokace);
    }
  
    async removeCity(name: string, region: string) {
      const removedCity: FavoriteLocation = { name: name, region: region };
      this.oblibeneLokace = this.oblibeneLokace.filter(x => {
        return !(x.name === name && x.region === region);
      }); 
      await this.storage.set('oblibeneLokace', this.oblibeneLokace);
    }
}
