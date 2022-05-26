const getDiceRoll = diceCount => new Array(diceCount).fill(0).map(() => Math.floor(Math.random() * 6) + 1);
const getPlaceholderHtml = diceCount => new Array(diceCount).fill(0).map(()=> `<div class="placeholder-dice"></div>`).join("")
const getPercentage = (health, maxHealth) => (100 * health) / maxHealth
export {getDiceRoll, getPlaceholderHtml, getPercentage}    
