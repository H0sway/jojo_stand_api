// Import dependencies
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config()

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('build'));

// Routes

app.use('/api/stands', require('/routes/stand-routes'));
app.use('/*', (req,res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// Set up the port

app.listen(PORT, () => {
  console.log(`Live on port ${PORT}. ORA!`);
});
