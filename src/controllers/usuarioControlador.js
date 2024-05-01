const {request = req, response = res} = require("express");
const { createUsuarioService } = require("../services/usuarioService");

async function createUsuario(req, res){
    try{
        const {nome, email, password, telefone} = req.body;
        const createService = await createUsuarioService(nome, email, password, telefone);
        
        res.json({
            status: true,
            message: createService
        });

    }catch(erro){
        res.json({
            status: false, 
            message: erro.message
        });
    }
}

module.exports = {
    createUsuario
}