const express = require('express');
const router = express.Router();
const controller = require('../controllers/urlController');

router.get('/', controller.get);
router.get('/:shortURL', controller.getOne);
router.post('/', controller.post);
router.delete('/:shortURL', controller.delete);

module.exports = router;