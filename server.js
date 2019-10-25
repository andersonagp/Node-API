const PORT = process.env.PORT || 3000;

const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

require('./controller/userController')(app);

app.get("/", function(req, res) {
    //when we get an http get request to the root/homepage
    res.send("Hello World");
  });
    
app.listen(PORT,() => {
    console.log(`Listening on Port ${PORT}`);
})