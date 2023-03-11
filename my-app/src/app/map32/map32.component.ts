import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map32',
  templateUrl: './map32.component.html',
  styleUrls: ['./map32.component.css']
})
export class Map32Component {
  constructor(private globalService: GlobalService){}

  goToMap22() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 2;
  }

  goToMap33() {
    this.globalService.player.positionX = 3;
    this.globalService.player.positionY = 3;
  }
  goToMap31() {
    this.globalService.player.positionX = 3;
    this.globalService.player.positionY = 1;
  }
}
