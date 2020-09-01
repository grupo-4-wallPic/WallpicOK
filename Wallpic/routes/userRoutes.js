const express = require ('express');
const router = express.Router ();
const userController = require('../controllers/userController')


router.get('/', userController.index)
router.get('/compras', userController.compras)
router.get('/favoritos', userController.favoritos)
router.get('/datos', userController.datos)
router.post('/addToCart', userController.addToCart)

module.exports = router;