const {check, body} = require('express-validator');
const json = require('../custom-module/custom-json')
// const users = json('users')
const bcryptjs = require ('bcryptjs')
const db = require('../database/models');
const {Users} = require('../database/models');
const Op = db.Sequelize.Op

module.exports = {

    registerValidator: [
        check('name')
        .notEmpty()
        .withMessage('Este campo no puede estar vacío'),

        check('lastname')
        .notEmpty()
        .withMessage('Este campo no puede estar vacío'),

        body('email')
        .notEmpty()
        .withMessage('Debe ingresar un correo electrónico').bail()
        .isEmail()
        .withMessage('Debe ingresar un email válido')
        .custom (( value, req) => {
          const user = Users.findOne({
            where: { email: req.body.email } });
          if (user){
            return !user}
          }) 
            // const user = users.findBySomething((user) => user.email === value);
            // return !user})
        .withMessage ('Usuario ya registrado'),
        
      
        check('password')
        .notEmpty()
        .withMessage('Campo obligatorio')
        .isLength( {min: 8} )
        .withMessage('La contraseña debe tener al menos 8 caracteres'),
    
        body("retype")
        .notEmpty()
        .withMessage("Campo obligatorio")
        .bail()
        .custom((value, { req }) => req.body.password === value)
        .withMessage("Las contraseñas deben coincidir"),
        
    ],

    login: [
        body("email")
          .notEmpty()
          .withMessage("Campo obligatorio")
          .bail()
          .custom((value, { req }) => {
            const user = Users.findOne({
              where: { email: req.body.email } });
            // users.findBySomething((user) => user.email == value);
            if (user) {
              return bcryptjs.compareSync(req.body.password, user.password);
            } else {
              return false;
            }
          })
          .withMessage("Email o contraseña inválidos"),
        body("password").notEmpty().withMessage("Campo obligatorio"),
      ],

}