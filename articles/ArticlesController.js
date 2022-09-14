const express = require('express');
const router = express.Router()
const Category = require('../categories/Category');
const Article = require('./Articles');
const slugify = require('slugify');


router.get("/admin/articles", (req, res) => {
    Article.findAll({
        include:[{model: Category}]
    }).then((articles) => {
        res.render('admin/articles/index',{
            articles:articles
        })
    })

})

router.post("/articles/delete", (req, res) => {
    var idArticle = req.body.id
    if (idArticle != null) {
        Article.destroy({
            where: {
                id: idArticle
            }
        })
        res.redirect("/admin/articles")
    } else {
        res.redirect("/admin/articles")
    }
})

router.get("/admin/articles/new", (req, res) => {
    Category.findAll().then(categories => {
        res.render("admin/articles/new", {
            categories: categories
        })
    })
})

router.post("/articles/save", (req, res) => {
    var title = req.body.title
    var body = req.body.body
    var category = req.body.category

    Article.create({
        title: title,
        slug: slugify(title),
        body: body,
        categoryId: category
    }).then(() => {
        res.redirect("/admin/articles")
    })
})


module.exports = router