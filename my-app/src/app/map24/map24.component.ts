import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map24',
  templateUrl: './map24.component.html',
  styleUrls: ['./map24.component.css']
})
export class Map24Component implements OnInit {
  constructor(private globalService: GlobalService){}

  audio24 = new Audio();

  ngOnInit(): void {
    this.audio24.src = "../assets/Music-Exploration2.wav";
    this.audio24.load();
    this.audio24.play();
  }

  goToMap14() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 4;
    this.audio24.pause();
  }

  goToMap23() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 3;
    this.audio24.pause();
  }
}
