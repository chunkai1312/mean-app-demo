'use strict';

const expect = require('chai').expect;
const request = require('supertest-as-promised');
const app = require('../app');

describe('Article API:', () => {
  let article;

  describe('GET /api/articles', () => {
    it('should respond with JSON array', () => {
      return request(app)
        .get('/api/articles')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(res => expect(res.body).to.be.instanceOf(Array));
    });
  });

  describe('POST /api/articles', () => {
    it('should respond with the newly created article', () => {
      return request(app)
        .post('/api/articles')
        .send({
          title: 'Title',
          author: 'me',
          body: 'new article',
        })
        .expect('Content-Type', /json/)
        .expect(201)
        .then(res => {
          article = res.body;
          expect(article).to.have.property('_id');
          expect(article).to.have.property('title').that.equal('Title');
          expect(article).to.have.property('author').that.equal('me');
          expect(article).to.have.property('body').that.equal('new article');
          expect(article).to.have.property('datetime');
        });
    });
  });

  describe('GET /api/articles/:id', () => {
    it('should respond with the requested article', () => {
      return request(app)
        .get(`/api/articles/${article._id}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .then(res => {
          expect(res.body._id).to.equal(article._id);
          expect(res.body.title).to.equal(article.title);
          expect(res.body.author).to.equal(article.author);
          expect(res.body.body).to.equal(article.body);
          expect(res.body.datetime).to.equal(article.datetime);
        });
    });
  });

  describe('PUT /api/articles/:id', () => {
    it('should respond with the updated article', () => {
      return request(app)
        .put(`/api/articles/${article._id}`)
        .send({
          author: 'blah',
        })
        .expect('Content-Type', /json/)
        .expect(200)
        .then(res => {
          expect(res.body._id).to.equal(article._id);
          expect(res.body.title).to.equal(article.title);
          expect(res.body.author).to.equal('blah');
          expect(res.body.body).to.equal(article.body);
          expect(res.body.datetime).to.equal(article.datetime);
        });
    });
  });

  describe('DELETE /api/articles/:id', () => {
    it('should respond with 204 on successful removal', () => {
      return request(app)
        .delete(`/api/articles/${article._id}`)
        .expect(204);
    });

    it('should respond with 404 when article does not exist', () => {
      return request(app)
        .delete(`/api/articles/${article._id}`)
        .expect(404);
    });
  });
});
