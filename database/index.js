const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://');
mongoose.Promise = global.Promise;

module.exports = mongoose;
