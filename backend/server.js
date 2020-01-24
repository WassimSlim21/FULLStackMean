//console.log('this is my first node app!');

//To create a Node server in your server.js file
//To run server : nodemon server 
//To create an express app : npm install --save express


const http = require('http');
const app = require('./app');
app.set('port', process.env.PORT || 3000);
const server = http.createServer(app);

server.listen(process.env.PORT || 3000);