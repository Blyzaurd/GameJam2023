import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map21',
  templateUrl: './map21.component.html',
  styleUrls: ['./map21.component.css']
})
export class Map21Component implements OnInit {

  constructor(private globalService: GlobalService){}

  audio21 = new Audio();
  audioThunder = new Audio();
  audioPas1 = new Audio();
  audioPas2 = new Audio();

  ngOnInit(): void {
    this.audio21.src = "../assets/Music-Exploration2.wav";
    this.audioThunder.src = "../assets/SFX_Thunder2.wav";
    this.audioPas1.src = "../assets/SFX_FootstepsDirt1.wav";
    this.audioPas2.src = "../assets/SFX_FootstepsLeaves2.wav";
    this.audioPas1.load();
    this.audioPas2.load();
    this.audioThunder.load();
    this.audioThunder.play();
    this.audio21.load();
    this.audio21.play();
  }

  goToMap13() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 3;
    this.audio21.pause();
    this.audioPas1.play();
  }

  goToMap11() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 1;
    this.audio21.pause();
    this.audioPas1.play();
  }

  goToMap22() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 2;
    this.audio21.pause();
    this.audioPas2.play();
  }

  goToMap20() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 0;
    this.audio21.pause();
    this.audioPas2.play();
  }

}
