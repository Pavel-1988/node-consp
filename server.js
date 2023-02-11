const express = require("express");
const app = express();
const PORT = 8081;

app.get('/home', (req, res) => {
  res.send('get request');
});

app.post('/home', (req, res) => {
  res.send('post request');
});

app.delete('/home', (req, res) => {
  res.send('gelete request');
});

app.use((req, res) => {
  res.send('midlwere request');
});


app.listen(PORT, (err) => {
  if (err){
    console.error("Error at server ", err);
  }
  console.log(`Server work ${PORT}`)
});
