import {getDiceHtml} from "./utils.js"
export default class Character {
    constructor(data) {
        Object.assign(this, data);
        
        this.renderCharachterHtml = function () {
            let dicehtml = getDiceHtml(this.diceCount);
            return (`
            <div class="character-card">
            <h4 class="name"> ${this.name} </h4>
            <img class="avatar" src="${this.avatar}"/>
            <p class="health">health: <b> ${this.health} </b></p>
            <div class="dice-container">
            ${dicehtml}
            </div>        
            </div>
            `);
        }
    }
}