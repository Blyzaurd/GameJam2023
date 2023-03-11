import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private globalService: GlobalService){}

  goToMap20() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 0;
  }

}
