const { nanoid } = require("nanoid");
const db = require("../db");
const URLs = db.Mongoose.model('urls', db.UrlSchema, 'urls');
const { validUrl } = require("../utils.js");

exports.get = async (req, res, next) => {
    try {
        let urls = await URLs.find({}).limit(20);
        
        res.send(urls);
    }
    catch (err) {
        console.log(err);

        res.status(500).send('Internal server error');  
    }
};

exports.getOne = async (req, res, next) => {
    try {
        let shortURL = req.params.shortURL;

        let url = await URLs.findOne({ shortURL });
        
        if (url) {
            res.status(200).send(url.longURL);
        }
        else {
            res.status(404).send('Short URL not found');
        }
    }
    catch (err) {
        console.log(err);

        res.status(500).send('Internal server error');  
    }
}

exports.post = async (req, res, next) => {
    try {
        const longURL = req.body.url;
        const shortURL = nanoid(11);

        if (!validUrl(longURL)) {
            res.status(400).send('The URL is not valid');

            return;
        }
        
        let url = await URLs.findOne({ longURL });
        
        if (url) {
            res.status(403).send('This URL is already shortened');
        }
        else {
            let shortenedURL = new URLs({ longURL, shortURL });
    
            await shortenedURL.save();
            res.status(201).send(shortURL);
        }
    } 
    catch (err) {
        console.log(err);

        res.status(500).send('Internal server error');
    }
};

exports.delete = async (req, res, next) => {
    try {
        let shortURL = req.params.shortURL;

        let url = await URLs.findOneAndRemove({ shortURL });

        if (url) {
            res.status(200).send("Shortened URL deleted successfully");
        }
        else {
            res.status(404).send("Shortened URL not found");
        }
    }
    catch (err) {
        console.log(err);

        res.status(500).send('Internal server error');
    }
};