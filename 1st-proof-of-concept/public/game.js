export default function createGame() {
   const state = {
      snake: [
         { x: 1, y: 5 }
      ],
      fruit: {
         x: Math.floor(Math.random() * 9 + 1) * 1,
         y: Math.floor(Math.random() * 9 + 1) * 1
      },
      direction: 'right'
   };

   function addFruit(fruit) {
      const fruitX = fruit.x;
      const fruitY = fruit.y;

      state.fruit = fruit;

      return;
   }

   function handleSnakeMovement() {
      let snakeX = state.snake[0].x;
      let snakeY = state.snake[0].y;

      if (state.direction === 'right') {
         snakeX = snakeX + 1;
      }

      if (state.direction === 'left') {
         snakeX = snakeX - 1;
      }

      if (state.direction === 'down') {
         snakeY = snakeY + 1;
      }

      if (state.direction === 'up') {
         snakeY = snakeY - 1;
      }

      if(!checkForFruitCollition({ snakeX, snakeY })){
         state.snake.pop();
      }
                              
      state.snake.unshift({ x: snakeX, y: snakeY });

      if (state.snake[0].x > 9 && state.direction === 'right') {
         state.snake[0].x = 0;
      }

      if (state.snake[0].x < 0 && state.direction === 'left') {
         state.snake[0].x = 9;
      }

      if (state.snake[0].y > 9 && state.direction === 'down') {
         state.snake[0].y = 0;
      }

      if (state.snake[0].y < 0 && state.direction === 'up') {
         state.snake[0].y = 9;
      }

   }

   function moveSnake(command) {
      const acceptedMoves = {
         ArrowUp(direction) {
            if (state.direction !== 'down') {
               state.direction = direction;
               return;
            }
         },

         ArrowRight(direction) {
            if (state.direction !== 'left') {
               state.direction = direction;
               return;
            }
         },

         ArrowDown(direction) {
            if (state.direction !== 'up') {
               state.direction = direction;
               return;
            }
         },

         ArrowLeft(direction) {
            if (state.direction !== 'right') {
               state.direction = direction;
               return;
            }
         }
      };

      const keyPressed = command.keyPressed;
      const direction = command.direction;
      const moveFunction = acceptedMoves[keyPressed];

      if (moveFunction) {
         moveFunction(direction);
      }

   }

   function checkForFruitCollition(coordenates) {            

      const { snakeX, snakeY } = coordenates;
      //const snakeY = state.snake[0].y;

      if (state.snake[0].x === state.fruit.x && state.snake[0].y === state.fruit.y) {               
         
         addFruit({
            x: Math.floor(Math.random() * 9 + 1) * 1,
            y: Math.floor(Math.random() * 9 + 1) * 1
         });               

         return true;   

      }                        
      
      return false;

   }

   return { state, handleSnakeMovement, moveSnake, addFruit, checkForFruitCollition };
}
