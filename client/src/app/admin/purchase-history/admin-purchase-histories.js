angular.module('admin.purchase-history.all', ['ngRoute', 'security.authorization', 'services.utility', 'services.adminResource']);
angular.module('admin.purchase-history.all').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/admin/purchase-history', {
      templateUrl: 'admin/purchase-history/admin-purchase-histories.tpl.html',
      controller: 'PHCtrl',
      title: 'Purchase History',
      resolve: {
        phList: ['$q', '$location', '$log', 'securityAuthorization', 'adminResource', function($q, $location, $log, securityAuthorization, adminResource){
          //get app stats only for admin-user, otherwise redirect to /account
          var redirectUrl;
          var promise = securityAuthorization.requireAdminUser()
            .then(function(){
              //handles url with query(search) parameter
              return adminResource.findAllPH($location.search());
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
angular.module('admin.purchase-history.all').controller('PHCtrl', ['$scope', '$log', '$route', '$location', 'utility', 'adminResource', 'phList',
  function($scope, $log, $route, $location, utility, adminResource, data){

    var deserializeData = function(data){
      console.log(data);
      $scope.items = data.items;
      $scope.pages = data.pages;
      $scope.filters = data.filters;
      $scope.phList = data.data;
    };

    $scope.goToPH = function() {
        $scope.selected = this.ph;
        $location.path('/admin/purchase-history/' + $scope.selected._id);
    };

    var fetchPH = function(){
      adminResource.findPHs($scope.filters).then(function(data){

        deserializeData(data);

        // update url in browser addr bar
        $location.search($scope.filters);
      }, function(e){
        $log.error(e);
      });
    };

    // $scope methods
    $scope.canSave = utility.canSave;
    $scope.filtersUpdated = function(){
      //reset pagination after filter(s) is updated
      $scope.filters.page = undefined;
      fetchPH();
    };

    $scope.prev = function(){
      $scope.filters.page = $scope.pages.prev;
      fetchPH();
    };
    $scope.next = function(){
      $scope.filters.page = $scope.pages.next;
      fetchPH();
    };

    $scope.addPH = function(){
      adminResource.addPH($scope.orderNumber).then(function(data){
        $scope.orderNumber = '';
        if(data.success){
          $route.reload();
        }else if (data.errors && data.errors.length > 0){
          alert(data.errors[0]);
        }else {
          alert('unknown error.');
        }
      }, function(e){
        $scope.username = '';
        $log.error(e);
      });
    };

    // $scope vars
    $scope.sorts = [
      {label: "id \u25B2", value: "_id"},
      {label: "id \u25BC", value: "-_id"},
      {label: "orderNumber \u25B2", value: "orderNumber"},
      {label: "orderNumber \u25BC", value: "-orderNumber"},
      {label: "orderDate \u25B2", value: "orderDate"},
      {label: "orderDate \u25BC", value: "-orderDate"}
    ];
    $scope.limits = [
      {label: "10 items", value: 10},
      {label: "20 items", value: 20},
      {label: "50 items", value: 50},
      {label: "100 items", value: 100}
    ];

     deserializeData(data);
  }

  ]);