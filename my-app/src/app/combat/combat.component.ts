import { Component} from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.css']
})
export class CombatComponent {

  constructor(public _globalService : GlobalService) {}

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
