const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path')

const adminController = require('../controllers/adminController');


let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // console.log('hola')
      cb(null, 'public/images/products')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  let upload = multer({ storage: storage })


router.get('/', adminController.main);

router.post('/new', upload.any(), adminController.newProduct)
router.get('/productlist', adminController.productList)

router.post('/color', adminController.newColor)
router.put('/color/update/:id', adminController.updateColor)
router.delete('/color/delete/:id', adminController.deleteColor)

router.post('/size', adminController.newSize)
router.put('/size/update/:id', adminController.updateSize)
router.delete('/size/delete/:id', adminController.deleteSize)

router.post('/category', adminController.newCategory)
router.put('/category/update/:id', adminController.updateCategory)
router.delete('/category/delete/:id', adminController.deleteCategory)


module.exports = router;