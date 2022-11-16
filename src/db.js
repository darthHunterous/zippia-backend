const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/web-app');

const urlSchema = new mongoose.Schema({
    longURL: { type:String, maxLength: 2048 },
    shortURL: { type: String, maxLength: 11 },
    createdAt: { type: Date, expires: 60 * 60 * 24, default: Date.now }
}, { collection: 'urls' }
);
 
module.exports = { Mongoose: mongoose, UrlSchema: urlSchema }