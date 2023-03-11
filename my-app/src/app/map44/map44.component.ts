import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map44',
  templateUrl: './map44.component.html',
  styleUrls: ['./map44.component.css']
})
export class Map44Component {
  constructor(private globalService: GlobalService){}

  goToMap43() {
    this.globalService.player.positionX = 4;
    this.globalService.player.positionY = 3;
  }

  goToMap34() {
    this.globalService.player.positionX = 3;
    this.globalService.player.positionY = 4;
  }
}
