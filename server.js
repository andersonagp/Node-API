const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

require('./controller/userController')(app);


app.listen(3000,() => {
    console.log('Server running on port 3000!');
})