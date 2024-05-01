const Router = require("express").Router;
const route = Router();

const { createUsuario, readUsuario, readUsuarioPorId } = require("../controllers/usuarioControlador");

//ROTAS PADRÃO - CRUD
route.post("/create", createUsuario);
route.get("/read", readUsuario);
route.get("/read/:id", readUsuarioPorId);
route.patch("/update/:id", );
route.delete("/delete", );

//LOGIN
route.post("/login", )

//ROTA DEFAULT
route.get("/", (req, res)=>{
    res.status(200).send("Hello World!");
    console.log("Configuração de rotas!")
});

module.exports = route;