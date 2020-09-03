const {Carts} = require = ('../database/models')

module.exports = {

    cart: (req, res) => {
        Carts.findAll({
            where: {
                state: 0,
                user_id: req.session.user.id
            }
        })
        .then(carts => {
            return res.render ('/shoppingCart', {carts});
        })
    },

    deleteFromCart: (req, res) => {
        Carts.destroy ({
            where: {
                id: req.body.cartId
            }
        })
    }

}