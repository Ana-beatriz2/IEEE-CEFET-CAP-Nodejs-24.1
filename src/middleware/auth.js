require("dotenv").config()
const jwt = require("jsonwebtoken");

async function auth(req, res, next){
    try{
        const auth = req.headers.authorization;
        if(!auth){
            throw new Error("Token não informado");
        }

        //Bearer <token>
        const [,token] = auth.split(" ");

        jwt.verify(token, process.env.JWT_KEY, (erro, decoded) => {

            if(erro){
                console.log(erro)
                throw new Error("Token inválido: "+ erro.message);
            }
            else{
                req.usuario = decoded;
            }  
        });

        next();

    }catch(erro){
        console.log(erro);
        return res.json({ status: false, message: erro.message });
    }
}

module.exports = {
    auth
}