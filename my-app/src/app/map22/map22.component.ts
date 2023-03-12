import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map22',
  templateUrl: './map22.component.html',
  styleUrls: ['./map22.component.css']
})
export class Map22Component implements OnInit {
  constructor(private globalService: GlobalService){}

  audio22 = new Audio();

  ngOnInit(): void {
    this.audio22.src = "../assets/Music-Exploration2.wav";
    this.audio22.load();
    this.audio22.play();
  }

  goToMap21() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 1;
    this.audio22.pause();
  }

  goToMap23() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 3;
    this.audio22.pause();
  }

  goToMap32() {
    this.globalService.player.positionX = 3;
    this.globalService.player.positionY = 2;
    this.audio22.pause();
  }

  goToMap12() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 2;
    this.audio22.pause();
  }
}
