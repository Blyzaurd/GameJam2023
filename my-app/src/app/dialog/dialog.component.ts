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
  myCurrentDialog : string = '';
  isSister = this._globalService.isSisterPageRead;
  isWanted = this._globalService.isWantedPageRead;

  constructor(public _globalService : GlobalService) {}

  ngOnInit(): void {
    if(this.currentEnemy.id == 1) {
      this.currentDialog = this.currentEnemy.name + " : Tu ne sera pas un obstacle a mon enrichissement, gamin...";
    }
    if(this.currentEnemy.id == 2) {
      this.currentDialog = this.currentEnemy.name + " : Mon carreau saura trouver sa cible.";
    }
  }

  teamUp() {
    this.currentDialog = '';
    if(this.currentEnemy.id == 1) {
      this.myCurrentDialog = "Moi : J'ai vu qu'il avait une prime de 500 livres pour tuer la bete, voudriez-vous faire equipe et partager la prime?"
      setTimeout(() => {
        if(this._globalService.isFriendlyHelping) {
          this.currentDialog = this.currentEnemy.name + " : Séparé la prime en trois part ? Quelle idiotie gamin!"
        } else {
          this.currentDialog = this.currentEnemy.name + " : Astucieux gamin... Je suis d'accord.  On divise la prime à part égal.  On se rejoint sur le champ de bataille."
        }
      }, 750)
    }
    if(this.currentEnemy.id == 2) {
      this.myCurrentDialog = "Moi : Etes-vous la chasseuse qui s'est fait enlever sa soeur par la bete? Voudriez-vous faire equipe?"
      setTimeout(() => {
        if(this._globalService.isTraitorHelping) {
          this.currentDialog = this.currentEnemy.name + " : Faire équipe avec un assassin comme lui ? JAMAIS !"
        } else {
          this.currentDialog = this.currentEnemy.name + " : Faire équipe ? Tout pour sortir de cet enfer et venger ma soeur."
        }
      }, 750)
    }
  }

  quit() {
    this._globalService.isInDialog = false;
  }

  engage() {
    if(this.currentEnemy.id === 1) {
      
    }
    if(this.currentEnemy.id === 2) {
      
    }
  }
}