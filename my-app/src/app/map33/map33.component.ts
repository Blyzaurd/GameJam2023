import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map33',
  templateUrl: './map33.component.html',
  styleUrls: ['./map33.component.css']
})
export class Map33Component {
  constructor(private globalService: GlobalService){}

  goToMap32() {
    this.globalService.player.positionX = 3;
    this.globalService.player.positionY = 2;
  }

  goToMap34() {
    this.globalService.player.positionX = 3;
    this.globalService.player.positionY = 4;
  }
  goToMap43() {
    this.globalService.player.positionX = 4;
    this.globalService.player.positionY = 3;
  }
}
