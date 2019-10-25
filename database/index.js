const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://anderson:102030@mycluster-h7epj.mongodb.net/test?retryWrites=true&w=majority');
mongoose.Promise = global.Promise;

module.exports = mongoose;