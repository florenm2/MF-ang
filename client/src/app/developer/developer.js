angular.module('developer', ['ngRoute', 'security.authorization']);
angular.module('developer').config(['$routeProvider', 'securityAuthorizationProvider', function($routeProvider, securityAuthorizationProvider){
  $routeProvider
    .when('/developer', {
      templateUrl: 'developer/developer.tpl.html',
      controller: 'DevCtrl',
      title: 'Developer Area',
      resolve: {
        authenticatedUser: securityAuthorizationProvider.requireDeveloper

        // viewCount: ['$q', '$location', '$log', 'securityAuthorization', 'adminResource', function($q, $location, $log, securityAuthorization, adminResource){
        //   //get app stats only for admin-user, otherwise redirect to /account
        //   var redirectUrl;
        //   var promise = securityAuthorization.requireAdminUser()
        //     .then(function(){
        //       //handles url with query(search) parameter
        //       return adminResource.getRecentViewCount();
        //     }, function(reason){
        //       //rejected either user is un-authorized or un-authenticated
        //       redirectUrl = reason === 'unauthorized-client'? '/account': '/login';
        //       return $q.reject();
        //     })
        //     .catch(function(){
        //       redirectUrl = redirectUrl || '/account';
        //       $location.search({});
        //       $location.path(redirectUrl);
        //       return $q.reject();
        //     });
        //   return promise;
        // }]
      }
    });
}]);
angular.module('developer').controller('DevCtrl', [ '$scope',
  function($scope){

    
  }]);
