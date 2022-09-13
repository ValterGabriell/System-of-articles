const express = require('express');
const router = express.Router()
const Category = require('./Category');
const slugify = require('slugify');

/**
 * salvar categoria
 */
router.post("/categories/save", (req, res) => {
    var title = req.body.title
    if (title != undefined) {
        Category.create({
            title: title,
            slug: slugify(title)
        }).then(() => {

            res.redirect("/admin/categories")
        })
    } else {
        res.redirect("/")
    }
})

/**
 * Deletar a categoria
 */
router.post("/categories/delete", (req, res) => {
    var idCategory = req.body.id
    if (idCategory != null) {
        Category.destroy({
            where: {
                id: idCategory
            }
        })
        res.redirect("/admin/categories")
    } else {
        res.redirect("/admin/categories")
    }
})

/**
 * redirecionar para a pagina de edit
 */
router.get("/admin/categories/edit/:id", (req, res) => {
    var idCategory = req.params.id

    if (isNaN(idCategory)) {
        res.redirect("/admin/categories")
    }

    Category.findByPk(idCategory).then(category => {
        if (category != undefined) {
            res.render("admin/categories/edit", { category: category })
        } else {
            res.redirect("/admin/categories")
        }
    }).catch(erro => {
        res.redirect("/admin/categories")
        confirm(erro)
    })
})


/**
 * editar categoria
 */
router.post("/categories/update", (req, res) => {
    var idCategory = req.body.id
    var title = req.body.title
    Category.update({ title: title,  slug: slugify(title) }, {
        where: {
            id: idCategory
        }
    }).then(() => {
        res.redirect("/admin/categories")
    })
})

router.get("/admin/categories/new", (req, res) => {
    res.render("admin/categories/new")
})

router.get("/admin/categories", (req, res) => {
    Category.findAll().then(categories => {
        res.render("admin/categories/index", { categories: categories })
    })



})


module.exports = router