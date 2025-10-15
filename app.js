const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const data = require('./data.js');

app.get('/', (req, res) => {
  res.render('index', { banners: data.banners, brands: data.brands });
});

app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));
