angular.module('admin.developers', ['ngRoute', 'security.authorization', 'services.adminResource', 'angular.morris', 'chart.js']);
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
    });
}]);
angular.module('admin.developers').controller('DevCtrl', ['$scope', '$log', 'stats', 'viewCount',
  function($scope, $log, stats, viewCount){

    var deserializeData = function(viewCount){
      $scope.apiDataDates = []; 
      $scope.apiCounts = [];
      $scope.apiYear = [];
      $scope.apiMonth = [0,0,0,0,0,0,0,0,0,0,0,0];
      $scope.api30Day = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

      $scope.labelDay = [];

      for(var i = 29; i>=0; i--){
        if(((i-4)%5)==0){
          var dlabel = Date.today().add(-i).days().toString('MMM dS');

          $scope.labelDay.push(dlabel);
        } else {
          $scope.labelDay.push('');
        }

      }
      
      var currentDate = new Date();
      var currentYear = currentDate.getFullYear();
      var cutOff = Date.today().add(-30).days();

      angular.forEach(viewCount, function(call, key) {
        $scope.viewDataDates.push(call.date);
        $scope.apiCounts.push(call.apiCalls);

        var callDate = new Date(call.date);

        var ts = new TimeSpan(callDate-cutOff);
        var n = ts.days - 1;
        if(n > 0 && n < 30){
          var f = 30-n;
          $scope.api30Day[n]+=call.apiCalls;
        }

        var mon = callDate.getMonth();
        var n = mon;

        if(view.apiCalls)
          $scope.apiMonth[n]+=call.apiCalls;
      });

      var i;
      var n = currentYear-2015;

      for(i=0;i<n;i++){
        $scope.apiYear.push(0);
      }

      for(var call in viewCount){
        var callDate = new Date(call.date);
        var year = callDate.getFullYear();
        var n = year - 2015;

        $scope.apiYear[n]+=call.apiCalls;
      }

    };


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