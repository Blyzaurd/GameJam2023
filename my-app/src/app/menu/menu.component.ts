import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private globalService: GlobalService){}

  goToMap00() {
    this.globalService.myX = 0;
    this.globalService.myY = 0;
  }

}
