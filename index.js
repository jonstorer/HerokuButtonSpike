const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = process.env.PORT || 3030;

app.use(morgan('dev'));
app.get('*', function (req, res, next) {
  res.json(process.env);
});

app.listen(PORT, function (err) {
  console.log('listneing on port', PORT);
})
