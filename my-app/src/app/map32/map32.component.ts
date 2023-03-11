import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map32',
  templateUrl: './map32.component.html',
  styleUrls: ['./map32.component.css']
})
export class Map32Component implements OnInit {
  constructor(private globalService: GlobalService){}

  audio32 = new Audio();

  ngOnInit(): void {
    this.audio32.src = "../assets/Music-Exploration2.wav";
    this.audio32.load();
    this.audio32.play();
  }

  goToMap22() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 2;
    this.audio32.pause();
  }

  goToMap33() {
    this.globalService.player.positionX = 3;
    this.globalService.player.positionY = 3;
    this.audio32.pause();
  }
  goToMap31() {
    this.globalService.player.positionX = 3;
    this.globalService.player.positionY = 1;
    this.audio32.pause();
  }
}
