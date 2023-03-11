import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map31',
  templateUrl: './map31.component.html',
  styleUrls: ['./map31.component.css']
})
export class Map31Component {
  constructor(private globalService: GlobalService){}

  goToMap21() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 1;
  }

  goToMap30() {
    this.globalService.player.positionX = 3;
    this.globalService.player.positionY = 0;
  }
  goToMap32() {
    this.globalService.player.positionX = 3;
    this.globalService.player.positionY = 2;
  }
}
