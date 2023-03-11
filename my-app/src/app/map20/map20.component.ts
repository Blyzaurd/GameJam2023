import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map20',
  templateUrl: './map20.component.html',
  styleUrls: ['./map20.component.css']
})
export class Map20Component implements OnInit {

  constructor(private globalService: GlobalService){}

  ngOnInit(): void {
    let audioIntro = new Audio();
    audioIntro.src = "../assets/Ouverture-Intro_90bpm_4-4_L25m_P0b.wav";
    audioIntro.load();
    audioIntro.play();
  }

  goToMap10() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 0;
  }

  goToMap21() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 1;
  }

}
