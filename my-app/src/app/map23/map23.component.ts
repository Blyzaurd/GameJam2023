import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map23',
  templateUrl: './map23.component.html',
  styleUrls: ['./map23.component.css']
})
export class Map23Component {
  constructor(private globalService: GlobalService){}

  goToMap13() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 3;
  }

  goToMap22() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 2;
  }

  goToMap24() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 4;
  }

  
}
