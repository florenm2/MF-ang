angular.module('base',['ngRoute', 'security', 'services.utility', 'services.accountResource', 'services.adminResource', 'ui.bootstrap', 'ngMap', 'ngMaterial']);
angular.module('base').controller('HeaderCtrl', ['$scope', '$location', 'security', 'accountResource',
  function ($scope, $location, security, restResource) {
    $scope.isAuthenticated = function(){
      return security.isAuthenticated();
    };
    $scope.getName = function(){
      return restResource.getAccountDetails().then(function(data){
        $scope.name = data;
      });
      console.log(name);
    };
    $scope.isAdmin = function(){
      if($location.path().indexOf('/admin') === -1){
        return false;
      }else{
        return security.isAdmin();
      }
    };
    $scope.logout = function(){
      return security.logout();
    };
    $scope.isActive = function(viewLocation){
      return $location.path() === viewLocation;
    };
  }
]);
angular.module('base').controller('SidebarCtrl', ['$scope', '$location', 'security', 'accountResource', '$mdSidenav',
  function ($scope, $location, security, restResource, $mdSidenav) {
    $scope.isAuthenticated = function(){
      return security.isAuthenticated();
    };
    $scope.isAdmin = function(){
      if($location.path().indexOf('/admin') === -1){
        return false;
      }else{
        return security.isAdmin();
      }
    };
    $scope.logout = function(){
      return security.logout();
    };
    $scope.isActive = function(viewLocation){
      return $location.path() === viewLocation;
    };
    $scope.toggleSidenav = function(menuId) {
      $mdSidenav(menuId).toggle();
    };
    $scope.openNav = function(){
      document.getElementById("mySidenav").style.width = "250px";
      // document.getElementById("mySidenav").style.marginLeft = "250px";
    };
    $scope.closeNav = function(){
      document.getElementById("mySidenav").style.width = "0";
      // document.getElementById("mySidenav").style.marginLeft= "0";
    };
  }
]);
angular.module('base').controller('AdminHeaderCtrl' ,['$scope', 'adminResource', 'accountResource', 'accountInfo', 'security',
  function($scope, adminResource, restResource, accountInfo, security){

    var getName = function(){
      return restResource.getAccountDetails().then(function(data){
        $scope.name = data.account.name.full;
      });
    };

    var clearSearchDropdown = function(){
      $scope.resultIsOpen = false;
      $scope.result = {};
    };
    var showSearchDropdown = function(data){
      $scope.result = data;
      $scope.resultIsOpen = true;
    };

    $scope.showDropdownHeader = function(header){
      var users = $scope.result.users;
      var accounts = $scope.result.accounts;
      var administrators = $scope.result.administrators;
      if(!(users && accounts && administrators)) {
        return false;
      }
      switch(header){
        case 'noDocsMatched':
          return users.length === 0 && accounts.length === 0 && administrators.length === 0;
        case 'Users':
          return users.length !== 0;
        case 'Accounts':
          return accounts.length !== 0;
        case 'Administrators':
          return administrators.length !== 0;
        default:
          return false;
      }
    };

    $scope.update = function(){
      clearSearchDropdown();
      if ($scope.query) {
        // no need to search backend if query string is empty
        adminResource.search($scope.query).then(function (data) {
          showSearchDropdown(data);
        }, function (e) {
          clearSearchDropdown();
        });
      }
    };

    $scope.closeAdminMenu = function(){
      $scope.adminMenuCollapsed = true;
    };

    $scope.toggleAdminMenu = function(){
      $scope.adminMenuCollapsed = !$scope.adminMenuCollapsed;
    };

    // set $scope vars initial value
    $scope.resultIsOpen = false;
    $scope.query = "";
    $scope.result = {};
    $scope.adminMenuCollapsed = true;
    var accountInformation = accountInfo;
    var account = restResource.getAccountDetails.user;
    getName();

  }
]);
angular.module('base').controller('FooterCtrl', ['$scope', 'security',
  function($scope, security){
    $scope.isAuthenticated = function(){
      return security.isAuthenticated();
    };
    //$scope.isAdmin = security.isAdmin;
    $scope.logout = function(){
      return security.logout();
    };
  }
]);

angular.module('base').controller('ContactCtrl', ['$scope', 'utility', 'accountResource', 'NgMap',
  function($scope, utility, restResource, NgMap){
    // local var
    var successAlert = { type: 'success', msg: 'We have received your message. Thank you.' };
    var errorAlert = { type: 'warning', msg: 'Error submitting your message. Please try again.' };

    // model def
    $scope.msg = {};
    $scope.alerts = [];

    // method def
    $scope.hasError = utility.hasError;
    $scope.showError = utility.showError;
    $scope.canSave = utility.canSave;
    $scope.closeAlert = function(ind){
      $scope.alerts.splice(ind, 1);
    };
    $scope.submit = function(){
      var msg = $scope.msg;
      $scope.alerts = [];
      restResource.sendMessage({
        name: msg.name,
        email: msg.email,
        message: msg.message
      }).then(function(data){
        $scope.msgForm.$setPristine();
        $scope.msg = {};
        if(data.success){
          $scope.alerts.push(successAlert);
        }else{
          $scope.alerts.push(errorAlert);
        }
      }, function(x){
        $scope.msgForm.$setPristine();
        $scope.msg = {};
        $scope.alerts.push(errorAlert);
      });
    };
  
    NgMap.getMap().then(function(map) {
      console.log(map.getCenter());
      console.log('markers', map.markers);
      console.log('shapes', map.shapes);
    });

  }
]);

angular.module('base').controller('SpecsCtrl', ['$scope', 'utility', 'accountResource',
  function($scope, utility, restResource){
    $scope.tab = 1;

    $scope.setTab = function(tab){
      $scope.tab = tab;
    };

    $scope.isSet = function(tabNum){
      return $scope.tab === tabNum;
    };
  }
]);

angular.module('base').factory('accountInfo', ['$q', '$location', 'securityAuthorization', 'accountResource' ,
  function($q, $location, securityAuthorization, accountResource){

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

}]);

