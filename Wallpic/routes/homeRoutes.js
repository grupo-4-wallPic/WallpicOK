const express = require ('express');
const router = express.Router ();
const homeController = require('../controllers/homeController')
const loginController = require('../controllers/loginController')
const registerController = require ('../controllers/registerController')
const validator = require('../middlewares/validator')

router.get('/', homeController.main);
router.get ('/login', loginController.index);
router.post('/login', validator.login, loginController.login);
router.get ('/register', registerController.index)
router.post('/register', validator.registerValidator, registerController.registro);
router.post('/logout', loginController.logout);
router.get ('/nosotras', homeController.nosotras);
router.get ('/mayorista', homeController.mayorista);
router.get ('/contacto', homeController.contacto);
router.get ('/FAQ', homeController.faq);
router.get ('/inicio', homeController.inicio);
router.get('/mostsale', homeController.mostsale);
// router.get ('/mostSale', homeController.mostSale);

module.exports = router;