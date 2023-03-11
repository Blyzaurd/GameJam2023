import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map30',
  templateUrl: './map30.component.html',
  styleUrls: ['./map30.component.css']
})
export class Map30Component {
  constructor(private globalService: GlobalService){}

  goToMap20() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 0;
  }

  goToMap31() {
    this.globalService.player.positionX = 3;
    this.globalService.player.positionY = 1;
  }
}
