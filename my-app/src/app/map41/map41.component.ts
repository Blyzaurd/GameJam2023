import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map41',
  templateUrl: './map41.component.html',
  styleUrls: ['./map41.component.css']
})
export class Map41Component implements OnInit {
  constructor(private globalService: GlobalService){}

  audio41 = new Audio();

  ngOnInit(): void {
    this.audio41.src = "../assets/Music-Exploration1.wav";
    this.audio41.load();
    this.audio41.play();
  }

  goToMap42() {
    this.globalService.player.positionX = 4;
    this.globalService.player.positionY = 2;
    this.audio41.pause();
  }

  goToMap40() {
    this.globalService.player.positionX = 4;
    this.globalService.player.positionY = 0;
    this.audio41.pause();
  }


}
