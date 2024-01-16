document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    const gridSize = 20;
    const snake = [{ x: 10, y: 10 }];
    let food = { x: 5, y: 5 };
    let dx = 0;
    let dy = 0;
  
    function drawSnake() {
      gameBoard.innerHTML = '';
      snake.forEach(segment => {
        const snakeCell = createCell(segment.x, segment.y, 'snake-cell');
        gameBoard.appendChild(snakeCell);
      });
    }
  
    function drawFood() {
      const foodCell = createCell(food.x, food.y, 'food-cell');
      gameBoard.appendChild(foodCell);
    }
  
    function createCell(x, y, className) {
      const cell = document.createElement('div');
      cell.className = className;
      cell.style.gridColumnStart = x;
      cell.style.gridRowStart = y;
      return cell;
    }
  
    function moveSnake() {
      const head = { x: snake[0].x + dx, y: snake[0].y + dy };
      snake.unshift(head);
      if (head.x === food.x && head.y === food.y) {
        food = { x: Math.floor(Math.random() * gridSize) + 1, y: Math.floor(Math.random() * gridSize) + 1 };
      } else {
        snake.pop();
      }
    }
  
    function changeDirection(event) {
      const LEFT_KEY = 37;
      const RIGHT_KEY = 39;
      const UP_KEY = 38;
      const DOWN_KEY = 40;
  
      const keyPressed = event.keyCode;
      const goingUp = dy === -1;
      const goingDown = dy === 1;
      const goingLeft = dx === -1;
      const goingRight = dx === 1;
  
      if (keyPressed === LEFT_KEY && !goingRight) {
        dx = -1;
        dy = 0;
      }
      if (keyPressed === UP_KEY && !goingDown) {
        dx = 0;
        dy = -1;
      }
      if (keyPressed === RIGHT_KEY && !goingLeft) {
        dx = 1;
        dy = 0;
      }
      if (keyPressed === DOWN_KEY && !goingUp) {
        dx = 0;
        dy = 1;
      }
    }
  
    function main() {
      drawSnake();
      drawFood();
      moveSnake();
      if (isGameOver()) {
        alert('Game Over!');
        return;
      }
      setTimeout(main, 200);
    }
  
    function isGameOver() {
      const head = snake[0];
      if (
        head.x < 1 ||
        head.x > gridSize ||
        head.y < 1 ||
        head.y > gridSize ||
        snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)
      ) {
        return true;
      }
      return false;
    }
  
    document.addEventListener('keydown', changeDirection);
    main();
  });