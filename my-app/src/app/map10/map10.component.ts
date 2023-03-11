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
    this.globalService.myX = 0;
    this.globalService.myY = 0;
  }

  goToMap20() {
    this.globalService.myX = 2;
    this.globalService.myY = 0;
  }

  goToMap11() {
    this.globalService.myX = 1;
    this.globalService.myY = 1;
  }

}
