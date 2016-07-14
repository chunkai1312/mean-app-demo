import angular from 'angular';
import editComponent from './article-edit.component';

export default angular.module('app.components.blog.edit', [])
  .component('articleEdit', editComponent);
