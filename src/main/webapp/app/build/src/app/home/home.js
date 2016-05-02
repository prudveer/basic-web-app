angular.module('ngBoilerplate.home', [
  'ui.router',
  'plusOne',
  'ngBoilerplate.account'
]).config([
  '$stateProvider',
  function config($stateProvider) {
    $stateProvider.state('home', {
      url: '/home',
      views: {
        'main': {
          controller: 'HomeCtrl',
          templateUrl: 'home/home.tpl.html'
        }
      },
      data: { pageTitle: 'Home' }
    });
  }
]).controller('HomeCtrl', [
  '$scope',
  '$state',
  'accountService',
  'sessionService',
  function HomeController($scope, $state, accountService, sessionService) {
    $scope.isLoggedIn = sessionService.isLoggedIn;
    $scope.logout = sessionService.logout;
  }
]);