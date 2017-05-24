angular.module('admin.purchase-history.single', ['ngRoute', 'security.authorization', 'services.utility', 'services.adminResource', 'directives.serverError', 'ui.bootstrap']);
angular.module('admin.purchase-history.single').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/admin/purchase-history/:id', {
      templateUrl: 'admin/purchase-history/admin-purchase-history.tpl.html',
      controller: 'SinglePHCtrl',
      title: 'Purchase History',
      resolve: {
        phDetail: ['$q', '$route', '$location', 'securityAuthorization', 'adminResource', function($q, $route, $location, securityAuthorization, adminResource){
          //get app stats only for admin-user, otherwise redirect to /account
          var redirectUrl;
          var promise = securityAuthorization.requireAdminUser()
            .then(function(){
              var id = $route.current.params.id || '';
              console.log(id);
              if(id){
                return adminResource.findPH(id);
              }else{
                redirectUrl = '/admin/purchase-history';
                return $q.reject();
              }
            }, function(reason){
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
angular.module('admin.purchase-history.single').controller('SinglePHCtrl', ['$scope', '$route', '$location', 'utility', 'adminResource', 'phDetail',
  function($scope, $route, $location, utility, adminResource, phDetail) {
    // // local vars
    // var closeAlert = function(alert, ind){
    //   alert.splice(ind, 1);
    // };
    

    // // $scope vars
    // $scope.role = {};
    // $scope.identityAlerts = [];
    // $scope.passwordAlerts = [];
    // $scope.roleAlerts = [];
    // $scope.deleteAlerts = [];
    // $scope.errfor = {};
    // $scope.isActives = ["yes", "no"];
    // $scope.canSave = utility.canSave;
    // $scope.hasError = utility.hasError;
    // $scope.showError = utility.showError;
    // $scope.closeIdentityAlert = function(ind){
    //   closeAlert($scope.identityAlerts, ind);
    // };
    // $scope.closePasswordAlert = function(ind){
    //   closeAlert($scope.passwordAlerts, ind);
    // };
    // $scope.closeRoleAlert = function(ind){
    //   closeAlert($scope.roleAlerts, ind);
    // };
    // $scope.closeDeleteAlert = function(ind){
    //   closeAlert($scope.deleteAlerts, ind);
    // };
    // $scope.updateIdentity = function(){
    //   var data = {
    //     username: $scope.user.username,
    //     email: $scope.user.email
    //   };
    //   if($scope.user.isActive){
    //     data['isActive'] = $scope.user.isActive;
    //   }
    //   $scope.identityAlerts = [];
    //   adminResource.updateUser($scope.user._id, data).then(function(result){
    //     if(result.success){
    //       $scope.user = result.user; //update $scope user model
    //       $scope.identityAlerts.push({ type: 'info', msg: 'Changes have been saved.'});
    //     }else{
    //       $scope.errfor = result.errfor;
    //       angular.forEach(result.errfor, function(err, field){
    //         $scope.identityForm[field].$setValidity('server', false);
    //       });
    //       angular.forEach(result.errors, function(err, index){
    //         $scope.identityAlerts.push({ type: 'danger', msg: err });
    //       });
    //     }
    //   }, function(x){
    //     $scope.identityAlerts.push({
    //       type: 'danger',
    //       msg: 'Error updating user identity: ' + x
    //     });
    //   });
    // };
    // $scope.unlinkAdmin = function(){
    //   unlink('admin');
    // };
    // $scope.linkAdmin = function(){
    //   link('admin');
    // };
    // $scope.unlinkAccount = function(){
    //   unlink('account');
    // };
    // $scope.linkAccount = function(){
    //   link('account');
    // };
    // $scope.setPassword = function(){
    //   $scope.passwordAlerts = [];
    //   adminResource.setPassword($scope.user._id, $scope.pass).then(function(result){
    //     $scope.pass = {};
    //     $scope.passwordForm.$setPristine();
    //     if(result.success){
    //       $scope.user = result.user; //update $scope user model (why password hash is sent to front-end?)
    //       $scope.passwordAlerts.push({ type: 'info', msg: 'A new password has been set.' });
    //     }else{
    //       //error due to server side validation
    //       angular.forEach(result.errors, function(err, index){
    //         $scope.passwordAlerts.push({ type: 'danger', msg: err});
    //       });
    //     }
    //   }, function(x){
    //     $scope.passwordAlerts.push({ type: 'danger', msg: 'Error updating password: ' + x });
    //   });
    // };
    // $scope.deleteUser = function(){
    //   $scope.deleteAlerts =[];
    //   if(confirm('Are you sure?')){
    //     adminResource.deleteUser($scope.user._id).then(function(result){
    //       if(result.success){
    //         // redirect to admin users index page
    //         $location.path('/admin/users');
    //       }else{
    //         //error due to server side validation
    //         angular.forEach(result.errors, function(err, index){
    //           $scope.deleteAlerts.push({ type: 'danger', msg: err});
    //         });
    //       }
    //     }, function(x){
    //       $scope.deleteAlerts.push({ type: 'danger', msg: 'Error deleting user: ' + x });
    //     });
    //   }
    // };

    $scope.phDetail = phDetail;
    console.log($scope.phDetail);
  }
]);