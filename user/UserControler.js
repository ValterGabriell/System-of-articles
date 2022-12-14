
const express = require('express');
const router = express.Router()
const Users = require('./user');
const bcrypt = require('bcryptjs');


router.get("/admin/users", (req, res) => {

    Users.findAll().then((users)=>{
        res.render("admin/users/index",{
            users:users
        })
    })
})

router.get("/admin/user/create", (req, res) => {
    res.render("admin/users/create")
})

router.post("/users/create", (req, res) => {
    var email = req.body.email
    var password = req.body.password

    Users.findOne({
        where: {
            email: email
        }
    }).then((user) => {
        if (user == undefined) {
            var salt = bcrypt.genSaltSync(10)
            var hash = bcrypt.hashSync(password, salt)
            Users.create({
                email: email,
                password: hash
            }).then(() => {
                res.redirect("/login")
            }).catch((erro) => {
                res.redirect("/admin/user/create")
            })
        } else {
            res.redirect("/admin/user/create")
        }
    })
})

router.get("/login", (req,res)=>{
    res.render("admin/users/login")
})

router.post("/authenticate",(req,res)=>{
    var email = req.body.email
    var password = req.body.password

    Users.findOne({
        where:{
            email:email
        }
    }).then(user =>{
        if (user != undefined) {
            var correct = bcrypt.compareSync(password, user.password)
            if (correct) {
                req.session.user ={
                    id:user.id,
                    email:user.email
                }
                res.redirect("/admin/categories")
            } else {
                res.redirect("/login")
            }


        } else {
            res.redirect("/login")
        }
    })
})

router.get("/logout",(req,res)=>{
    req.session.user = undefined
    res.redirect("/")
})


module.exports = router
