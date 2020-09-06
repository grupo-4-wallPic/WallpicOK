const fs = require ('fs');
const path = require ('path');
const {
    Carts,
    Categories,
    Colors,
    Products,
    Purchases,
    Sizes,
    Users
} = require ('../database/models')

const userController = {

    index: (req, res) => {
        return res.render ('user')
    },

    compras: (req, res) => {
        Purchases.findAll({
            where:{
                user_id: req.session.user.id
            },
            include: {
                all: true,
                nested: true,
                paranoid: false
            },
            order:[['createdAt', 'DESC']]
        })
        .then((purchase)=>{
            res.render ('compras', {purchase})
        })
    },

    favoritos: (req, res) => {
        return res.render ('favoritos')
    },

    datos: (req, res) => {
        return res.render ('datos')
    },

    addToCart: (req, res) => {

                // req.session.user.cart += 1

                Carts.create({
                user_id: req.session.user.id,
                title: req.body.checkName,
                image: req.body.checkImage,
                color: req.body.checkColor,
                size: req.body.checkSize,
                price: req.body.checkPrice,
                state: 0,
                purchaseId: null,
                quantity: req.body.checkQuantity,
                })
            // res.send ({product})
       
        .then(() => res.redirect ('/cart'))

    },

}
    module.exports = userController;