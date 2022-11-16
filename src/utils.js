const URL = require("url").URL;

function validUrl(url) {
    try {
        new URL(url);
        return true;
    } catch (err) {
        return false;
    }
}

module.exports = { validUrl };