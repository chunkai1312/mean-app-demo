import angular from 'angular';
import ArticleService from './article.service';

export default angular.module('app.common.services', [])
  .service('Article', ArticleService);
