'use strict'; /* eslint new-cap: 0 */

const express = require('express');
const router = express.Router();
const article = require('./controllers/article');

router.get('/articles', article.index);
router.post('/articles', article.create);
router.get('/articles/:id', article.show);
router.put('/articles/:id', article.update);
router.delete('/articles/:id', article.destroy);

module.exports = router;
