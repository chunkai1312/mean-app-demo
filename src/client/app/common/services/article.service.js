class Article {
  /* @ngInject */
  constructor($http) {
    this.$http = $http;
  }

  get() {
    return this.$http.get('/api/articles');
  }

  getById(id) {
    return this.$http.get(`/api/articles/${id}`);
  }

  create(article) {
    return this.$http.post('/api/articles', article);
  }

  update(article) {
    return this.$http.put(`/api/articles/${article._id}`, article);
  }

  delete(id) {
    return this.$http.delete(`/api/articles/${id}`);
  }
}

export default Article;
