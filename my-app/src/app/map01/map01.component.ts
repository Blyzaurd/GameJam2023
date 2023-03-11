import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map01',
  templateUrl: './map01.component.html',
  styleUrls: ['./map01.component.css']
})
export class Map01Component {

  constructor(private globalService: GlobalService){}

  goToMap11() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 1;
  }
  goToMap00() {
    this.globalService.player.positionX = 0;
    this.globalService.player.positionY = 0;
  }
}
