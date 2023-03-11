import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map30',
  templateUrl: './map30.component.html',
  styleUrls: ['./map30.component.css']
})
export class Map30Component implements OnInit {
  constructor(private globalService: GlobalService){}

  audio30 = new Audio();

  ngOnInit(): void {
    this.audio30.src = "../assets/Music-Exploration1.wav";
    this.audio30.load();
    this.audio30.play();
  }

  goToMap20() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 0;
    this.audio30.pause();
  }

  goToMap31() {
    this.globalService.player.positionX = 3;
    this.globalService.player.positionY = 1;
    this.audio30.pause();
  }
}
