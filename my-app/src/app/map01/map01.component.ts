import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map01',
  templateUrl: './map01.component.html',
  styleUrls: ['./map01.component.css']
})
export class Map01Component implements OnInit {

  constructor(private globalService: GlobalService){}

  audio01 = new Audio();

  ngOnInit(): void {
    this.audio01.src = "../assets/Music-Exploration2.wav";
    this.audio01.load();
    this.audio01.play();
  }

  goToMap00() {
    this.globalService.player.positionX = 0;
    this.globalService.player.positionY = 0;
    this.audio01.pause();
  }
  goToMap11() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 1;
    this.audio01.pause();
  }
  goToMap02() {
    this.globalService.player.positionX = 0;
    this.globalService.player.positionY = 2;
    this.audio01.pause();
  }
}
