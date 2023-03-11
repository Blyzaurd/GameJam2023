import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map14',
  templateUrl: './map14.component.html',
  styleUrls: ['./map14.component.css']
})
export class Map14Component {
  constructor(private globalService: GlobalService){}

  goToMap24() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 4;
  }

  goToMap04() {
    this.globalService.player.positionX = 0;
    this.globalService.player.positionY = 4;
  }
  goToMap13() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 3;
  }
}
