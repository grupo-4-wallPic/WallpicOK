
const express = require('express');
const path = require('path');
const methodOverride = require('method-override')
// const session = require ('express-session');

const pruebasRoutes = require('./routes/pruebasRoutes')
const adminRoutes = require('./routes/adminRoutes')
const homeRoutes = require('./routes/homeRoutes');
const categoryRoutes = require ('./routes/categoryRoutes');
const productRoutes = require ('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const userRoutes = require ('./routes/userRoutes')
const session = require ('express-session');
const cookieParser = require ('cookie-parser')
const log = require ('../Wallpic/middlewares/log')

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));  
app.use( methodOverride('_method'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({secret:"Wallpic's Secrets",
resave: false,
saveUninitialized: true}));
app.use (cookieParser());
app.use (log);

app.listen(3030, () => console.log('running on 3030'));

app.use('/', homeRoutes);
app.use('/category', categoryRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes)
app.use('/admin', adminRoutes)
app.use('/pruebas', pruebasRoutes)
app.use('/user', userRoutes)



// module.exports = app;