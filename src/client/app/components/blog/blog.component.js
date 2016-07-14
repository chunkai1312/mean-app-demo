import './blog.css';

const blogTemplate = `
  <div class="container">
    <div class="header">
      <h3 class="text-muted"><strong>My Blog</strong></h3>
    </div>
    <ng-outlet></ng-outlet>
    <div class="footer">
      <p class="text-center">Developed by Chun-Kai Wang.</p>
    </div>
  </div>
`;

class BlogController { }

export default {
  bindings: { $router: '<' },
  template: blogTemplate,
  controller: BlogController,
  $routeConfig: [
    { path: '/', name: 'ArticleList', component: 'articleList', useAsDefault: true },
    { path: '/article/:id', name: 'ArticleDetail', component: 'articleDetail' },
    { path: '/article/:id/edit', name: 'ArticleEdit', component: 'articleEdit' },
    { path: '/post', name: 'Post', component: 'post' },
  ],
};
