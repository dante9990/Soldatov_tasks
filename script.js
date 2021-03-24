let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let buttonStart = document.getElementById('start');
let buttonReset = document.getElementById('reset');
let buttonPause = document.getElementById('pause');
let buttonContinue = document.getElementById('continue');
let spanScore = document.getElementById('score');
let message = document.getElementById('message');

let grid = 16;
let count = 0;
let score = 0;
let speed = 10;
let pause = false;


let snake = {
    x: 160,
    y: 160,
    dx: grid,
    dy: 0,
    cells: [],
    maxCells: 4
};

let apple = {
    x: 320,
    y: 320
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function resetPosition() {
    snake.x = 160;
    snake.y = 160;
    snake.cells = [];
    snake.maxCells = 4;
    snake.dx = grid;
    snake.dy = 0;

    apple.x = getRandomInt(0, 25) * grid;
    apple.y = getRandomInt(0, 25) * grid;

    score = 0;
    speed = 10;
}


function drawScore() {
    spanScore.textContent = `Score: ${score}`;
}

function loop() {
    requestAnimationFrame(loop);

    if (score > 5) {
        speed = 8;
    }

    if (score > 10) {
        speed = 6;
    }

    if (score > 15) {
        speed = 4;
    }

    if (count++ < speed) {
        return;
    }

    count = 0;
    context.clearRect(0, 0, canvas.width, canvas.height);

    if (!pause) {
        snake.x += snake.dx;
        snake.y += snake.dy;
    }


    if (score < 3) {
        canvas.style.border = '1px solid rgb(161, 14, 14)';
        message.textContent = '';

        if (snake.x < 0 || snake.x >= canvas.width) {
            resetPosition();
            alert('GAME OVER');
        }

        if (snake.y < 0 || snake.y >= canvas.height) {
            resetPosition();
            alert('GAME OVER');
        }
    } else {
        canvas.style.border = '1px solid white';
        message.textContent = 'Стены больше не преграда!';

        if (snake.x < 0) {
            snake.x = canvas.width - grid;
        }
        else if (snake.x >= canvas.width) {
            snake.x = 0;
        }

        if (snake.y < 0) {
            snake.y = canvas.height - grid;
        }

        else if (snake.y >= canvas.height) {
            snake.y = 0;
        }
    }



    if (!pause) {
        snake.cells.unshift({ x: snake.x, y: snake.y });

        if (snake.cells.length > snake.maxCells) {
            snake.cells.pop();
        }
    }


    context.fillStyle = 'green';
    context.fillRect(apple.x, apple.y, grid - 1, grid - 1);

    context.fillStyle = 'white';
    snake.cells.forEach(function (cell, index) {
        context.fillRect(cell.x, cell.y, grid - 1, grid - 1);
        if (cell.x === apple.x && cell.y === apple.y) {
            snake.maxCells++;
            score++;

            apple.x = getRandomInt(0, 25) * grid;
            apple.y = getRandomInt(0, 25) * grid;
        }

        for (let i = index + 1; i < snake.cells.length; i++) {
            if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
                resetPosition();
                alert('GAME OVER');
            }
        }
    });
    drawScore();
}

document.addEventListener('keydown', function (e) {
    if (e.which === 37 && snake.dx === 0) {
        snake.dx = -grid;
        snake.dy = 0;
    }
    else if (e.which === 38 && snake.dy === 0) {
        snake.dy = -grid;
        snake.dx = 0;
    }
    else if (e.which === 39 && snake.dx === 0) {
        snake.dx = grid;
        snake.dy = 0;
    }
    else if (e.which === 40 && snake.dy === 0) {
        snake.dy = grid;
        snake.dx = 0;
    }
});

buttonReset.hidden = true;
buttonPause.hidden = true;
buttonStart.addEventListener('click', () => {
    requestAnimationFrame(loop);
    buttonReset.hidden = false;
    buttonPause.hidden = false;
    buttonStart.hidden = true;
});

buttonReset.addEventListener('click', () => {
    resetPosition();
    pause = false;
});

buttonPause.addEventListener('click', () => {
    if(buttonPause.value == 'Pause') {
        pause = true;
        buttonPause.value = 'Continue';
    }
    else {
        pause = false;
        buttonPause.value = 'Pause';
    }
    
});

