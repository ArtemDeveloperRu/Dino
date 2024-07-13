const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const score = document.getElementById('score');

let scoreV = 0;

document.addEventListener('keydown', function(event) {
    jump();
});

function jump() {
    if (dino.classList != 'jump') {
        dino.classList.add('jump');
    }
    setTimeout(function() {
        dino.classList.remove('jump');
    }, 300);
}

let isAlive = setInterval(function () {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert('Game over');
    } else if (cactusLeft < 50 && cactusLeft > 0 && dinoTop + 60 >= 140 && dinoTop + 60 <= 180) {
        scoreV++;
        score.innerHTML = scoreV;
    }
}, 10);
