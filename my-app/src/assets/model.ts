export interface Enemy {
    id : number
    name : string
    currentHealth : number
    maxHealth : number
    damage : number
    imageUrl: string
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