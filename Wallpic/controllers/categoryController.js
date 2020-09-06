const fs = require ('fs');
const leerJson = fs.readFileSync('productsWallpicDataBase.json', {encoding: 'utf-8'})
const products = JSON.parse (leerJson);
const {Categories, Products} = require ('../database/models')

module.exports = {
    index: (req, res) => {
        Categories.findOne({
            where: {
                name: req.params.category
            }
        })
        .then(category => {
            Products.findAll({
                where: {
                    categoryId: category.id
                }
            })
        })
        .then(product => {
           return res.render('category', {product})
        })

        // let animales = products.filter (function (product) {
        //     return product.category == req.params.category
        // })

        // return res.render('category', {animales})
    }


    
}