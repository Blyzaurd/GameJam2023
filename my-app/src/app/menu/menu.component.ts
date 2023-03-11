import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private globalService: GlobalService){}

  ngOnInit(): void {
    let audioIntro = new Audio();
    audioIntro.src = "../assets/Ouverture-Intro_90bpm_4-4_L25m_P0b.wav";
    audioIntro.load();
    audioIntro.play();
  }

  goToMap20() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 0;
  }

  sound() {
    let audioIntro = new Audio();
    audioIntro.src = "../assets/Ouverture-Intro_90bpm_4-4_L25m_P0b.wav";
    audioIntro.load();
    audioIntro.play();
  }

}
