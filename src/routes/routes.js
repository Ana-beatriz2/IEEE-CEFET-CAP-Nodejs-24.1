const Router = require("express").Router;
const route = Router();

//ROTAS PADRÃO - CRUD
route.post("/create", );
route.get("/read", );
route.get("/read/:id", );
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