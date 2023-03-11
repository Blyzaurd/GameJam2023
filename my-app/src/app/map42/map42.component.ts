import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map42',
  templateUrl: './map42.component.html',
  styleUrls: ['./map42.component.css']
})
export class Map42Component {
  constructor(private globalService: GlobalService){}

  goToMap41() {
    this.globalService.player.positionX = 4;
    this.globalService.player.positionY = 1;
  }

  goToMap43() {
    this.globalService.player.positionX = 4;
    this.globalService.player.positionY = 3;
  }
}
