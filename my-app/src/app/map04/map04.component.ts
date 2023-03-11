import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map04',
  templateUrl: './map04.component.html',
  styleUrls: ['./map04.component.css']
})
export class Map04Component {
  constructor(private globalService: GlobalService){}

  goToMap14() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 4;
  }

  goToMap03() {
    this.globalService.player.positionX = 0;
    this.globalService.player.positionY = 3;
  }
}
