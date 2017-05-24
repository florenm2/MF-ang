angular.module('account.purchaseHistory.all', ['config', 'account.settings.social', 'security.service', 'security.authorization', 'services.accountResource', 'services.utility','ui.bootstrap', 'directives.serverError']);
angular.module('account.purchaseHistory').config(['$routeProvider', 'securityAuthorizationProvider', function($routeProvider){
  $routeProvider
    .when('/account/purchaseHistory', {
      templateUrl: 'account/purchaseHistory/purchaseHistory.tpl.html',
      controller: 'PurchaseHistoryCtrl',
      title: 'Purchase History',
      resolve: {
        accountDetails: ['$q', '$location', 'securityAuthorization', 'accountResource' ,function($q, $location, securityAuthorization, accountResource){
          //get account details only for verified-user, otherwise redirect to /account/verification
          var redirectUrl;
          var promise = securityAuthorization.requireVerifiedUser()
            .then(accountResource.getAccountDetails, function(reason){
              //rejected either user is unverified or un-authenticated
              redirectUrl = reason === 'unverified-client'? '/account/verification': '/login';
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
angular.module('account.purchaseHistory.all').controller('PurchaseHistoryCtrl', [ '$scope', '$location', '$log', 'security', 'utility', 'accountResource', 'accountDetails', 'SOCIAL',
  function($scope, $location, $log, security, utility, restResource, accountDetails, SOCIAL){
    //local vars
    var deserializeData = function(data){
      $scope.account = data.account;
      $scope.user = data.user;
      $scope.phList = data.purchasehistory;
      $scope.log = data.purchaseHistoryLog;
    };

    $scope.goToPH = function() {
        $scope.selected = this.ph;
        $location.path('/account/purchaseHistory/' + $scope.selected._id);
    };


     $scope.print = null;
     $scope.exists = false;

     $scope.count = 0;
     $scope.myFunction = function() {
        $scope.count++;
    }

    $scope.hasError = utility.hasError;
    $scope.showError = utility.showError;
    $scope.canSave = utility.canSave;

    $scope.phDetail = {
      //orderNumber:    $scope.ph.orderNumber,
      //accountid: account._id
    };

     $scope.submit = function(){
      restResource.newPurchase($scope.phDetail).then(function(result){
        if(result.success){
          console.log(result.account);
        }else{
          //error due to server side validation
          angular.forEach(result.errors, function(err, index){
            console.log(err);
          });
        }
      }), function(x){
        console.log(x);
      }
    
     };

     deserializeData(accountDetails);

}]);


