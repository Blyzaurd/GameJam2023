import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map11',
  templateUrl: './map11.component.html',
  styleUrls: ['./map11.component.css']
})
export class Map11Component implements OnInit {

  constructor(private globalService: GlobalService){}

  audio11 = new Audio();

  ngOnInit(): void {
    this.audio11.src = "../assets/Music-Exploration2.wav";
    this.audio11.load();
    this.audio11.play();
  }

  goToMap10() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 0;
    this.audio11.pause();
  }

  goToMap12() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 2;
    this.audio11.pause();
  }

  goToMap01() {
    this.globalService.player.positionX = 0;
    this.globalService.player.positionY = 1;
    this.audio11.pause();
  }
  goToMap21() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 1;
    this.audio11.pause();
  }

}
