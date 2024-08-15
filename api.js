import express from "express";


const servidor = express();

servidor.get('helloworld', (req,resp) => {
    resp.send("Hello world");
});
//get o verbo para o endepoint
// '/título' caminho do endepoint
// (req,resp) request e response
// => expressão de função de seta 

servidor.listen(5001, () => console.log('APi subida com sucesso'));