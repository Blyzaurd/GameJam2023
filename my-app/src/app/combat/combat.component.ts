import { Component, OnInit } from '@angular/core';
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
    this.enemyAttacking = false;
    if(this.playerTurn == true) {
      this.currentEnemy.currentHealth -= this.player.damage;
    }

    if(this.currentEnemy.currentHealth <= 0) {
      this._globalService.isInCombat = false;
      if(this.currentEnemy.id == 2) {
        this._globalService.isGunPickedUp = true;
      }
    }
    this.playerAttacking = true;

    this.playerTurn = false;
    this.timeoutDegat();
    this.timeOutCombat();
  }

  timeoutDegat() {
    setTimeout(() => {
      this.changeAttack();
    }, 250);
  }

  changeAttack() {
    this.playerAttacking === false;
  }

  timeOutCombat() {
    if(this.playerTurn == false) {
      setTimeout(() => {
        this.enemyAttack();
      }, 750);
    }
  }

  enemyAttack() {
    this.playerAttacking = false;
    if(this.playerTurn == false) {
      if(this._globalService.isPlayerDefending == true) {
        this.player.currentHealth -= (this.currentEnemy.damage / 2)
        this._globalService.isPlayerDefending = false;
      } else {
        this.player.currentHealth -= this.currentEnemy.damage
      }
    }
    this.enemyAttacking = true;
    this.playerTurn = true;
    setTimeout(() => {
      this.changeEnemyAttack();
    }, 500);
  }

  changeEnemyAttack() {
    this.enemyAttacking === false;
  }

  defense() {
    this.enemyAttacking = false;
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
