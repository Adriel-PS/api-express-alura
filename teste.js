const fs = require("fs");

const atual = JSON.parse(fs.readFileSync("livros.json"))
const dadoNovo = {id: '3', nome: "livro quatro"}

fs.writeFileSync("livros.json", JSON.stringify([...atual, dadoNovo]))

console.log(JSON.parse(fs.readFileSync("livros.json")))

