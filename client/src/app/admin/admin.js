angular.module('admin.index', ['ngRoute', 'security.authorization', 'services.adminResource', 'angular.morris', 'chart.js', 'ngMaterial']);
angular.module('admin.index').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/admin', {
      templateUrl: 'admin/admin.tpl.html',
      controller: 'AdminCtrl',
      title: 'Admin Area',
      resolve: {
        stats: ['$q', '$location', 'securityAuthorization', 'adminResource', function($q, $location, securityAuthorization, adminResource){
          //get app stats only for admin-user, otherwise redirect to /account
          var redirectUrl;
          var promise = securityAuthorization.requireAdminUser()
            .then(adminResource.getStats, function(reason){
              //rejected either user is un-authorized or un-authenticated
              redirectUrl = reason === 'unauthorized-client'? '/account/settings': '/admin/login';
              return $q.reject();
            })
            .catch(function(){
              redirectUrl = redirectUrl || '/account/settings';
              $location.path(redirectUrl);
              return $q.reject();
            });
          return promise;
        }],
        viewCount: ['$q', '$location', '$log', 'securityAuthorization', 'adminResource', function($q, $location, $log, securityAuthorization, adminResource){
          //get app stats only for admin-user, otherwise redirect to /account
          var redirectUrl;
          var promise = securityAuthorization.requireAdminUser()
            .then(function(){
              //handles url with query(search) parameter
              return adminResource.getRecentViewCount();
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
      }
    })
}]);
angular.module('admin.index').controller('AdminCtrl', ['$scope', '$log', 'stats', 'viewCount', 'adminResource', '$mdSidenav',
  function($scope, $log, stats, viewCount, adminResource, $mdSidenav){

    var viewData = function(viewCount){
         $scope.viewDataDates = []; 
         $scope.homeViewCounts = []; 
         $scope.cartViewCounts = []; 
         $scope.labelDay = [];

         $scope.homeView30Day = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
         $scope.cartView30Day = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

         var cutOff = Date.today().add(-30).days();

         for(var i = 29; i>=0; i--){
            if(((i-4)%5)==0){
              var dlabel = Date.today().add(-i).days().toString('MMM dS');

              $scope.labelDay.push(dlabel);
            } else {
              $scope.labelDay.push('');
            }
          }


         angular.forEach(viewCount, function(view, key) {
            $scope.viewDataDates.push(view.date);

            if(typeof view.homePageViews == 'undefined' || view.homePageViews==null){
                $scope.homeViewCounts.push(0);
            } else {
              $scope.homeViewCounts.push(view.homePageViews);
            }
            
            if(typeof view.cartViews == 'undefined' || view.cartViews == null){
              $scope.cartViewCounts.push(0);
            } else {
              $scope.cartViewCounts.push(view.cartViews);
            }

            var currentDate = new Date(view.date);

            var ts = new TimeSpan(currentDate-cutOff);
            var n = ts.days - 1;
            if(n > 0 && n < 30){
              var f = 30-n;
              $scope.homeView30Day[n]+=view.homePageViews || 0;
              $scope.cartView30Day[n]+=view.cartViews || 0;
            }
           
         });

      };
      viewData(viewCount);    


      $scope.optionsViewsDayTotal = {
      scales: {
        yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          scaleLabel: {
            display: true,
            labelString: 'Total Views'
          },
          display: true,
          position: 'left'
        }
        ]
      }
    };




  }]);