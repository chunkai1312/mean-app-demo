import angular from 'angular';
import articleDetailComponent from './article-detail.component';

export default angular.module('app.components.blog.article', [])
  .component('articleDetail', articleDetailComponent);
