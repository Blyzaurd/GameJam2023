import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map03',
  templateUrl: './map03.component.html',
  styleUrls: ['./map03.component.css']
})
export class Map03Component {
  constructor(private globalService: GlobalService){}

  goToMap02() {
    this.globalService.player.positionX = 0;
    this.globalService.player.positionY = 1;
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
