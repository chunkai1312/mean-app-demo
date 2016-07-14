'use strict';

const wrap = require('co-express');
const error = require('http-errors');
const Article = require('../models/article');

module.exports = {

  /**
   * Responds to requests to GET /api/articles
   */
  index: wrap(function* (req, res) {
    const articles = yield Article.find();
    res.status(200).json(articles);
  }),

  /**
   * Responds to requests to POST /api/articles
   */
  create: wrap(function* (req, res) {
    const article = yield Article.create(req.body);
    res.status(201).json(article);
  }),

  /**
   * Responds to requests to GET /api/articles/:id
   */
  show: wrap(function* (req, res) {
    const article = yield Article.findById(req.params.id);
    if (!article) throw error(404);
    res.status(200).json(article);
  }),

  /**
   * Responds to requests to PUT /api/articles/:id
   */
  update: wrap(function* (req, res) {
    const article = yield Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!article) throw error(404);
    res.status(200).json(article);
  }),

  /**
   * Responds to requests to DELETE /api/articles/:id
   */
  destroy: wrap(function* (req, res) {
    const article = yield Article.findByIdAndRemove(req.params.id);
    if (!article) throw error(404);
    res.status(204).end();
  }),

};
