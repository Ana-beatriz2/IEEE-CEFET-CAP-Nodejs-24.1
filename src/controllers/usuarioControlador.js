const {request = req, response = res} = require("express");
const { createUsuarioService, readUsuarioService, readUsuarioPorIdService } = require("../services/usuarioService");

async function createUsuario(req, res){
    try{
        const {nome, email, password, telefone} = req.body;
        const createService = await createUsuarioService(nome, email, password, telefone);

        res.json({ status: true, message: createService});

    }catch(erro){
        console.log(erro);
        res.json({ status: false, message: erro.message });
    }
}

async function readUsuario(req, res){
    try{
        const readService = await readUsuarioService();

        res.json({ status: true, usuarios: readService });

    }catch(erro){
        console.log(erro);
        res.json({ status: false, message: erro.message });
    }
}

async function readUsuarioPorId(req, res){
    try{
        const id_usuario = req.params.id;
        const readIdService = await readUsuarioPorIdService(id_usuario);

        res.json({ status: true, usuario: readIdService });

    }catch(erro){
        console.log(erro);
        res.json({ status: false, message: erro.message });
    }
}

module.exports = {
    createUsuario,
    readUsuario,
    readUsuarioPorId
}