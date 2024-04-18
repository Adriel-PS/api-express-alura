function getLivros(req, res){
    try{
        res.send("vc fez uma requisição do tipo get")
    }catch(error){
        res.status(500)
        res.send(error.messge)
    }
}

module.exports = {
    getLivros
}