const Sequelize = require('sequelize');
const connection = require('../database/database');

//para fazer o relacionamento
const Category = require('../categories/Category');


const Article = connection.define('articles',{
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug:{
        type:Sequelize.STRING,
        allowNull:false
    },
    body:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

//UMA CATEGORIA TEM MUITOS ARTIGOS
Category.hasMany(Article)
//UM ARTIGO PERTENCE A UMA CATEGORIA
Article.belongsTo(Category)

module.exports = Article