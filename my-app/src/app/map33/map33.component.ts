import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map33',
  templateUrl: './map33.component.html',
  styleUrls: ['./map33.component.css']
})
export class Map33Component implements OnInit {
  constructor(private globalService: GlobalService){}

  audio33 = new Audio();

  ngOnInit(): void {
    this.audio33.src = "../assets/Music-Exploration1.wav";
    this.audio33.load();
    this.audio33.play();
  }

  goToMap32() {
    this.globalService.player.positionX = 3;
    this.globalService.player.positionY = 2;
    this.audio33.pause();
  }

  goToMap34() {
    this.globalService.player.positionX = 3;
    this.globalService.player.positionY = 4;
    this.audio33.pause();
  }
  goToMap43() {
    this.globalService.player.positionX = 4;
    this.globalService.player.positionY = 3;
    this.audio33.pause();
  }
}
