const phrases = ["Engineering Student ⚙️", "Tinkerer 🤖", "Programmer 💻", "Space Nerd 🚀", "Biker 🚴"];

let delay = 100; //in MS

function printDelay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeOut(currPhrase, delay) {
    for (let i = 0; i < currPhrase.length; i++) {
        await printDelay(delay);
        window.document.getElementById("typing-effect").append(currPhrase[i]);
    }
    return;
}

async function deletePhrase(delay) {
    let currPhrase = window.document.getElementById("typing-effect").innerHTML;
    let currPhraseLen = currPhrase.length;
    for (let i = 0; i < currPhraseLen; i++) {
        await printDelay(delay);
        currPhrase = currPhrase.slice(0,currPhrase.length-1);
        window.document.getElementById("typing-effect").innerHTML = currPhrase;
    }
}

async function rotation(phrases) {
    let i = 0;
    while(true){
        await typeOut(phrases[i], delay);
        await printDelay(1500);
        await deletePhrase(delay);
        await printDelay(400);
        i++;
        if (i >= phrases.length) {
            i = 0;
        }
    }
}

$(document).ready(async function() {
    rotation(phrases);
});
    
