import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map41',
  templateUrl: './map41.component.html',
  styleUrls: ['./map41.component.css']
})
export class Map41Component {
  constructor(private globalService: GlobalService){}

  goToMap42() {
    this.globalService.player.positionX = 4;
    this.globalService.player.positionY = 2;
  }

  goToMap40() {
    this.globalService.player.positionX = 4;
    this.globalService.player.positionY = 0;
  }

 
}
