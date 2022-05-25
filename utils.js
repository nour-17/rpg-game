const getDiceRoll = diceCount => new Array(diceCount).fill(0).map(() => Math.floor(Math.random() * 6) + 1);
const getDiceHtml = diceCount => getDiceRoll(diceCount).map(num => `<div class="dice">${num}</div>`).join("");
const getPlaceholderHtml = diceCount => new Array(diceCount).fill(0).map(()=> `<div class="placeholder-dice"></div>`)
export {getDiceRoll, getDiceHtml, getPlaceholderHtml}