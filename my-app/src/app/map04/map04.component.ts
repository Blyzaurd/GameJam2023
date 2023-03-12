import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map04',
  templateUrl: './map04.component.html',
  styleUrls: ['./map04.component.css']
})
export class Map04Component implements OnInit {
  constructor(private globalService: GlobalService){}

  audio04 = new Audio();

  ngOnInit(): void {
    this.audio04.src = "../assets/Music-Exploration1.wav";
    this.audio04.load();
    this.audio04.play();
  }

  goToMap14() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 4;
    this.audio04.pause();
  }

  goToMap03() {
    this.globalService.player.positionX = 0;
    this.globalService.player.positionY = 3;
    this.audio04.pause();
  }
}
