import './article-edit.css';

const editTemplate = `
  <form name="editForm" ng-submit="$ctrl.save()" novalidate>
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
      <button type="submit" class="btn btn-primary" ng-disabled="editForm.$invalid">Save</button>
      <button class="btn btn-default" ng-link="['ArticleList']">Cancel</button>
    </div>
  </form>
`;

class EditController {
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

  save() {
    this.Article.update({
      _id: this.article._id,
      title: this.article.title,
      author: this.article.author,
      body: this.article.body,
    }).then(() => {
      this.$router.navigate(['ArticleDetail', { id: this.article._id }]);
    });
  }
}

export default {
  bindings: { $router: '<' },
  template: editTemplate,
  controller: EditController,
};
