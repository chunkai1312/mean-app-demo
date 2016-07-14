import angular from 'angular';
import services from './services/services';

export default angular.module('app.common', [
  services.name,
]);
