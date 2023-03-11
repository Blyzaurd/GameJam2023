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
    this.globalService.myX = 0;
    this.globalService.myY = 1;
  }

  goToMap21() {
    this.globalService.myX = 2;
    this.globalService.myY = 1;
  }

}
