import angular from 'angular';
import articleListComponent from './article-list.component';

export default angular.module('app.components.blog.articleList', [])
  .component('articleList', articleListComponent);
