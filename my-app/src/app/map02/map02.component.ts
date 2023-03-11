import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map02',
  templateUrl: './map02.component.html',
  styleUrls: ['./map02.component.css']
})
export class Map02Component {

  constructor(private globalService: GlobalService){}

  goToMap01() {
    this.globalService.player.positionX = 0;
    this.globalService.player.positionY = 1;
  }
  goToMap03() {
    this.globalService.player.positionX = 0;
    this.globalService.player.positionY = 3;
  }
  goToMap12() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 2;
  }
}
