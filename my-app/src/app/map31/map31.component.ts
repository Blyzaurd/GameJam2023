import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map31',
  templateUrl: './map31.component.html',
  styleUrls: ['./map31.component.css']
})
export class Map31Component implements OnInit {
  constructor(private globalService: GlobalService){}

  audio31 = new Audio();

  ngOnInit(): void {
    this.audio31.src = "../assets/Music-Exploration1.wav";
    this.audio31.load();
    this.audio31.play();
  }

  goToMap21() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 1;
    this.audio31.pause();
  }

  goToMap30() {
    this.globalService.player.positionX = 3;
    this.globalService.player.positionY = 0;
    this.audio31.pause();
  }
  goToMap32() {
    this.globalService.player.positionX = 3;
    this.globalService.player.positionY = 2;
    this.audio31.pause();
  }
}
