
/**
 * Método responsavel por validar se o usuário está logado para acessar outras
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function adminAuth(req, res, next) {
    //autorizar apenas admin
    if (req.session.user != undefined) {
        next()
    }else{
        res.redirect("/login")
    }
}

module.exports = adminAuth