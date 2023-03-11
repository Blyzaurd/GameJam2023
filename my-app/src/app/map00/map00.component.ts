import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map00',
  templateUrl: './map00.component.html',
  styleUrls: ['./map00.component.css']
})
export class Map00Component {

  constructor(private globalService: GlobalService){}

  goToMap01() {
    this.globalService.myX = 0;
    this.globalService.myY = 1;
  }

  goToMap10() {
    this.globalService.myX = 1;
    this.globalService.myY = 0;
  }

  goToMap11() {
    this.globalService.myX = 1;
    this.globalService.myY = 1;
  }

}
