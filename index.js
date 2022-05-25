import data from "./data.js";
import Character from "./Character.js";


function render() {
    document.getElementById('hero').innerHTML = wizard.renderCharachterHtml();
    document.getElementById('orc').innerHTML = orc.renderCharachterHtml();
}

const wizard = new Character(data.hero)
const orc = new Character(data.monster)
render()