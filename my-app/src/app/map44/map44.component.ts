import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map44',
  templateUrl: './map44.component.html',
  styleUrls: ['./map44.component.css']
})
export class Map44Component implements OnInit {
  constructor(private globalService: GlobalService){}

  audio44 = new Audio();

  ngOnInit(): void {
    this.audio44.src = "../assets/Music-Exploration2.wav";
    this.audio44.load();
    this.audio44.play();
  }

  goToMap43() {
    this.globalService.player.positionX = 4;
    this.globalService.player.positionY = 3;
    this.audio44.pause();
  }

  goToMap34() {
    this.globalService.player.positionX = 3;
    this.globalService.player.positionY = 4;
    this.audio44.pause();
  }
}
