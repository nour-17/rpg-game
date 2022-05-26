import data from "./data.js";
import Character from "./Character.js";

let monstersArray = ["orc", "demon", "goblin"]
let isWaiting = false
function render() {
    document.getElementById('hero').innerHTML = wizard.renderCharachterHtml();
    document.getElementById('orc').innerHTML = monster.renderCharachterHtml();
}
function attack(){
   if(!isWaiting){
    wizard.getDiceHtml()
    monster.getDiceHtml()
    wizard.takeDamage(monster.currentDiceScore)
    monster.takeDamage(wizard.currentDiceScore)
    render()
    if(wizard.isDead){
        endGame()
    }else if(monster.isDead){
        isWaiting = true
        if(monstersArray.length > 0){
            setTimeout(()=>{
                monster = getMonster()
                render()
                isWaiting = false
            },500)
        }else{
            endGame()
        }
    }
   }
}
function endGame(){
    isWaiting = true
    const endMessage = wizard.health === 0 && orc.health === 0 ?
    "No victors - all creatures are dead" :
    wizard.health > 0 ? "The Wizard Wins" :
    "The monsters are Victorious"
    const endEmoji = wizard.health > 0 ? "🔮" : "☠️"
    setTimeout(()=>{
        document.body.innerHTML = `
            <div class="end-game">
                <h2>Game Over</h2> 
                <h3>${endMessage}</h3>
                <p class="end-emoji">${endEmoji}</p>
            </div>
            `
    }, 800) 
}
function getMonster(){
    return monstersArray.length ? new Character(data[monstersArray.shift()]) :{}
}
document.getElementById("attack-button").addEventListener("click",attack)
const wizard = new Character(data.hero)
let monster = getMonster()
render()