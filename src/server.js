require('dotenv').config();
const express = require("express");

const PORTA = process.env.PORTA;
const HOST = process.env.HOST;

const server = express();

server.listen(PORTA, HOST, ()=>
    {
        console.log(`Servidor inicializado em: ${HOST}:${PORTA}`);
    });