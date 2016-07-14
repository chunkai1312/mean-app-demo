import './post.css';

const postTemplate = `
  <form name="postForm" ng-submit="$ctrl.post()" novalidate>
    <div class="form-group">
      <label for="title">Title</label>
      <input type="text" class="form-control" id="title" placeholder="Title" ng-model="$ctrl.article.title" required>
    </div>
    <div class="form-group">
      <label for="author">Author</label>
      <input type="text" class="form-control" id="author" placeholder="Author" ng-model="$ctrl.article.author" required>
    </div>
    <div class="form-group">
      <label for="author">Body</label>
      <textarea class="form-control" rows="5" placeholder="Write something" ng-model="$ctrl.article.body" required></textarea>
    </div>
    <div class="form-group text-center">
      <button type="submit" class="btn btn-primary" ng-disabled="postForm.$invalid">Post</button>
      <button class="btn btn-default" ng-link="['ArticleList']">Cancel</button>
    </div>
  </form>
`;

class PostController {
  /* @ngInject */
  constructor(Article) {
    this.Article = Article;
  }

  onInit() {
    this.article = {};
  }

  post() {
    this.Article.create(this.article)
      .then(() => {
        this.$router.navigate(['ArticleList']);
      });
  }
}

export default {
  bindings: { $router: '<' },
  template: postTemplate,
  controller: PostController,
};
