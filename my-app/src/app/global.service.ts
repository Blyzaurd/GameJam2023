import { Injectable } from '@angular/core';
import { Enemy, Weapon,  } from 'src/assets/model';
import { Player } from 'src/assets/model';

@Injectable({

    providedIn: 'root'
})
export class GlobalService {

    constructor() {}

    isGunPickedUp = false;
    isAxePickedUp = false;
    isCrowbarPickedUp = false;
    isLadderPickedUp = false;
    isKeyPickedUp = false;

    //Hunters
    hunter1 : Enemy = {
        id : 1,
        name : 'Jambon',
        currentHealth : 200,
        maxHealth : 200,
        damage : 10,
        combatImageUrl : '/assets/Chasseurcombat.png',
        dialogImageUrl : '/assets/Chasseurportrait.png'
    }

    hunter2 : Enemy = {
        id : 2,
        name : 'Jambon',
        currentHealth : 100,
        maxHealth : 100,
        damage : 10,
        combatImageUrl : '/assets/Chaseressecombat.png',
        dialogImageUrl : '/assets/Chasseresseportrait.png'
    }

    //Player
    player : Player = {
        currentHealth : 100,
        maxHealth : 100,
        damage : 10,
        positionX : 300,
        positionY : 300,
        mort : false
    }

    //Weapons
    axe : Weapon = {
        damage : 20
    }

    gun : Weapon = {
        damage : 50
    }

    // Great Beast
    greatBeast : Enemy = {
        id : 3,
        name : 'Jambon',
        currentHealth : 100,
        maxHealth : 100,
        damage : 100,
        combatImageUrl : '',
        dialogImageUrl : ''
    }

    isInDialog : boolean = false;

    /// Battle
    currentEnemy : Enemy = this.hunter1;
    selectedWeapon : Weapon = this.axe;
    isInCombat: boolean = false;
    isPlayerTurn: boolean = true;
    isPlayerDefending: boolean = false;

    superAttack: boolean = false;
    deathTraitor: boolean = true;
    deathFriendly: boolean = false;


    //Dialog
    isWantedPageRead : boolean = false;
    isSisterPageRead : boolean = false;
    isTraitorHelping : boolean = false;
    isFriendlyHelping : boolean = false;
}
