import angular from 'angular';
import postComponent from './post.component';

export default angular.module('app.components.blog.post', [])
  .component('post', postComponent);
