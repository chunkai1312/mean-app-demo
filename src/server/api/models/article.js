'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: { type: String },
  author: { type: String },
  body: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Article', ArticleSchema);
