import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map43',
  templateUrl: './map43.component.html',
  styleUrls: ['./map43.component.css']
})
export class Map43Component {
  constructor(private globalService: GlobalService){}

  goToMap42() {
    this.globalService.player.positionX = 4;
    this.globalService.player.positionY = 2;
  }

  goToMap44() {
    this.globalService.player.positionX = 4;
    this.globalService.player.positionY = 4;
  }
  goToMap33() {
    this.globalService.player.positionX = 3;
    this.globalService.player.positionY = 3;
  }
}
