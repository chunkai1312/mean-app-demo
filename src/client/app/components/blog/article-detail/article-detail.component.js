import './article-detail.css';

const articleTemplate = `
  <article>
    <h4 class="text-center"><strong>{{ $ctrl.article.title }}</strong></h4>
    <p class="text-muted"><time>{{ $ctrl.article.datetime | date: 'mediumDate' }}</time></p>
    <p class="article-body">{{ $ctrl.article.body }}</p>
    <p class="text-right text-muted"><small>Posted by {{ $ctrl.article.author }} at {{ $ctrl.article.createdAt | date: 'medium' }}</small></p>
    <p class="text-right text-muted" ng-if="$ctrl.article.updatedAt > $ctrl.article.createdAt"><small>Modified at {{ $ctrl.article.updatedAt | date: 'medium' }}</small></p>
  </article>
  <div class="row">
    <div class="col-md-6">
      <button class="btn btn-default btn-sm" ng-link="['ArticleList']">Back</button>
    </div>
    <div class="col-md-6 text-right">
      <button class="btn btn-info btn-sm" ng-link="['ArticleEdit', { id: $ctrl.article._id }]">Edit</button>
      <button class="btn btn-danger btn-sm" ng-click="$ctrl.delete()">Delete</button>
    </div>
  </div>
`;

class ArticleController {
  /* @ngInject */
  constructor(Article) {
    this.Article = Article;
  }

  $routerOnActivate(next) {
    const id = next.params.id;
    this.Article.getById(id).then(res => {
      this.article = res.data;
    });
  }

  delete() {
    this.Article.delete(this.article._id).then(() => {
      this.$router.navigate(['ArticleList']);
    });
  }
}

export default {
  bindings: { $router: '<' },
  template: articleTemplate,
  controller: ArticleController,
};
