///////////// Require's ///////////////////
const express = require('express');
const path = require('path');
const data = require('./data.js');
///////////// express() ///////////////////
const app = express();
///////////// Middleware //////////////////
app.use(express.static(path.join(__dirname, 'public')));
///////////// Template engine /////////////
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
////////////////////////////////////////
app.get('/', (req, res) => {
  res.render('home', { banners: data.banners, brands: data.brands });
});
app.get('/brands', (req, res) => {
    res.render('brands', { brands: data.brandsimg });
});
///// Listen URL + console log ////////
app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));
////////////////////////////////////////