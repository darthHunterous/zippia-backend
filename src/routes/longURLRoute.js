const express = require('express');
const router = express.Router();
const controller = require('../controllers/longURLController');

router.post('/', controller.post);
router.put('/:url', controller.put);
router.delete('/:url', controller.delete);

module.exports = router;