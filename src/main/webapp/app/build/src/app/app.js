angular.module('ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'ngBoilerplate.about',
  'ngBoilerplate.account',
  'ngBoilerplate.blog',
  'ui.router',
  'hateoas'
]).config([
  '$stateProvider',
  '$urlRouterProvider',
  'HateoasInterceptorProvider',
  function myAppConfig($stateProvider, $urlRouterProvider, HateoasInterceptorProvider) {
    $urlRouterProvider.otherwise('/home');
    HateoasInterceptorProvider.transformAllResponses();
  }
]).run(function run() {
}).controller('AppCtrl', [
  '$scope',
  '$location',
  function AppCtrl($scope, $location) {
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
      if (angular.isDefined(toState.data.pageTitle)) {
        $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate';
      }
    });
  }
]);
;