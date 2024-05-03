const usuarioService = require("../services/usuarioService");

async function createUsuario(req, res){
    try{
        const {nome, email, password, telefone} = req.body;
        const createService = await usuarioService.createUsuario(nome, email, password, telefone);

        res.json({ status: true, message: createService});

    }catch(erro){
        console.log(erro);
        res.json({ status: false, message: erro.message });
    }
}

async function readUsuario(req, res){
    try{
        const readService = await usuarioService.readUsuario();

        res.json({ status: true, usuarios: readService });

    }catch(erro){
        console.log(erro);
        res.json({ status: false, message: erro.message });
    }
}

async function readUsuarioPorId(req, res){
    try{
        const id_usuario = req.params.id;
        //const id_usuario = req.usuario.id;

        const readIdService = await usuarioService.readUsuarioPorId(id_usuario);

        res.json({ status: true, usuario: readIdService });

    }catch(erro){
        console.log(erro);
        res.json({ status: false, message: erro.message });
    }
}

async function updateUsuario(req, res){
    try{
        //const id_usuario = req.usuario.id;
        const id_usuario = req.params.id;

        const {nome, email, password, telefone} = req.body;
        const updateService = await usuarioService.updateUsuario(id_usuario, nome, email, password, telefone);

        res.json({ status: true, usuario: updateService });

    }catch(erro){
        console.log(erro);
        res.json({ status: false, message: erro.message });
    }
}

async function deleteUsuario(req, res){
    try{
        //const id_usuario = req.usuario.id;
        const id_usuario = req.params.id;

        const deleteService = await usuarioService.deleteUsuario(id_usuario);

        res.json({ status: true, message: deleteService });

    }catch(erro){
        console.log(erro);
        res.json({ status: false, message: erro.message });
    }
} 

async function login(req, res){
    try{
        const {email, password} = req.body;
        const token = await usuarioService.login(email, password);

        res.json({status: true, token: token});

    }catch(erro){
        console.log(erro);
        res.json({ status: false, message: erro.message });
    }
}

module.exports = {
    createUsuario,
    readUsuario,
    readUsuarioPorId,
    updateUsuario,
    deleteUsuario,
    login
}