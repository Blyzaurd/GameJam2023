import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map01',
  templateUrl: './map01.component.html',
  styleUrls: ['./map01.component.css']
})
export class Map01Component {

  constructor(private globalService: GlobalService){}

  goToMap11() {
    this.globalService.myX = 1;
    this.globalService.myY = 1;
  }
  goToMap00() {
    this.globalService.myX = 0;
    this.globalService.myY = 0;
  }
}
