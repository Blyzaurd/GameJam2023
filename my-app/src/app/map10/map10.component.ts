import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map10',
  templateUrl: './map10.component.html',
  styleUrls: ['./map10.component.css']
})
export class Map10Component {

  constructor(private globalService: GlobalService){}

  goToMap00() {
    this.globalService.player.positionX = 0;
    this.globalService.player.positionY = 0;
  }

  goToMap20() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 0;
  }

  goToMap11() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 1;
  }

}
