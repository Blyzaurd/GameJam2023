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
      //endbattle
    }
  }

  enemyAttack(player : Player, enemy : Enemy) {

  }

  defense() {

  }

  switchWeapon(player : Player, weapon : Weapon) {
  }

}
