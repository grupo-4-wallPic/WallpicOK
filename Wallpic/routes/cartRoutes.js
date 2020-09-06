const express = require('express')
const routes = express.Router()

const cartController = require('../controllers/cartController')

routes.get('/', cartController.cart)
routes.post('/delete', cartController.deleteFromCart)
routes.post('/shop', cartController.shop)


module.exports = routes