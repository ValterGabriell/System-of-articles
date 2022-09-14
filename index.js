const express = require("express")
const app = express()
const bodyParser = require('body-parser');
const connection = require('./database/database');

const categoriesController = require('./categories/CategoriesController');
const articlesController = require('./articles/ArticlesController');

const Article = require('./articles/Articles');
const Category = require('./categories/Category');

//view engine
app.set('view engine', 'ejs')

//static
app.use(express.static('public'))

//body parser
app.use(bodyParser.urlencoded({ extend: false }))
app.use(bodyParser.json())

//database
connection.authenticate().then(() => {
    console.log("Conexão feita com sucesso");
}).catch((erro) => {
    console.log(erro);
})



app.use("/", categoriesController)
app.use('/', articlesController)



app.get("/", (req, res) => {
    Article.findAll().then(articles =>{
        res.render("index", {articles:articles})
    })
    
})

app.listen(8080, () => {
    console.log('server rodando')
})