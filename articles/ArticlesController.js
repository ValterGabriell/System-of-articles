const express = require('express');
const router = express.Router()
const Category = require('../categories/Category');
const Article = require('./Articles');
const slugify = require('slugify');
const adminAuth = require('../middleware/adminAuth');


router.get("/admin/articles", adminAuth, (req, res) => {
    Article.findAll({
        include: [{ model: Category }],
        order:[['id','DESC']]
    }).then((articles) => {
        res.render('admin/articles/index', {
            articles: articles
        })
    })

})

router.post("/articles/delete", adminAuth,(req, res) => {
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

router.get("/admin/articles/new", adminAuth,(req, res) => {
    Category.findAll({
        order:[['id','DESC']]
    }).then(categories => {
        res.render("admin/articles/new", {
            categories: categories
        })
    })
})

router.get("/admin/articles/edit/:id",adminAuth, (req, res) => {
    var id = req.params.id
    Article.findByPk(id).then(article => {
        Category.findAll().then(categories => {
            res.render("admin/articles/edit", {
                article: article,
                categories: categories
            })
        })

    })
})

router.post("/article/update",adminAuth, (req, res) => {
    var id = req.body.id
    var title = req.body.title
    var body = req.body.body
    var category = req.body.category

    Article.update({
        title: title,
        body: body,
        categoryId: category,
        slug: slugify(title)
    }, {
        where: {
            id: id
        }
    }).then(() => {
        res.redirect("/admin/articles")
    })

})

router.post("/articles/save", adminAuth,(req, res) => {
    var title = req.body.title
    var body = req.body.body
    var category = req.body.category

    Category.findAll().then((categories)=>{
        if (categories.length > 0) {
            Article.create({
                title: title,
                slug: slugify(title),
                body: body,
                categoryId: category
            }).then(() => {
                res.redirect("/admin/articles")
            })
        }else{
            res.redirect("/admin/categories/new")
        }
    })


})

router.get('/articles/page/:num', (req, res) => {
    var page = req.params.num
    var offset = 0
    /**
     * pag 1 = 0 until 3
     * pag 2 = 4 until 7
     * pag 3 = 8 until 11
     */

    if (isNaN(page) || page == 1) {
        offset = 0
    } else {
        offset = (parseInt(page) - 1) * 4
    }


    Article.findAndCountAll({
        limit: 4,
        offset: offset
    }).then(articles => {
        var next;

        if (offset + 4 >= articles.count && articles.length !== 0) {
            next = false
        } else {
            next = true
        }

        var result = {
            page: parseInt(page),
            next: next,
            articles: articles
        }

        Category.findAll({
            order:[['id','DESC']]
        }).then(categories => {
            res.render("admin/articles/page", {
                result: result, categories: categories
            })
        })
    })
})


module.exports = router