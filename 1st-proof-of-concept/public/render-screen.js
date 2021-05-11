export default function renderScreen(screen, game) {
   const context = screen.getContext('2d')
   context.fillStyle = 'white';
   context.clearRect(0, 0, 10, 10);
   
   context.fillStyle = 'red';
   context.fillRect(game.state.fruit.x, game.state.fruit.y, 1, 1);

   for (const index in game.state.snake) {
      context.fillStyle = 'black';
      context.fillRect(game.state.snake[index].x, game.state.snake[index].y, 1, 1);
   }

}