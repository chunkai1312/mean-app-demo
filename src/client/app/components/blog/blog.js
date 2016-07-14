import angular from 'angular';
import blogComponent from './blog.component';
import ArticleList from './article-list/article-list';
import ArticleDetail from './article-detail/article-detail';
import ArticleEdit from './article-edit/article-edit';
import Post from './post/post';

export default angular.module('app.components.blog', [
  ArticleList.name,
  ArticleDetail.name,
  ArticleEdit.name,
  Post.name,
])
.component('blog', blogComponent);
