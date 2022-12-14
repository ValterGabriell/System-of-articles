const express = require("express")
const app = express()
const bodyParser = require('body-parser');
const connection = require('./database/database');
const session = require('express-session');

const categoriesController = require('./categories/CategoriesController');
const articlesController = require('./articles/ArticlesController');
const usersController = require('./user/UserControler');

const Article = require('./articles/Articles');
const Category = require('./categories/Category');
const Users = require('./user/User');

//view engine
app.set('view engine', 'ejs')

//session
app.use(session({
    secret:"kikokikorarara",
    cookie:{
        maxAge:1800000
    }
}))



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
app.use("/", usersController)


app.get("/:slug", (req, res) => {
    var slug = req.params.slug
    Article.findOne({
        where: {
            slug: slug
        }
    }).then(article => {
        if (article != undefined) {
            Category.findAll().then(categories => {
                res.render("article", { article: article, categories: categories })
            })
        } else {
            res.redirect("/")
        }
    }).catch(erro => {
        res.redirect("/")
    })
})

app.get("/", (req, res) => {
    Article.findAll({limit:4}).then(articles => {
        Category.findAll({
          order:[['id', 'DESC']]
        }).then(categories => {
            res.render("index", { articles: articles, categories: categories })
        })

    })

})

app.get("/category/:slug", (req, res) => {
    var slug = req.params.slug
    Category.findOne({
        where: {
            slug: slug
        },
        //incluir todos os artigos que pertencem a categoria
        include: [{ model: Article }]
    }).then(category => {
        if (category != undefined) {
            Category.findAll().then(categories => {
                res.render("index", { articles: category.articles, categories: categories })
            })
        } else {
            res.redirect("/")
        }
    }).catch(erro => {
        res.redirect("/")
    })
})



app.listen(8090, () => {
    console.log('server rodando')
})