import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map40',
  templateUrl: './map40.component.html',
  styleUrls: ['./map40.component.css']
})
export class Map40Component {
  constructor(private globalService: GlobalService){}

  goToMap41() {
    this.globalService.player.positionX = 4;
    this.globalService.player.positionY = 1;
  }

  
}
