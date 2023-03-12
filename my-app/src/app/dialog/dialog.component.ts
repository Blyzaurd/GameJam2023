import { Component, OnInit } from '@angular/core';
import { Enemy } from 'src/assets/model';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  currentDialog : string = ''
  currentEnemy : Enemy = this._globalService.currentEnemy;

  constructor(public _globalService : GlobalService) {}

  ngOnInit(): void {
    if(this.currentEnemy.id == 1) {
      this.currentDialog = "Tu ne sera pas un obstacle a mon enrichissement, gamin...";
    }
    if(this.currentEnemy.id == 2) {
      this.currentDialog = "Mon carreau saura trouver sa cible.";
    }
  }

  teamUp() {
    if(this.currentEnemy.id == 1) {
      if(this._globalService.isFriendlyHelping) {
        this.currentDialog = "Séparé la prime en trois part ? Quelle idiotie gamin!"
      } else {
        this.currentDialog = "Astucieux gamin... Je suis d'accord.  On divise la prime à part égal.  On se rejoint sur le champ de bataille."
      }
    }
    if(this.currentEnemy.id == 2) {
      if(this._globalService.isTraitorHelping) {
        this.currentDialog = "Faire équipe avec un assassin comme lui ? JAMAIS !"
      } else {
        this.currentDialog = "Faire équipe ? Tout pour sortir de cet enfer et venger ma soeur."
      }
    }
  }

  engage() {

  }
}