const Sequelize = require('sequelize');
const connection = new Sequelize('guiapress','root','Sherlock221b@',{
    host:'localhost',
    dialect:'mysql'
})

module.exports = connection