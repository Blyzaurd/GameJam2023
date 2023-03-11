import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {

  constructor(private globalService: GlobalService){}

  goToMenu(){
    this.globalService.player.positionX = 100;
    this.globalService.player.positionY = 100;
  }

}
