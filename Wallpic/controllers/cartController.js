const {Carts, Purchases} = require('../database/models')

module.exports = {

    cart: (req, res) => {
        Carts.findAll({
            where: {
                state: 0,
                user_id: req.session.user.id
            }
        })
        .then(carts => {
            return res.render('shoppingCart', {carts});
        })
    },

    deleteFromCart: (req, res) => {
        Carts.destroy ({
            where: {
                id: req.body.cartId
            }
        })
        .then(()=>{ res.redirect('/cart')})
    },

    shop: (req, res) => {
        let totalPrice = 0;
        
        Carts.findAll({
            where: {
                state: 0,
                user_id: req.session.user.id
            }
        })
        .then(carts => {
            carts.forEach(cart => {
                totalPrice += cart.price
            });
            return Purchases.findOne({
                order: [['createdAt', 'DESC']]
            })
        })
        .then(purchase => {
            return Purchases.create({
                order_number: purchase ? purchase.order_number + 1 : 1,
                total: totalPrice,
                user_id: req.session.user.id
            })
        })
        .then(purchase => {
            return Carts.update({
                state: 1,
                purchase_id: purchase.id
            },{
                where: {
                    user_id: req.session.user.id,
                    state: 0
                }
            })
        })
        .then(() => {
            res.redirect('/')
        })
    }

}