import { Component } from '@angular/core';
import { Enemy, Player, Weapon } from 'src/assets/model';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.css']
})
export class CombatComponent {

  constructor(private _globalService : GlobalService) {}

  attackEnemy(player : Player, enemy : Enemy) {

    enemy.currentHealth -= player.damage;

    if(enemy.currentHealth <= 0) {
      this._globalService.isInCombat = false;
      if(enemy.id == 1) {
        this._globalService.isAxePickedUp = true;
      }
      if(enemy.id == 2) {
        this._globalService.isSpearPickedUp = true;
      }
      if(enemy.id == 3) {
        this._globalService.isGunPickedUp = true;
      }
    }

    this._globalService.isPlayerTurn = false;
  }

  enemyAttack(player : Player, enemy : Enemy) {
    if(this._globalService.isPlayerDefending == true) {
      player.currentHealth -= (enemy.damage / 2)
    } else {
      player.currentHealth -= enemy.damage
    }

    this._globalService.isPlayerTurn = true;
  }

  defense() {
    this._globalService.isPlayerDefending = true;

    this._globalService.isPlayerTurn = false;
  }

  switchWeapon(player : Player, weapon : Weapon) {
    player.damage = weapon.damage
  }

  leaveCombat() {
    this._globalService.isInCombat = false;
  }
}
