const Router = require("express").Router;
const route = Router();
const usuarioController = require("./controllers/usuarioController");
const { auth } = require("./middleware/auth")

//ROTAS PADRÃO - CRUD
route.post("/usuario", usuarioController.createUsuario);
route.get("/usuario", usuarioController.readUsuario);
route.get("/usuario/:id", usuarioController.readUsuarioPorId);
route.patch("/usuario/:id", usuarioController.updateUsuario);
route.delete("/usuario/:id", usuarioController.deleteUsuario);

// CRUD AUTENTICADO
//route.get("/usuario", auth, usuarioController.readUsuarioPorId);
//route.patch("/usuario", auth, usuarioController.updateUsuario);
//route.delete("/usuario", auth, usuarioController.deleteUsuario);

//LOGIN
route.post("/login", usuarioController.login);

//ROTA DEFAULT
route.get("/", (req, res)=>{
    res.send("Hello World!");
    console.log("Configuração de rotas!");
});

module.exports = route;