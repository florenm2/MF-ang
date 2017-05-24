angular.module('admin.developers', ['ngRoute', 'security.authorization', 'services.adminResource', 'angular.morris']);
angular.module('admin.developers').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/admin/developers', {
      templateUrl: 'admin/developers/developers.tpl.html',
      controller: 'DevCtrl',
      title: 'Developer Area',
      resolve: {
        stats: ['$q', '$location', 'securityAuthorization', 'adminResource', function($q, $location, securityAuthorization, adminResource){
          //get app stats only for admin-user, otherwise redirect to /account
          var redirectUrl;
          var promise = securityAuthorization.requireAdminUser()
            .then(adminResource.getStats, function(reason){
              //rejected either user is un-authorized or un-authenticated
              redirectUrl = reason === 'unauthorized-client'? '/account': '/login';
              return $q.reject();
            })
            .catch(function(){
              redirectUrl = redirectUrl || '/account';
              $location.path(redirectUrl);
              return $q.reject();
            });
          return promise;
        }]
      }
  });
}]);
angular.module('admin.developers').controller('DevCtrl', ['$scope', '$log', 'stats',
  function($scope, $log, stats){
    $scope.user = {
      users: stats['User'],
      accounts: stats['Account'],
      admins: stats['Admin'],
      groups: stats['AdminGroup']
    };
    $scope.pivoted = {
      categories: stats['Category'],
      statuses: stats['Status']
    };
  }]);