import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map21',
  templateUrl: './map21.component.html',
  styleUrls: ['./map21.component.css']
})
export class Map21Component {

  constructor(private globalService: GlobalService){}

  goToMap11() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 1;
  }

  goToMap20() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 0;
  }

}
