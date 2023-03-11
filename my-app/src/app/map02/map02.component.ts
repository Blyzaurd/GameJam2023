import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map02',
  templateUrl: './map02.component.html',
  styleUrls: ['./map02.component.css']
})
export class Map02Component implements OnInit {

  constructor(private globalService: GlobalService){}

  audio02 = new Audio();

  ngOnInit(): void {
    this.audio02.src = "../assets/Music-Exploration1.wav";
    this.audio02.load();
    this.audio02.play();
  }

  goToMap01() {
    this.globalService.player.positionX = 0;
    this.globalService.player.positionY = 1;
    this.audio02.pause();
  }
  goToMap03() {
    this.globalService.player.positionX = 0;
    this.globalService.player.positionY = 3;
    this.audio02.pause();
  }
  goToMap12() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 2;
    this.audio02.pause();
  }
}
