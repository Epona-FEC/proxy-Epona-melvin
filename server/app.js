const express = require('express');
const path = require('path');

const app = express();
const PORT = 4000;

app.set('views', __dirname + '/../public/views');
app.set('view engine', 'pug')
app.use(express.static('public'));
app.get('/:productId', (req, res) => {
  res.render('index', { productId: req.params.productId});
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
