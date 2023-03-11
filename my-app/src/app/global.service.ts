import { Injectable } from '@angular/core';
import { Enemy } from 'src/assets/model';
import { Player } from 'src/assets/model';

@Injectable({

    providedIn: 'root'
})
export class GlobalService {

    constructor() {}

    //My Character

    isGunPickedUp = false;
    isTorchPckedUp = false;
    isAxePickedUp = false;
    isSpearPickedUp = false;


    //Hunter

    hunter1 : Enemy = {
        currentHealth : 100,
        maxHealth : 100,
        damage : 10
    }

    hunter2 : Enemy = {
        currentHealth : 100,
        maxHealth : 100,
        damage : 10
    }

    hunter3 : Enemy = {
        currentHealth : 100,
        maxHealth : 100,
        damage : 10
    }

    hunter4 : Enemy = {
        currentHealth : 100,
        maxHealth : 100,
        damage : 10
    }

    player : Player = {
        currentHealth : 100,
        maxHealth : 100,
        damage : 10,
        positionX : 100,
        positionY : 100
    }
    // Great Beast
    
    greatBeast : Enemy = {
        currentHealth : 100,
        maxHealth : 100,
        damage : 100
    }

    greatBeastCurrentHealth = 100;
    greatBeastMaxtHealth = 100;
    greatBeastDamage = 100;


    /// Battle
    isInCombat: boolean = false;
    isPlayerTurn: boolean = true;

    // startBattle(player. enemy) {

    // }
}
