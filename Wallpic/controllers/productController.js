const fs = require ('fs');
const db = require ('../database/models')
const sequelize = db.sequelize;
const Op = db.Sequelize.Op;
const {Categories, Sizes, Colors, Products} = require('../database/models');
//const leerJson = fs.readFileSync('productsWallpicDataBase.json', {encoding: 'utf-8'})
//const products = JSON.parse (leerJson);

module.exports = {
    root: (req, res) => {
       let products = Products.findByPk ( req.params.id ) 
       let sizes = Sizes.findAll()
       let colors = Colors.findAll()
       Promise.all ([products, sizes, colors])
       .then(([products, sizes, colors]) => {return res.render('product', {products, sizes, colors})})
       //.catch (function (e) {})
    },
    item: (req, res) => {
        let sizes = Sizes.findAll()
        let colors = Colors.findAll()
       let product = Products.findByPk ( req.params.id )
       let related = Products.findByPk (req.params.id)
    //    .then (({

    //    }))

       
        // let related = Products.findAll({
        //     where: {
        //         categoryId: product.categoryId
        //     }
        // })
        
        Promise.all ([sizes, colors,product])


       .then(([sizes, colors, product]) => {res.render('product', {product, sizes, colors})})
    //    //.catch (function (e) {})
    }
}