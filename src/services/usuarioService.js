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

        return "Usuário cadastrado";

    }catch(erro){
        throw erro
    }
}

async function readUsuarioService(){
    try{
        const usuarios = await knex("usuario").select("*");

        if(!usuarios){
            throw new Error("Sem usuários");
        }

        return usuarios;
        
    }catch(erro){
        throw erro
    }
}

async function readUsuarioPorIdService(id){
    try{
        const usuario = await knex("usuario").select("*").where({id: id}).first();
        
        if(!usuario){
            throw new Error("Não encontrado");
        }

        return usuario;
        
    }catch(erro){
        throw erro
    }
}

async function updateUsuarioService(id, nome, email, password, telefone){
    try {
        const usuario = await knex('usuario').select('*').where({id: id}).first();
        if (!usuario) {
            throw new Error("Usuário não existe");
        }
        
        // Criptografa a senha (se fornecida)
        let hash;
        if (password) {
            const salt = bcrypt.genSaltSync();
            hash = bcrypt.hashSync(password, salt);
        }
        
        const novoUsuario = {
            nome: nome,
            email: email,
            password: hash,
            telefone: telefone 
        };

        await knex('usuario').update(novoUsuario).where({ id: id });

        return "Usuário atualizado";
    
      }catch(erro){
        throw eroo;
      }
}

module.exports = {
    createUsuarioService,
    readUsuarioService,
    readUsuarioPorIdService,
    updateUsuarioService
}