let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let buttonStart = document.getElementById('start');
let buttonReset = document.getElementById('reset');

let grid = 16;
let count = 0;
let score = 0;
let speed = 10;

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

function drawScore() {
    context.font = '16px Arial';
    context.fillStyle = '#fff';
    context.fillText(`Score: ${score}`, 8, 20);
}

function loop() {
    requestAnimationFrame(loop);

    let speed = 10;

    if(score > 5) {
        speed = 8;
    }

    if(score > 10) {
        speed = 6;
    }

    if(score > 15) {
        speed = 4;
    }

    if (count++ < speed) {
        return;
    }

    count = 0;
    context.clearRect(0, 0, canvas.width, canvas.height);

    snake.x += snake.dx;
    snake.y += snake.dy;

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

    snake.cells.unshift({ x: snake.x, y: snake.y });

    if (snake.cells.length > snake.maxCells) {
        snake.cells.pop();
    }

    context.fillStyle = 'white';
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
        snake.dy = -grid; snake.dx = 0;
    }
    else if (e.which === 39 && snake.dx === 0) {
        snake.dx = grid; snake.dy = 0;
    }
    else if (e.which === 40 && snake.dy === 0) {
        snake.dy = grid; snake.dx = 0;
    }
});

buttonReset.hidden = true;
buttonStart.addEventListener('click', () => {
    requestAnimationFrame(loop);
    buttonReset.hidden = false;
    buttonStart.hidden = true;
});

buttonReset.addEventListener('click', () => {
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
})

