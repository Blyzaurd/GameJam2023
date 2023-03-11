import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map00',
  templateUrl: './map00.component.html',
  styleUrls: ['./map00.component.css']
})
export class Map00Component implements OnInit {

  constructor(private globalService: GlobalService){}

  audio00 = new Audio();

  ngOnInit(): void {
    this.audio00.src = "../assets/Music-Exploration1.wav";
    this.audio00.load();
    this.audio00.play();
  }

  goToMap01() {
    this.globalService.player.positionX = 0;
    this.globalService.player.positionY = 1;
    this.audio00.pause();
  }

  goToMap10() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 0;
    this.audio00.pause();
  }

}
