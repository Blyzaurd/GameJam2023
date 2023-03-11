import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map12',
  templateUrl: './map12.component.html',
  styleUrls: ['./map12.component.css']
})
export class Map12Component {
  constructor(private globalService: GlobalService){}

  goToMap02() {
    this.globalService.player.positionX = 0;
    this.globalService.player.positionY = 2;
  }

  goToMap22() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 2;
  }
  goToMap11() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 1;
  }
  goToMap13() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 3;
  }
}
