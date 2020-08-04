const fs = require ('fs');
const path = require ('path');

const homecontroller = {

    main: (req, res) => {

    const productsFilePath = path.join(__dirname, '../productsWallpicDataBase.json');
    const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

    let mostsale = products.filter(function(product){
        return product.category == 'Mostsale'
    
    });
        return res.render('index', {mostsale})
    },
    nosotros: (req, res) =>{
        res.render ('nosotros')
    },
    contacto: (req, res) =>{
        res.render ('contacto')
    },
    faq: (req, res) =>{
        res.render ('FAQ')
    },
    GrandesClientes: (req, res) =>{
        res.render ('GrandesClientes')
    },
    inicio: (req, res) =>{
        res.render ('/')
    },
    mostsale: (req, res) =>{
        res.render ('mostsale')
    },
};
    module.exports = homecontroller;