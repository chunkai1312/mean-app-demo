import angular from 'angular';
import ngComponentRouter from 'ngcomponentrouter';
import Common from './common/common';
import Components from './components/components';
import 'bootstrap/dist/css/bootstrap.css';

angular.module('app', [
  ngComponentRouter,
  Common.name,
  Components.name,
])

.config(($locationProvider) => {
  'ngInject';

  $locationProvider.hashPrefix('!');
  if (process.env.NODE_ENV === 'production') $locationProvider.html5Mode(true);
})

.value('$routerRootComponent', 'app')

.component('app', {
  template: '<ng-outlet></ng-outlet>',
  $routeConfig: [
    { path: '/...', name: 'Blog', component: 'blog', useAsDefault: true },
  ],
});
