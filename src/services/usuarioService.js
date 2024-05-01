const knex = require("../database/index");
const bcrypt = require("bcrypt")

async function createUsuarioService(nome, email, password, telefone){
    try{
        //Criptografa senha
        const salt = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync(password, salt);

        const novoUsuario = {
            nome: nome,
            email: email,
            password: hash,
            telefone: telefone 
        };

        await knex("usuario").insert(novoUsuario);

        return {
            status: true,
            message: "Usuario cadastrado"
        };

    }catch(erro){
        return {
            status: false,
            message: erro.message
        };
    }
}

async function readUsuarioService(){
    try{
        const usuarios = await knex("usuario").select("*");

        if(!usuarios){
            throw new Error("Sem usuários");
        }

        return {
            status: true,
            usuarios: usuarios
        };
        
    }catch(erro){
        return erro.message;
    }
}

async function readUsuarioPorIdService(id){
    try{
        const usuario = await knex("usuario").select("*").where({id: id}).first();
        
        if(!usuario){
            throw new Error("Não encontrado");
        }

        return {
            status: true,
            usuario: usuario
        };
        
    }catch(erro){
        return {
            status: false,
            usuario: erro.message
        };
    }
}

module.exports = {
    createUsuarioService,
    readUsuarioService,
    readUsuarioPorIdService
}