const express = require("express");
const app = express();
const morgan = require('morgan')
const {router} = require('./booksRouter')
const PORT = 8081;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(morgan('tiny'));
app.use('/api',router);

app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}, ${new Date().toISOString()}`)
  next();
});

app.post('/home', (req, res,) => {
  if (!req.body.goit) {
    res.status(400).json({status: 'goit parameter is required'})
  }
  res.json({javascript: 'object', body: req.body});
});


app.listen(PORT, (err) => {
  if (err){
    console.error("Error at server ", err);
  }
  console.log(`Server work ${PORT}`)
});

// погода АПИ ключ - ea41bc3d393b41638cdd827b88acf3ef