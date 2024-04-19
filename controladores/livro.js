const fs = require("fs")
const { getTodosLivros } = require("../servicos/livro")

function getLivros(req, res){
    try{
        //const livro = JSON.parse( fs.readFileSync("livros.json") )
        const livro = getTodosLivros()
        res.send(livro)
    }catch(error){
        res.status(500)
        res.send(error.messge)
    }
}

module.exports = {
    getLivros
}