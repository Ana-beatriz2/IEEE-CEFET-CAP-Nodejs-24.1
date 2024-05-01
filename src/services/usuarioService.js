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
        }

        await knex("usuario").insert(novoUsuario);

        return "Usuário cadastrado";
        
    }catch(erro){
        return erro.message;
    }
}

module.exports = {
    createUsuarioService
}