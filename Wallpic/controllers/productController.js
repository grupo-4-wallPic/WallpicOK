const fs = require ('fs');
const db = require ('../database/models/index')
const sequelize = db.sequelize
const Products = require ('../database/models')
const Size = require ('../database/models/Size')
const Color = require ('../database/models/Color')

//const leerJson = fs.readFileSync('productsWallpicDataBase.json', {encoding: 'utf-8'})
//const products = JSON.parse (leerJson);

module.exports = {
    root: (req, res) => {
       let products = db.Products.findByPk ( req.params.id ) 
       let size = db.Size.findAll()
       let color = db.Color.findAll()
       .promiseAll ([products, size, color])
       .then(([resultadoProducts, resultadoSize, resultadoColor]) => {return res.render('product', {product:product})})
       .catch (function (e) {})
    },
    item: (req, res) => {
        db.Products.findByPk ( req.params.id ) 
        .then((product) => {return res.render('product', {product:product})})
        db.Size.findAll () 
       .then ((size) => {return res.render('product', {size:size})})
       .catch (function (e) {})
    }
}