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
        id : 1,
        name : 'Jambon',
        currentHealth : 100,
        maxHealth : 100,
        damage : 10
    }

    hunter2 : Enemy = {
        id : 2,
        name : 'Jambon',
        currentHealth : 100,
        maxHealth : 100,
        damage : 10
    }

    hunter3 : Enemy = {
        id : 3,
        name : 'Jambon',
        currentHealth : 100,
        maxHealth : 100,
        damage : 10
    }

    hunter4 : Enemy = {
        id : 4,
        name : 'Jambon',
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
        id : 5,
        name : 'Jambon',
        currentHealth : 100,
        maxHealth : 100,
        damage : 100
    }

    /// Battle
    isInCombat: boolean = false;
    isPlayerTurn: boolean = true;
    isPlayerDefending: boolean = false;
}
