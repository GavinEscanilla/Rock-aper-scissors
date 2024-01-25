const playerR = document.getElementById('playerRock');
const playerP = document.getElementById('playerPaper');
const playerS = document.getElementById('playerScissor');
const AiR = document.getElementById('AIRock');
const AiP = document.getElementById('AIPaper');
const AiS = document.getElementById('AIScissor');
const result = document.getElementById('result');
const arr = ['rock','paper','scissor'];
function pickRock(){
    const randomElement =arr[Math.floor(Math.random() * 3)];
    AiR.style.background = '';
    if (randomElement === 'rock') {
        AiR.style.background = 'yellow';
        result.textContent = 'draw';
    } else if (randomElement === 'paper') {
        result.textContent = 'Lose';
    } else {
        result.textContent = 'win';
    }
}
function test(){
    let arr = ['rock','paper','scissor'];
    let random = arr[Math.floor(Math.random() * 3)];
    if (random === 'rock') {
        console.log('draw');
    }else if (random === 'paper') {
    console.log('lose');
    } else {
        console.log('win');
    }

}

test();
