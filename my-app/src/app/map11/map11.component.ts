import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map11',
  templateUrl: './map11.component.html',
  styleUrls: ['./map11.component.css']
})
export class Map11Component {

  constructor(private globalService: GlobalService){}

  goToMap01() {
    this.globalService.myX = 0;
    this.globalService.myY = 1;
  }

  goToMap21() {
    this.globalService.myX = 2;
    this.globalService.myY = 1;
  }

  goToMap10() {
    this.globalService.myX = 1;
    this.globalService.myY = 0;
  }

}
