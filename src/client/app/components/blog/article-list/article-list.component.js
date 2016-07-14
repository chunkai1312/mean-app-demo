import './article-list.css';

const articleListTemplate = `
  <p><a class="btn btn-primary btn-sm" ng-link="['Post']">Post</a></p>
  <table class="table">
    <thead>
      <tr>
        <th>Date</th>
        <th>Title</th>
        <th>Author</th>
      </tr>
    </thead>
    <tbody>
      <tr ng-repeat="article in $ctrl.articles | orderBy:'-datetime'">
        <td nowrap>{{ article.createdAt | date : 'yyyy-MM-dd' }}</td>
        <td><a ng-link="['ArticleDetail', { id: article._id }]">{{ article.title }}</a></td>
        <td>{{ article.author }}</td>
      </tr>
    </tbody>
  </table>
`;

class ArticleListController {
  /* @ngInject */
  constructor(Article) {
    this.Article = Article;
  }

  $onInit() {
    this.Article.get().then(res => {
      this.articles = res.data;
    });
  }
}

export default {
  bindings: { $router: '<' },
  template: articleListTemplate,
  controller: ArticleListController,
};
