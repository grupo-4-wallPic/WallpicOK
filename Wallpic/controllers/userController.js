const fs = require ('fs');
const path = require ('path');

const userController = {

    index: (req, res) => {
        return res.render ('user')
    },

    compras: (req, res) => {
        return res.render ('compras')
    },

    favoritos: (req, res) => {
        return res.render ('favoritos')
    },

    datos: (req, res) => {
        return res.render ('datos')
    }


}
    module.exports = userController;