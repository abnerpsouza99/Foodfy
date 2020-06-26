const express = require('express')
const server = express()

const nunjucks = require("nunjucks")

const foods = require("./data")

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.use(express.static('public/styles'))
server.use(express.static('src/scripts'))
server.use(express.static('public/assets'))



server.get("/", function(req, res){
    return res.render("index", {foods: foods})
})

server.get("/about", function(req, res){
    return res.render("about")
})



server.listen(4000, function(){
    console.log("Server is running")
})