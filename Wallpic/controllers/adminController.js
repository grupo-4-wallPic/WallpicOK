const db = require('../database/models');
const {Categories, Sizes, Colors, Products} = require('../database/models');
const Category = require('../database/models/Category');
const Op = db.Sequelize.Op



module.exports = {

    main: (req, res) => {

       let categories = Categories.findAll()
       let sizes = Sizes.findAll()
       let colors = Colors.findAll()

       Promise.all( [categories, sizes, colors] )
            .then(([categories, sizes, colors]) => {

            return res.render('adminForms', { categories, sizes, colors })

        })
   
    },

    productList: (req, res) => {
        Products.findAll()
        .then((products) => {
            res.render('adminList', {products}) 
        })
        
    },

    newProduct: (req, res, next) => {
        Products.create({
            name       : req.body.name,
            description: req.body.description,
            images     : req.files[0].filename,
            categoryId : req.body.category
        })
        .then(() => {
            res.redirect('admin')  
          })
    },

    productDetail: (req, res) => {

        let categories= Categories.findAll()
        let product = Products.findByPk(req.params.id)
        
        Promise.all( [categories, product] )
        .then(([categories, product]) => {

        return res.render('detailProduct', { categories, product })
    })

    },

    newColor: (req, res) => {
       
        Colors.create({
            color: req.body.color
        })
        .then(() => {
          res.redirect('admin')  
        })
         
       
    },

    updateColor: (req, res) => {

        Colors.update({
            color: req.body.color
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.redirect('admin')
        })

    },

    deleteColor: (req, res) => {

        Colors.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.redirect('admin')
        })

    },

    newSize: (req, res) => {
        Sizes.create({
            size : req.body.size,
            price: req.body.price
        })
        .then(() => {
            res.redirect('admin')  
          }) 
    },

    updateSize: (req, res) => {

        Sizes.update({
            size: req.body.size,
            price: req.body.price
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.redirect('admin')
        })

    },

    deleteSize: (req, res) => {

        Sizes.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.redirect('admin')
        })

    },
    
    newCategory: (req, res) => {
        Categories.create({
            name: req.body.name
        })
        .then(() => {
            res.redirect('admin')  
          }) 
    },

    updateCategory: (req, res) => {

        Categories.update({
            name: req.body.category
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.redirect('admin')
        })

    },

    deleteCategory: (req, res) => {
        // Agregar validación de que no existen productos con esta categoría
        Categories.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.redirect('admin')
        })

    },

}