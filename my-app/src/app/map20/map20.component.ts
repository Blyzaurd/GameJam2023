import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map20',
  templateUrl: './map20.component.html',
  styleUrls: ['./map20.component.css']
})
export class Map20Component {

  constructor(private globalService: GlobalService){}

  goToMap10() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 0;
  }

  goToMap21() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 1;
  }

}
