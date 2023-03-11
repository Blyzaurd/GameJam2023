import { Injectable } from '@angular/core';

@Injectable({
    
    providedIn: 'root'
})
export class GlobalService {

    constructor() {}

    //My Character
    myX = 0;
    myY = 0;

    myCurrentHealth = 100;
    myMaxHealth = 100;

    enemyCurrentHealth = 100;
    enemyMAxHealth = 100;

    myDamage = 50;

    isGunPickedUp = false;
    isTorchPickedUp = false;
    isAxePickedUp = false;
    isSpearPickedUp = false;


    //Hunter

    hunter1CurrentHealth = 100;
    hunter1MaxHealth = 100;
    hunter1Damage = 50;

    hunter2CurrentHealth = 100;
    hunter2MaxHealth = 100;
    hunter2Damage = 50;

    hunter3CurrentHealth = 100;
    hunter3MaxHealth = 100;
    hunter3Damage = 50;

    hunter4CurrentHealth = 100;
    hunter4MaxHealth = 100;
    hunter4Damage = 50;



    // Great Beast

    greatBeastCurrentHealth = 100;
    greatBeastMaxtHealth = 100;
    greatBeastDamage = 100;


}