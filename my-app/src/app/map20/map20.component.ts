import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map20',
  templateUrl: './map20.component.html',
  styleUrls: ['./map20.component.css']
})
export class Map20Component implements OnInit {

  constructor(private globalService: GlobalService){}

  audio20 = new Audio();

  ngOnInit(): void {
    this.audio20.src = "../assets/Music-Exploration1.wav";
    this.audio20.load();
    this.audio20.play();
  }

  goToMap10() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 0;
    this.audio20.pause();
  }

  goToMap30() {
    this.globalService.player.positionX = 3;
    this.globalService.player.positionY = 0;
    this.audio20.pause();
  }

  goToMap21() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 1;
    this.audio20.pause();
  }

  goToFight() {
    this.globalService.isInCombat = true;
    this.audio20.pause();
  }

  goToDialog() {
    this.globalService.isInDialog = true;
  }
}
