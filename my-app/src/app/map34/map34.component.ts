import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map34',
  templateUrl: './map34.component.html',
  styleUrls: ['./map34.component.css']
})
export class Map34Component implements OnInit {
  constructor(private globalService: GlobalService){}

  audio34 = new Audio();

  ngOnInit(): void {
    this.audio34.src = "../assets/Music-Exploration2.wav";
    this.audio34.load();
    this.audio34.play();
  }

  goToMap33() {
    this.globalService.player.positionX = 3;
    this.globalService.player.positionY = 3;
    this.audio34.pause();
  }

  goToMap44() {
    this.globalService.player.positionX = 4;
    this.globalService.player.positionY = 4;
    this.audio34.pause();
  }
}
