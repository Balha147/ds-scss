require('dotenv').config()
var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('src'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`DS SCSS HTML is running on port ${port}`);
});
