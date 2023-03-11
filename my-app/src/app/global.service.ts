import { Injectable } from '@angular/core';
import { Enemy, Weapon } from 'src/assets/model';
import { Player } from 'src/assets/model';

@Injectable({

    providedIn: 'root'
})
export class GlobalService {

    constructor() {}

    isGunPickedUp = false;
    isTorchPckedUp = false;
    isAxePickedUp = false;
    isSpearPickedUp = false;

    //Hunters

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

    //Player
    player : Player = {
        currentHealth : 100,
        maxHealth : 100,
        damage : 10,
        positionX : 200,
        positionY : 200
    }

    //Weapons
    axe : Weapon = {
        damage : 10
    }

    spear : Weapon = {
        damage : 20
    }

    gun : Weapon = {
        damage : 30
    }

    // Great Beast
    greatBeast : Enemy = {
        currentHealth : 100,
        maxHealth : 100,
        damage : 100
    }

    /// Battle
    isInCombat: boolean = false;
    isPlayerTurn: boolean = true;
}
