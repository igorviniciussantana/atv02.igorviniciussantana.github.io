const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);



app.get('/', (req, res) =>{
  res.render('index.ejs')
});

app.get('/noticias', (req, res) =>{
  res.render('noticias')
});

app.get('/noticias/noticia1', (req, res) =>{
  res.render('noticias/noticia1')
});

app.listen(3000, () => {
  console.log('O servidor esta okay')
});

