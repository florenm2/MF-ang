angular.module('admin.users.index', ['ngRoute', 'security.authorization', 'services.utility', 'services.adminResource']);
angular.module('admin.users.index').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/admin/users', {
      templateUrl: 'admin/users/admin-users.tpl.html',
      controller: 'UsersIndexCtrl',
      title: 'Manage Users',
      resolve: {
        users: ['$q', '$location', '$log', 'securityAuthorization', 'adminResource', function($q, $location, $log, securityAuthorization, adminResource){
          //get app stats only for admin-user, otherwise redirect to /account
          var redirectUrl;
          var promise = securityAuthorization.requireAdminUser()
            .then(function(){
              //handles url with query(search) parameter
              return adminResource.findUsers($location.search());
            }, function(reason){
              //rejected either user is un-authorized or un-authenticated
              redirectUrl = reason === 'unauthorized-client'? '/account': '/login';
              return $q.reject();
            })
            .catch(function(){
              redirectUrl = redirectUrl || '/account';
              $location.search({});
              $location.path(redirectUrl);
              return $q.reject();
            });
          return promise;
        }],
        accounts: ['$q', '$location', '$log', 'securityAuthorization', 'adminResource', function($q, $location, $log, securityAuthorization, adminResource){
          //get app stats only for admin-user, otherwise redirect to /account
          var redirectUrl;
          var promise = securityAuthorization.requireAdminUser()
            .then(function(){
              //handles url with query(search) parameter
              return adminResource.findAccounts($location.search());
            }, function(reason){
              //rejected either user is un-authorized or un-authenticated
              redirectUrl = reason === 'unauthorized-client'? '/account': '/login';
              return $q.reject();
            })
            .catch(function(){
              redirectUrl = redirectUrl || '/account';
              $location.search({});
              $location.path(redirectUrl);
              return $q.reject();
            });
          return promise;
        }]
      },
      reloadOnSearch: false
    });
}]);
angular.module('admin.users.index').controller('UsersIndexCtrl', ['$scope', '$route', '$location', '$log', 'utility', 'adminResource', 'users', 'accounts',
   function($scope, $route, $location, $log, utility, adminResource, usersData, accountsData){
    // local var
    var deserializeData = function(data){
      var results = data.results;
      $scope.statuses = data.statuses;
      $scope.items = results.items;
      $scope.pages = results.pages;
      $scope.filters = results.filters;
      $scope.accounts = results.data;
      $scope.numberOfCustomers = 0;

      $scope.accounts.forEach(function(account) {
        $scope.numberOfCustomers++;
        account.purchaseAmount = 0;
        var phlog = account.purchaseHistoryLog;

        for(var ph in phlog){
          adminResource.findPH(phlog[ph]).then(function(data){
            account.purchaseAmount+=data.cost.total;
          }, function(e){
            $log.error(e);
          });
        }
      });
    };

    var fetchAccounts = function(){
      adminResource.findAccounts($scope.filters).then(function(data){
        deserializeData(data);

        // update url in browser addr bar
        $location.search($scope.filters);
      }, function(e){
        $log.error(e);
      });
    };

    $scope.goToUser = function() {
        $scope.selected = this.user;
        $location.path('/admin/users/' + $scope.selected._id);
    };

    // $scope methods
    $scope.canSave = utility.canSave;
    $scope.formatTime = function(timestamp, replace){
      var res = moment(timestamp).from();
      return replace? res.replace('ago', replace): res;
    };
    $scope.filtersUpdated = function(){
      //reset pagination after filter(s) is updated
      $scope.filters.page = undefined;
      fetchAccounts();
    };
    $scope.prev = function(){
      $scope.filters.page = $scope.pages.prev;
      fetchAccounts();
    };
    $scope.next = function(){
      $scope.filters.page = $scope.pages.next;
      fetchAccounts();
    };
    $scope.addAccount = function(){
      adminResource.addAccount($scope.fullname).then(function(data){
        $scope.fullname = '';
        if(data.success){
          $route.reload();
        }else if (data.errors && data.errors.length > 0){
          alert(data.errors[0]);
        }else {
          alert('unknown error.');
        }
      }, function(e){
        $scope.fullname = '';
        $log.error(e);
      });
    };

    // $scope vars
    //select elements and their associating options
    $scope.statuses = [];
    $scope.sorts = [
      {label: "id \u25B2", value: "_id"},
      {label: "id \u25BC", value: "-_id"},
      {label: "name \u25B2", value: "name"},
      {label: "name \u25BC", value: "-name"},
      {label: "company \u25B2", value: "company"},
      {label: "company \u25BC", value: "-company"}
    ];
    $scope.limits = [
      {label: "10 items", value: 10},
      {label: "20 items", value: 20},
      {label: "50 items", value: 50},
      {label: "100 items", value: 100}
    ];

    //initialize $scope variables
    deserializeData(accountsData);
  }

]);






// angular.module('admin.users.index', ['ngRoute', 'security.authorization', 'services.utility', 'services.adminResource']);
// angular.module('admin.users.index').config(['$routeProvider', function($routeProvider){
//   $routeProvider
//     .when('/admin/users', {
//       templateUrl: 'admin/users/admin-users.tpl.html',
//       controller: 'UsersIndexCtrl',
//       title: 'Manage Users',
//       resolve: {
//         users: ['$q', '$location', '$log', 'securityAuthorization', 'adminResource', function($q, $location, $log, securityAuthorization, adminResource){
//           //get app stats only for admin-user, otherwise redirect to /account
//           var redirectUrl;
//           var promise = securityAuthorization.requireAdminUser()
//             .then(function(){
//               //handles url with query(search) parameter
//               return adminResource.findUsers($location.search());
//             }, function(reason){
//               //rejected either user is un-authorized or un-authenticated
//               redirectUrl = reason === 'unauthorized-client'? '/account': '/login';
//               return $q.reject();
//             })
//             .catch(function(){
//               redirectUrl = redirectUrl || '/account';
//               $location.search({});
//               $location.path(redirectUrl);
//               return $q.reject();
//             });
//           return promise;
//         }],
//         accounts: ['$q', '$location', '$log', 'securityAuthorization', 'adminResource', function($q, $location, $log, securityAuthorization, adminResource){
//           //get app stats only for admin-user, otherwise redirect to /account
//           var redirectUrl;
//           var promise = securityAuthorization.requireAdminUser()
//             .then(function(){
//               //handles url with query(search) parameter
//               return adminResource.findAccounts($location.search());
//             }, function(reason){
//               //rejected either user is un-authorized or un-authenticated
//               redirectUrl = reason === 'unauthorized-client'? '/account': '/login';
//               return $q.reject();
//             })
//             .catch(function(){
//               redirectUrl = redirectUrl || '/account';
//               $location.search({});
//               $location.path(redirectUrl);
//               return $q.reject();
//             });
//           return promise;
//         }]
//       },
//       reloadOnSearch: false
//     });
// }]);
// angular.module('admin.users.index').controller('UsersIndexCtrl', ['$scope', '$route', '$location', '$log', 'utility', 'adminResource', 'users', 'accounts',
//   function($scope, $route, $location, $log, utility, adminResource, users, accounts){
//     // local var
//     var deserializeData = function(users,){
//       $scope.items = data.items;
//       $scope.pages = data.pages;
//       $scope.filters = data.filters;
//       $scope.users = data.data;
//     };

//     $scope.goToUser = function() {
//         $scope.selected = this.user;
//         $location.path('/admin/users/' + $scope.selected._id);
//     };

//     var fetchUsers = function(){
//       adminResource.findUsers($scope.filters).then(function(data){
//         deserializeData(data);

//         // update url in browser addr bar
//         $location.search($scope.filters);
//       }, function(e){
//         $log.error(e);
//       });
//     };

//     // $scope methods
//     $scope.canSave = utility.canSave;
//     $scope.filtersUpdated = function(){
//       //reset pagination after filter(s) is updated
//       $scope.filters.page = undefined;
//       fetchUsers();
//     };
//     $scope.prev = function(){
//       $scope.filters.page = $scope.pages.prev;
//       fetchUsers();
//     };
//     $scope.next = function(){
//       $scope.filters.page = $scope.pages.next;
//       fetchUsers();
//     };
//     $scope.addUser = function(){
//       adminResource.addUser($scope.username).then(function(data){
//         $scope.username = '';
//         if(data.success){
//           $route.reload();
//         }else if (data.errors && data.errors.length > 0){
//           alert(data.errors[0]);
//         }else {
//           alert('unknown error.');
//         }
//       }, function(e){
//         $scope.username = '';
//         $log.error(e);
//       });
//     };

//     // $scope vars
//     //select elements and their associating options
//     $scope.roles = [{label: "any", value: ""}, {label: "admin", value: "admin"}, {label: "account", value: "account"}];
//     $scope.isActives =[{label: "either", value: ""}, {label: "yes", value: "yes"}, {label: "no", value: "no"}];
//     $scope.sorts = [
//       {label: "id \u25B2", value: "_id"},
//       {label: "id \u25BC", value: "-_id"},
//       {label: "username \u25B2", value: "username"},
//       {label: "username \u25BC", value: "-username"},
//       {label: "email \u25B2", value: "email"},
//       {label: "email \u25BC", value: "-email"}
//     ];
//     $scope.limits = [
//       {label: "10 items", value: 10},
//       {label: "20 items", value: 20},
//       {label: "50 items", value: 50},
//       {label: "100 items", value: 100}
//     ];

//     //initialize $scope variables
//     deserializeData(users);
//     deserializeData(users);
//   }
// ]);