const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));
app.get('*', function (req, res, next) {
  res.json(process.env);
});

app.listen(process.env.PORT, function (err) {
  console.log('listneing on port', process.env.PORT);
})
