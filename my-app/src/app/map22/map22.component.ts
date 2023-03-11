import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map22',
  templateUrl: './map22.component.html',
  styleUrls: ['./map22.component.css']
})
export class Map22Component {
  constructor(private globalService: GlobalService){}

  goToMap21() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 1;
  }

  goToMap23() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 3;
  }

  goToMap32() {
    this.globalService.player.positionX = 3;
    this.globalService.player.positionY = 2;
  }

  goToMap12() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 2;
  }
}
