const Router = require("express").Router;
const route = Router();
const usuarioController = require("./controllers/usuarioController");

//ROTAS PADRÃO - CRUD
route.post("/usuario", usuarioController.createUsuario);
route.get("/usuario", usuarioController.readUsuario);
route.get("/usuario/:id", usuarioController.readUsuarioPorId);
route.patch("/usuario/:id", usuarioController.updateUsuario);
route.delete("/usuario/:id", usuarioController.deleteUsuario);

//LOGIN
route.post("/login", usuarioController.login)

//ROTA DEFAULT
route.get("/", (req, res)=>{
    res.status(200).send("Hello World!");
    console.log("Configuração de rotas!")
});

module.exports = route;