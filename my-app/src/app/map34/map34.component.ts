import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map34',
  templateUrl: './map34.component.html',
  styleUrls: ['./map34.component.css']
})
export class Map34Component {
  constructor(private globalService: GlobalService){}

  goToMap33() {
    this.globalService.player.positionX = 3;
    this.globalService.player.positionY = 3;
  }

  goToMap44() {
    this.globalService.player.positionX = 4;
    this.globalService.player.positionY = 4;
  }
}
