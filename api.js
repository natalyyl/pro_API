import express from "express";
import cors from "cors";
const servidor = express();

servidor.use(express.json());
servidor.use(cors())

servidor.get('/recado/helloworld', (req,resp) => {

    resp.send(
        {
            mensagem:"Hello world"
        }
    );
});
servidor.get('/recado/boasvindas',(req,resp) => {
    resp.send(
        {
            mesagem:"Seja-bem vindo(a)"
        })
})
//vesionamento
servidor.get('/recado/ver2/boasvindas',(req,resp) => {
    resp.send(
        {
            mesagem:"que bom que você esta aqui !"

        }
    )
})
servidor.get('/recado/bom-dia',(req,resp) => {
    resp.send(
        {
            mesagem:"bom-dia flor do dia"
        }

    )
})
servidor.get('/recado/bom-dia/pavava',(req,resp) => {
    resp.send({
        mensagem:"bom-dia flor do dia, bjs para a vava"
})
})
servidor.get('/recado/soma/:number1/:number2',(req,resp) => {
    let number1 = Number(req.params.number1)
    let number2 = Number(req.params.number2)
    let soma = number1 + number2
    // params e para parametros de rota
    resp.send({
        soma:soma
})
})
servidor.get('/recado/multip',(req,resp) => {
    let number1 = Number(req.query.number1)
    let number2 = Number(req.query.number2)
    let som = number1 * number2
    resp.send(
        {
            soma: som
        })
})
servidor.get ('/recado/ola',(req,resp) =>{
    let nome = req.query.nome ?? 'Seu paramêtro não está definido';
    resp.send(
        {
            mensagem:`ola ${nome} <3`
        })

})
servidor.post('/media',(req,resp) =>{
   let num1 = req.body.nota1
   let num2 = req.body.nota2
   let num3 = req.body.nota3
    let med = (num1 + num2 +num3) / 3
    resp.send(
        {
             media:med
            })
})
servidor.post('/vetor/dobro', (req,resp) =>{
let numr = req.body.num
let numr2 = []
for(let i= 0 ;i < numr.length; i++){
    numr2[i] = numr[i] * 2
}
resp.send(
    {
        numeros: numr,
        dobro:numr2
    })
})


servidor.post("/loja/desconto",(req,resp) =>{
    let valor = req.body.valor
    let des = req.body.vezes
    let cupom = req.query.desconto
    let total = valor / des
    if (cupom == "vava44") {
        let df = (valor * 44) / 100
        total -= (valor - df) /des
        resp.send(
            {
                desconto: total
            })
  
            }
    if (des > 1) {
        let juros = valor * 0.005
        total += juros
        resp.send(
            {
                juros:total
            })
    }
    else{
        resp.send(
            {
                parcela: total
            })
    }
} )
    servidor.post("/loja/desconto/completo",(req,resp) =>{
    let parc = req.body.parc
    let itens = req.body.coisas
    let cupom = req.query.desconto
    let total = 0
    let df = 0
    for(let prod of itens){
        total += prod.preço
    }if (parc > 1) {
        let juros = total * 0.005
        total += juros
        resp.send(
            {
                totalJuros : total
            })
    }
    if (cupom == "vava44") {
        df = (total * 44) / 100
        total -= (total - df) /parc
        resp.send(
            {
                totalComDesconto: total
            })
    }
    else{
        resp.send(
            {
                total: total
            })
    }

    })




    '   '
//get o verbo para o endepoint
// '/título' caminho do endepoint
// (req,resp) request e response
// => expressão de função de seta 

servidor.listen(5001, () => console.log('APi subida com sucesso'));