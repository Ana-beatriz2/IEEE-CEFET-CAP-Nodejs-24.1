const Router = require("express").Router;
const route = Router();

const { createUsuario, readUsuario, readUsuarioPorId, updateUsuario, deleteUsuario } = require("./controllers/usuarioController");

//ROTAS PADRÃO - CRUD
route.post("/usuario", createUsuario);
route.get("/usuario", readUsuario);
route.get("/usuario/:id", readUsuarioPorId);
route.patch("/usuario/:id", updateUsuario);
route.delete("/usuario/:id", deleteUsuario);

//LOGIN
route.post("/login", )

//ROTA DEFAULT
route.get("/", (req, res)=>{
    res.status(200).send("Hello World!");
    console.log("Configuração de rotas!")
});

module.exports = route;