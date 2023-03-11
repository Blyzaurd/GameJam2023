export interface Enemy {
    currentHealth : number
    maxHealth : number
    damage : number
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