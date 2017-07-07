angular.module('devlogin.forgot', ['security.service', 'services.utility', 'ui.bootstrap']);
angular.module('devlogin.forgot').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/developer/login/forgot', {
      templateUrl: 'devlogin/forgot/devlogin-forgot.tpl.html',
      controller: 'DevLoginForgotCtrl',
      title: 'Forgot Your Password?'
    });
}]);
angular.module('devlogin.forgot').controller('DevLoginForgotCtrl', [ '$scope', '$location', '$log', 'security', 'utility',
  function($scope, $location, $log, security, utility){
    // local variable
    var resetSuccess = function(data){
      $scope.loginForgotForm.$setPristine();
      $scope.user = {};
      if(data.success){
        $scope.alerts.push({
          type: 'info',
          msg: 'An email will be sent to you with instructions on how to reset your password.'
        });
      }else{
        angular.forEach(data.errors, function(err, index){
          $scope.alerts.push({
            type: 'danger',
            msg: err
          });
        });
      }
    };
    var resetError = function(){
      $scope.alerts.push({
        type: 'danger',
        msg: 'Error resetting your account. Please try again.'
      });
    };
    // model def
    $scope.user = {};
    $scope.alerts = [];

    // method def
    $scope.hasError = utility.hasError;
    $scope.showError = utility.showError;
    $scope.canSave = utility.canSave;
    $scope.closeAlert = function(ind){
      $scope.alerts.splice(ind, 1);
    };
    $scope.submit = function(){
      security.loginForgot($scope.user).then(resetSuccess, resetError);
    };
  }]);
