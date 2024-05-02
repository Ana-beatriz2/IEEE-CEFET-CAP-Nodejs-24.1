require('dotenv').config();
const express = require("express");
const routes = require("./routes");

const PORTA = process.env.PORTA;
const HOST = process.env.HOST;

const server = express();
server.use(express.json());
server.use(routes);

server.listen(PORTA, HOST, ()=>
    {
        console.log(`Servidor inicializado em: ${HOST}:${PORTA}`);
    });