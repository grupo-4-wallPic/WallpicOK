const db = require('../database/models');
const Op = db.Sequelize.Op



module.exports = {

    main: (req, res) => {

       let categories = db.Categories.findAll()
       let sizes = db.Sizes.findAll()
       let colors = db.Colors.findAll()

       Promise.all( [categories, sizes, colors] )
            .then(([categories, sizes, colors]) => {

            return res.render('adminForms', { categories, sizes, colors })

        })
   
    },

    productList: (req, res) => {
        db.Products.findAll()
        .then((products) => {
            res.render('adminList', {products}) 
        })
        
    },

    newProduct: (req, res, next) => {
        db.Products.create({
            name       : req.body.name,
            description: req.body.description,
            images     : req.files[0].filename,
            categoryId : req.body.category
        })
        .then(() => {
            res.redirect('/admin')  
          })
    },

    newColor: (req, res) => {
       
        db.Colors.create({
            color: req.body.color
        })
        .then(() => {
          res.redirect('/admin')  
        })
         
       
    },

    newSize: (req, res) => {
        db.Sizes.create({
            size : req.body.size,
            price: req.body.price
        })
        .then(() => {
            res.redirect('/admin')  
          }) 
    },
    
    newCategory: (req, res) => {
        db.Categories.create({
            name: req.body.name
        })
        .then(() => {
            res.redirect('/admin')  
          }) 
    },

}