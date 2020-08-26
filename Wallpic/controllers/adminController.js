const db = require('../database/models');
const {Categories, Sizes, Colors, Products} = require('../database/models');
const Op = db.Sequelize.Op
let fs = require('fs')
let path = require('path')

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
        Products.findAll( {
            include: [{association: "category"}],
            order: [
                ['categoryId']
            ]
        } )
        .then((products) => {
           return res.render('adminList', {products}) 
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
           return res.redirect('/admin')  
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

    productUpdate: (req, res) => {
        
        Products.update({
            name: req.body.name,
            description: req.body.description,
            categoryId : req.body.category
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(() => {
           return res.redirect('/admin')
        })

    },

    productDelete: (req, res) => {

        let pathPic = path.join(__dirname, '..', 'public', 'images', 'products')

        Products.findByPk(req.params.id)
        .then( (product) => {

            fs.unlinkSync(`${pathPic}/${product.images}`, (err) => {
            if(err) throw err
        })

        } )
        

        Products.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
           return res.redirect('/admin')
        })


    },

    newColor: (req, res) => {
       
        Colors.create({
            color: req.body.color
        })
        .then(() => {
         return res.redirect('/admin')  
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
           return res.redirect('/admin')
        })

    },

    deleteColor: (req, res) => {

        Colors.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
           return res.redirect('/admin')
        })

    },

    newSize: (req, res) => {
        Sizes.create({
            size : req.body.size,
            price: req.body.price
        })
        .then(() => {
           return res.redirect('/admin')  
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
          return res.redirect('/admin')
        })

    },

    deleteSize: (req, res) => {

        Sizes.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
           return res.redirect('/admin')
        })

    },
    
    newCategory: (req, res) => {
        Categories.create({
            name: req.body.name
        })
        .then(() => {
           return res.redirect('/admin')  
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
           return res.redirect('/admin')
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
           return res.redirect('/admin')
        })

    },

}