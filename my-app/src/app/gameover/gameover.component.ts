import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-gameover',
  templateUrl: './gameover.component.html',
  styleUrls: ['./gameover.component.css']
})
export class GameoverComponent {

  constructor(private globalService: GlobalService){}

  goToMenu(){
    this.globalService.player.positionX = 200;
    this.globalService.player.positionY = 200;
  }
}
