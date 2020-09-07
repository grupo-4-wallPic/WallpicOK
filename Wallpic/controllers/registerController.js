
const bcryptjs = require('bcryptjs')
const {validationResult} = require('express-validator')
const db = require('../database/models');
const {Users} = require('../database/models');
const Op = db.Sequelize.Op

const registerController = {

    index: (req, res) => {
        res.render('registerView')
    },

    registro: (req, res) => {

        let errors = validationResult(req);

        if (errors.isEmpty()) {

        let passCrypt = bcryptjs.hashSync(req.body.password, 10);
        delete req.body.retype
        
        // let nuevoUsuario = {

        //     ...req.body,
        //     password: passCrypt

        // };

        Users.create ({
            name: req.body.name,
            last_name: req.body.lastname,
            email: req.body.email,
            password: passCrypt,
            newsletter:req.body.checkbox,

        })
        .then(() => {
            return res.redirect('/login')  
           })
        
        // users.createNewData(nuevoUsuario)
        // const usersFilePath = path.join(__dirname, '..', 'data', 'users.json');

        // let usuarios = JSON.parse(fs.readFileSync(usersFilePath, {encoding: 'utf-8'}))
        // delete req.body.retype;
        
        
        // let newUsers = [...usuarios, nuevoUsuario];
        
        // let usuarioJson = JSON.stringify(newUsers);
        
       

        // fs.writeFileSync(usersFilePath, usuarioJson);

        // return res.redirect('/');
        } else {
        return res.render('registerView', {errors: errors.mapped(), old:req.body});
        }
    }   
}
    module.exports = registerController;