const express = require("express");
const app = express();

app.get("/aluno", (req, res )=> {
    let usuario = {
                    nome: "Tadeu Raphael",
                    disciplina : "Topicos Especiais",
                    curso : "ADS"
    }
    res.send(usuario)
}) ;

app.get("/duplas", (req, res )=> {
    let usuario = {
                    nome: "Daniel "
    }
}) ;

app.listen(3000, () => {
    console.log("funfando...");
})