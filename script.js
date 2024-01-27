const playerR = document.getElementById('playerRock');
const playerP = document.getElementById('playerPaper');
const playerS = document.getElementById('playerScissor');
const AiR = document.getElementById('AIRock');
const AiP = document.getElementById('AIPaper');
const AiS = document.getElementById('AIScissor');
const result = document.getElementById('result');
const arr = [AiR,AiP,AiS];
function pickRock(){
    const randomElement =arr[Math.floor(Math.random() * 3)];
    if (randomElement === AiR) {
        AiR.style.background = 'yellow';
        AiP.style.background = 'red';
        AiS.style.background = 'red';
        result.textContent = 'draw';
    } else if (randomElement === AiP) {
        result.textContent = 'Lose';
        AiP.style.background = 'yellow';
        AiR.style.background = 'red';
        AiS.style.background = 'red';
    } else {
        result.textContent = 'win';
        AiS.style.background = 'yellow';
        AiR.style.background = 'red';
        AiP.style.background = 'red';
    }
}
function pickPaper(){
    const randomElement =arr[Math.floor(Math.random() * 3)];
    if (randomElement === AiR) {
        AiR.style.background = 'yellow';
        AiP.style.background = 'red';
        AiS.style.background = 'red';
        result.textContent = 'win';
    } else if (randomElement === AiP) {
        result.textContent = 'draw';
        AiP.style.background = 'yellow';
        AiR.style.background = 'red';
        AiS.style.background = 'red';
    } else {
        result.textContent = 'lose';
        AiS.style.background = 'yellow';
        AiR.style.background = 'red';
        AiP.style.background = 'red';
    }
}
function pickScissor(){
    const randomElement =arr[Math.floor(Math.random() * 3)];
    if (randomElement === AiR) {
        AiR.style.background = 'yellow';
        AiP.style.background = 'red';
        AiS.style.background = 'red';
        result.textContent = 'lose';
    } else if (randomElement === AiP) {
        result.textContent = 'win';
        AiP.style.background = 'yellow';
        AiR.style.background = 'red';
        AiS.style.background = 'red';
    } else {
        result.textContent = 'draw';
        AiS.style.background = 'yellow';
        AiR.style.background = 'red';
        AiP.style.background = 'red';
    }
}
