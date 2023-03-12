import { Injectable } from '@angular/core';
import { Enemy, Weapon,  } from 'src/assets/model';
import { Player } from 'src/assets/model';

@Injectable({

    providedIn: 'root'
})
export class GlobalService {

    constructor() {}

    //audioExploration = new Audio();

    isCombatBeast = true;
    isCombatFriendly = true;
    isCombatTraitor = true;
    isCombatMinion21 = true;
    isCombatMinion34 = true;


    isGunPickedUp = false;
    isAxePickedUp = false;
    isCrowbarPickedUp = false;
    isLadderPickedUp = false;
    isKeyPickedUp = false;

    //Hunters
    hunter1 : Enemy = {
        id : 1,
        name : 'Traitor',
        currentHealth : 200,
        maxHealth : 200,
        damage : 10,
        combatImageUrl : '/assets/Chasseurcombat.png',
        dialogImageUrl : '/assets/Chasseurguillaume2.png',
        combatImageSangUrl : '/assets/ChasseurcombatSANGOVERFIXXXXX.png'
    }

    hunter2 : Enemy = {
        id : 2,
        name : 'Friendly',
        currentHealth : 100,
        maxHealth : 100,
        damage : 10,
        combatImageUrl : '/assets/Chaseressecombat.png',
        dialogImageUrl : '/assets/Chasseresseguillaume2.png',
        combatImageSangUrl : '/assets/ChaseressecombatSANGOVER.png'
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
        name : 'Great Beast of HamShire',
        currentHealth : 100,
        maxHealth : 100,
        damage : 100,
        combatImageUrl : '/assets/Monstre.png',
        dialogImageUrl : '',
        combatImageSangUrl : '/assets/MonstreSANGOVER.png'
    }


    // Minion21
    minion21 : Enemy = {
        id : 4,
        name : 'Minion21',
        currentHealth : 50,
        maxHealth : 50,
        damage : 10,
        combatImageUrl : '/assets/Chien.png',
        dialogImageUrl : '',
        combatImageSangUrl : '/assets/MonstreSANGOVER.png'
    }


    // Minion34
    minion34 : Enemy = {
        id : 5,
        name : 'Minion32',
        currentHealth : 50,
        maxHealth : 50,
        damage : 10,
        combatImageUrl : '/assets/Chien.png',
        dialogImageUrl : '',
        combatImageSangUrl : '/assets/MonstreSANGOVER.png'
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
    isReadingWanted : boolean = false;
    isReadingSister : boolean = false;
    isWantedPageRead : boolean = false;
    isSisterPageRead : boolean = false;
    isTraitorHelping : boolean = false;
    isFriendlyHelping : boolean = false;






    // Death final quote

    finalQuote = "";
}
