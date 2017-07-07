angular.module('devlogin.reset', ['security.service', 'services.utility', 'ui.bootstrap']);
angular.module('devlogin.reset').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/developer/login/reset', {
      templateUrl: 'devlogin/reset/devlogin-reset.tpl.html',
      controller: 'DevLoginResetCtrl',
      title: 'Reset Your Password'
    })
    .when('/developer/login/reset/:email/:token', {
      templateUrl: 'adminlogin/reset/devlogin-reset.tpl.html',
      controller: 'AdminLoginResetCtrl'
    });
}]);
angular.module('devlogin.reset').controller('DevLoginResetCtrl', [ '$scope', '$location', '$routeParams', '$log', 'security', 'utility',
  function($scope, $location, $routeParams, $log, security, utility){
    // local variable
    var warningAlert = {
      type: 'warning',
      msg:  'You do not have a valid reset request.'
    };
    var successAlert = {
      type: 'info',
      msg:  'Your password has been reset. Please login to confirm.'
    };
    var resetSuccess = function(data){
      $scope.resetForm.$setPristine();
      $scope.user = {};
      if(data.success){
        $scope.success = true;
        $scope.alerts.push(successAlert);
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
        msg: 'Error resetting your password. Please try again.'
      });
    };
    // model def
    $scope.user = {};
    $scope.alerts = [];
    $scope.email = $routeParams.email;
    $scope.id = $routeParams.token;
    $scope.success = false;

    //initial behavior
    if(!($scope.email && $scope.id)){
      $scope.alerts.push(warningAlert);
    }

    // method def
    $scope.hasError = utility.hasError;
    $scope.showError = utility.showError;
    $scope.canSave = utility.canSave;
    $scope.closeAlert = function(ind){
      $scope.alerts.splice(ind, 1);
    };
    $scope.submit = function(){
      security.loginReset($scope.id, $scope.email, $scope.user).then(resetSuccess, resetError);
    };
  }]);
