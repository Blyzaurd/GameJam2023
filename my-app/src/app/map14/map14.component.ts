import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map14',
  templateUrl: './map14.component.html',
  styleUrls: ['./map14.component.css']
})
export class Map14Component implements OnInit {
  constructor(private globalService: GlobalService){}

  audio14 = new Audio();

  ngOnInit(): void {
    this.audio14.src = "../assets/Music-Exploration1.wav";
    this.audio14.load();
    this.audio14.play();
  }

  goToMap24() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 4;
    this.audio14.pause();
  }

  goToMap04() {
    this.globalService.player.positionX = 0;
    this.globalService.player.positionY = 4;
    this.audio14.pause();
  }
  
}
