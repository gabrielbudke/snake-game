import express from 'express';
import http from 'http';
import createGame from './public/game.js';

const app = express();
const server = http.createServer(app);

app.use(express.static('public'));

const game = createGame();

console.log('> game.state', game.state)

server.listen(3000, () => {
   console.log('> Server listening on port: 3000');
})
