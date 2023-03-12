import { Component, OnInit} from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.css']
})
export class CombatComponent implements OnInit {

  constructor(public _globalService : GlobalService) {}

  audioCombatChasseur = new Audio();
  audioCombatChasseresse = new Audio();

  ngOnInit(): void {
    this.audioCombatChasseur.src = "../assets/Music_CombatChasseur.wav";
    this.audioCombatChasseresse.src = "../assets/Music_CombatChasseurFéminin.wav";
    this.audioCombatChasseur.load();
    this.audioCombatChasseresse.load();

    if(this.currentEnemy.id === 1){
      this.audioCombatChasseur.play();
    }
    if(this.currentEnemy.id === 2){
      this.audioCombatChasseresse.play();
    }
  }

  currentEnemy = this._globalService.currentEnemy;
  player = this._globalService.player;
  selectedWeapon = this._globalService.selectedWeapon;
  playerTurn = this._globalService.isPlayerTurn;
  playerAttacking: boolean = false;
  enemyAttacking: boolean = false;

  playerTurnCheck() {
    if(this.playerTurn == true) {
      return false
    } else {
      return true
    }
  }

  attackEnemy() {
    if(this.playerTurn == true) {
      this.currentEnemy.currentHealth -= this.player.damage;
    }

    if(this.currentEnemy.currentHealth <= 0) {
      this._globalService.isInCombat = false;
      this.audioCombatChasseur.pause();
      this.audioCombatChasseresse.pause();
      if(this.currentEnemy.id == 2) {
        this._globalService.isGunPickedUp = true;
      }
    }

    this.playerTurn = false;
    this.timeOutCombat();
  }

  timeOutCombat() {
    if(this.playerTurn == false) {
      setTimeout(() => {
        this.enemyAttack();
      }, 1500);
    }
  }

  enemyAttack() {
    if(this.playerTurn == false) {
      if(this._globalService.isPlayerDefending == true) {
        this.player.currentHealth -= (this.currentEnemy.damage / 2)
        this._globalService.isPlayerDefending = false;
      } else {
        this.player.currentHealth -= this.currentEnemy.damage
      }
    }

    if(this.player.currentHealth <= 0) {
      this.player.mort = true;
      this._globalService.isInCombat = false;
      this.audioCombatChasseur.pause();
      this.audioCombatChasseresse.pause();
    }
    if(this.player.mort === true) {
      this.player.positionX = 500;
      this.player.positionY = 500;
    }

    this.playerTurn = true;
  }

  defense() {
    this._globalService.isPlayerDefending = true;

    this.playerTurn = false;
    if(this.playerTurn == false) {
      this.timeOutCombat();
    }
  }

  switchWeapon() {
    this.player.damage = this.selectedWeapon.damage
  }

  leaveCombat() {
    this._globalService.isInCombat = false;
  }
}
