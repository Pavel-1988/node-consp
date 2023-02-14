const express = require('express');
const app = express();
const myRouter= require('./my-router.');

// app.use(express.urlencoded({ extended: false }));
// app.use('/my-router', myRouter);

// app.all('/anything', (req, res, next) => {
//   console.log('Anything method.');
//   next(); // передаем управление дальше
// });

app
  .route('/blog')
  .get((req, res) => {
    res.send('Get a list of blog');
  })
  .post((req, res) => {
    res.send('Add a record to blog');
  })
  .put((req, res) => {
    res.send('Update blog');
  });

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});