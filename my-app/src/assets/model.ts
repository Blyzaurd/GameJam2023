export interface Enemy {
    id : number
    name : string
    currentHealth : number
    maxHealth : number
    damage : number
    combatImageUrl : string
    dialogImageUrl : string
}

export interface Player {
    currentHealth : number
    maxHealth : number
    damage : number
    positionX : number
    positionY : number
}

export interface Weapon {
    damage : number
}

