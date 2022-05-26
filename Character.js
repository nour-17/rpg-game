import { getDiceRoll, getPlaceholderHtml, getPercentage} from "./utils.js"

export default class Character {
    constructor(data) {
        Object.assign(this, data);
        this.maxHealth = this.health
        this.dices = getPlaceholderHtml(this.diceCount)
    }
        getDiceHtml(){
            this.currentDiceScore = getDiceRoll(this.diceCount)
            this.dices = this.currentDiceScore.map(num=>`<div class="dice">${num}</div>`).join("")
        }
        takeDamage(dice){
        const total = dice.reduce((num,total)=> num + total)
        this.health -= total
        if(this.health <= 0){
            this.health = 0;
            this.isDead = true;
        }
        }
        getHealthHtml(){
            const percentage = getPercentage(this.health, this.maxHealth)
            return(
                ` <div class="health-bar-outer">
                <div class="health-bar-inner ${percentage < 26 ? "danger" : ""} " 
                style="width: ${percentage}%;">
                </div>
            </div>`
            )
        }
        renderCharachterHtml() {
            const healthBar = this.getHealthHtml()
            return (`
            <div class="character-card">
            <h4 class="name"> ${this.name} </h4>
            <img class="avatar" src="${this.avatar}"/>
            <div class="health">health: <b> ${this.health} </b></div>
            ${healthBar}
            <div class="dice-container">
            ${this.dices}
            </div>        
            </div>
            `);
        }
}