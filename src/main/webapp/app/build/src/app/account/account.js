angular.module('ngBoilerplate.account', [
  'ui.router',
  'ngResource',
  'base64'
]).config([
  '$stateProvider',
  function ($stateProvider) {
    $stateProvider.state('login', {
      url: '/login',
      views: {
        'main': {
          templateUrl: 'account/login.tpl.html',
          controller: 'LoginCtrl'
        }
      },
      data: { pageTitle: 'Login' }
    }).state('accountSearch', {
      url: '/accounts/search',
      views: {
        'main': {
          templateUrl: 'account/search.tpl.html',
          controller: 'BlogSearchCtrl'
        }
      },
      data: { pageTitle: 'Search data' },
      resolve: {
        blogs: function (blogService) {
          return blogService.getAllBlogs();
        }
      }
    });
  }
]).factory('sessionService', [
  '$http',
  '$base64',
  function ($http, $base64) {
    var session = {};
    session.login = function (data) {
      return $http.post('/basic-web-app/login', 'username=' + data.name + '&password=' + data.password, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(function (data) {
        alert('in totally inside');
        localStorage.setItem('session', {});
      }, function (data) {
        alert('error logging in');
      });
    };
    session.logout = function () {
      localStorage.removeItem('session');
    };
    session.isLoggedIn = function () {
      return localStorage.getItem('session') !== null;
    };
    return session;
  }
]).factory('accountService', [
  '$resource',
  function ($resource) {
    var service = {};
    service.register = function (account, success, failure) {
      var Account = $resource('/basic-web-app/rest/accounts');
      Account.save({}, account, success, failure);
    };
    service.userExists = function (account, success, failure) {
      var Account = $resource('/basic-web-app/rest/accounts');
      var data = Account.get({
          name: account.name,
          password: account.password
        }, function () {
          var accounts = data.accounts;
          if (accounts.length !== 0) {
            success(account);
          } else {
            failure();
          }
        }, failure);
    };
    return service;
  }
]).controller('LoginCtrl', [
  '$scope',
  'sessionService',
  'accountService',
  '$state',
  function ($scope, sessionService, accountService, $state) {
    $scope.login = function () {
      accountService.userExists($scope.account, function (account) {
        sessionService.login($scope.account).then(function () {
          $state.go('home');
        });
      }, function () {
        alert('Error logging in prudveer');
      });
    };
  }
]);
;