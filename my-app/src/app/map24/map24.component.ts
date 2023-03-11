import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map24',
  templateUrl: './map24.component.html',
  styleUrls: ['./map24.component.css']
})
export class Map24Component {
  constructor(private globalService: GlobalService){}

  goToMap14() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 4;
  }

  goToMap23() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 3;
  }
}
