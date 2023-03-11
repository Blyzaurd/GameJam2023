import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private globalService: GlobalService){}

  audioIntro = new Audio();
  audioIntroLoop = new Audio();

  ngOnInit(): void {
    this.audioIntro.src = "../assets/Ouverture-Intro_90bpm_4-4_L25m_P0b.wav";
    this.audioIntroLoop.src = "../assets  Ouverture-Loop_90bpm_4-4_L25m_P0b.wav";
    this.audioIntroLoop.load();
    this.audioIntro.load();
    this.audioIntro.play();

    if(this.audioIntro.ended){
      this.audioIntroLoop.play();
    }
  }

  goToMap20() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 0;

    this.audioIntro.pause();
    this.audioIntroLoop.pause();
  }

}
