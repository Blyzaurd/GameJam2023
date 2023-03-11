import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map13',
  templateUrl: './map13.component.html',
  styleUrls: ['./map13.component.css']
})
export class Map13Component {
  constructor(private globalService: GlobalService){}

  goToMap12() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 2;
  }

  goToMap14() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 4;
  }
  goToMap03() {
    this.globalService.player.positionX = 0;
    this.globalService.player.positionY = 3;
  }
  goToMap23() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 3;
  }
}
