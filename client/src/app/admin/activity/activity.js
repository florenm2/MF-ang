angular.module('admin.activity', ['ngRoute', 'security.authorization', 'services.adminResource', 'angular.morris', 'chart.js']);
angular.module('admin.activity').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/admin/activity', {
      templateUrl: 'admin/activity/activity.tpl.html',
      controller: 'ActivityCtrl',
      title: 'Activity',
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
        }],
        tally: ['$q', '$location', '$log', 'securityAuthorization', 'adminResource', function($q, $location, $log, securityAuthorization, adminResource){
          //get app stats only for admin-user, otherwise redirect to /account
          var redirectUrl;
          var promise = securityAuthorization.requireAdminUser()
            .then(function(){
              //handles url with query(search) parameter
              return adminResource.tallyPHs();
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
      }
    })
}]);
angular.module('admin.activity').controller('ActivityCtrl', ['$scope', '$log', 'stats', 'phList', 'adminResource', 'tally', 'securityAuthorization', '$q', 'viewCount',
  function($scope, $log, stats, phData, adminResource, tally, securityAuthorization, $q, viewCount){

    $scope.tab = 1;

    $scope.setTab = function(newTab){
      $scope.tab = newTab;
    }

    $scope.isSet = function(tabNum){
      return $scope.tab === tabNum;
    }

    var deserializeData = function(phData, tally, viewCount){
      $scope.items = phData.items;
      $scope.pages = phData.pages;
      $scope.filters = phData.filters;
      $scope.phList = phData.data;
      $scope.viewRecent = viewCount;

      console.log($scope.viewRecent);
      $scope.tally = tally.data;

      viewData($scope.viewRecent);
      dataToVariables(tally);
    };
    
    var yearInfo = function(tallyYear){

          $scope.tallyYear = [];
          $scope.totalYear = []; 

          var currentDate = new Date();
          var currentYear = currentDate.getFullYear();

          var i;
          var n = currentYear-2015;

          for(i=0;i<n;i++){
            $scope.tallyYear.push(0);
            $scope.totalYear.push(0);
          }

          for(var yr in tallyYear){
            var year = tallyYear[yr].year;
            var n = year - 2015;

            $scope.tallyYear[n]++;
            $scope.totalYear[n]+=tallyYear[yr].total;

          }

        monthInfo($scope.graphData);
          
        };
    var monthInfo = function(tallyMonth){

      $scope.tallyMonth = [0,0,0,0,0,0,0,0,0,0,0,0];
      $scope.totalMonth = [0,0,0,0,0,0,0,0,0,0,0,0];
      $scope.avgMonthSaleSize = [0,0,0,0,0,0,0,0,0,0,0,0];


      for(var mo in tallyMonth){
        var mon = tallyMonth[mo].month;
        var n = mon - 1;

        $scope.tallyMonth[n]++;
        $scope.totalMonth[n]+=tallyMonth[mo].total;

      }

      for(var mo in $scope.avgMonthSaleSize){

        if($scope.tallyMonth[mo] > 0){
          $scope.avgMonthSaleSize[mo] = ($scope.totalMonth[mo]/$scope.tallyMonth[mo]);
        }
      }
      thirtyDayInfo($scope.graphData);

    };

    var thirtyDayInfo = function(tallyDay){

      $scope.tallyDay = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      $scope.totalDay = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      $scope.labelDay = [];

      var cutOff = Date.today().add(-30).days();

      for(var i = 29; i>=0; i--){
        if(((i-4)%5)==0){
          var dlabel = Date.today().add(-i).days().toString('MMM dS');

          $scope.labelDay.push(dlabel);
        } else {
          $scope.labelDay.push('');
        }

      }

      for(var d in tallyDay){

        var currentDate = new Date(tallyDay[d].year, (tallyDay[d].month-1), tallyDay[d].day,0,0,0,0);
 
        var ts = new TimeSpan(currentDate-cutOff);

        var n = ts.days - 1;

        if(n > 0 && n < 30){
          var f = 30-n;
          $scope.tallyDay[n]++;
          $scope.totalDay[n]+=tallyDay[d].total;
        }
      }
    };


    var viewData = function(viewCount){
         $scope.viewDataDates = []; 
         $scope.homeViewCounts = []; 
         $scope.cartViewCounts = []; 

         $scope.homeViewYear = [];
         $scope.cartViewYear = [];

         $scope.homeViewMonth = [0,0,0,0,0,0,0,0,0,0,0,0];
         $scope.cartViewMonth = [0,0,0,0,0,0,0,0,0,0,0,0];

         $scope.homeView30Day = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
         $scope.cartView30Day = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

         var cutOff = Date.today().add(-30).days();

         angular.forEach(viewCount, function(view, key) {
            $scope.viewDataDates.push(view.date);
            $scope.homeViewCounts.push(view.homePageViews);
            $scope.cartViewCounts.push(view.cartViews);

            var viewDate = new Date(view.date);

            var ts = new TimeSpan(viewDate-cutOff);
            var n = ts.days - 1;
            if(n > 0 && n < 30){
              var f = 30-n;
              $scope.homeView30Day[n]+=view.homePageViews;
              $scope.cartView30Day[n]+=view.cartViews;
            }

            var mon = viewDate.getMonth();
            var n = mon;

            if(view.homePageViews)
            $scope.homeViewMonth[n]+=view.homePageViews;
            
            if(view.cartViews)
            $scope.cartViewMonth[n]+=view.cartViews;


         });

          var currentDate = new Date();
          var currentYear = currentDate.getFullYear();

          var i;
          var n = currentYear-2015;

          for(i=0;i<n;i++){
            $scope.homeViewYear.push(0);
            $scope.cartViewYear.push(0);
          }

          for(var view in viewCount){
            var viewDate = new Date(view.date);
            var year = viewDate.getFullYear();
            var n = year - 2015;

            $scope.homeViewYear[n]+=view.homePageViews;
            $scope.cartViewYear[n]+=view.cartViews;

          }

      };



    var dataToVariables = function(tally){
      var graphData = []; 

      for(var tal in tally){
        var entry = {
          day : tally[tal]._id.day,
          month : tally[tal]._id.month,
          year : tally[tal]._id.year,
          total : tally[tal].total
        }

        graphData.push(entry);
      }

      $scope.graphData = graphData;
      yearInfo($scope.graphData);

    };


    deserializeData(phData, tally, viewCount);


//GRAPH INFORMATION

$scope.labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    $scope.yearLabels = ["2015", "2016", "2017"];

    $scope.data = [
    65, 59, 80, 81, 56, 55, 40
    ];
    $scope.onClick = function (points, evt) {
      //console.log(points, evt);
    };
    
    $scope.options = {
      scales: {
        yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        }
        ]
      }
    };

    $scope.optionsSalesDayTotal = {
      scales: {
        yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          scaleLabel: {
            display: true,
            labelString: 'Total Sales'
          },
          display: true,
          position: 'left'
        }
        ]
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

    $scope.optionsYearTally = {
      scales: {
        yAxes: [
        {
          id: 'y-axis-1',
          scaleSteps : 1,
          ticks: {
            suggestedMax: 10,
            min: 0,
            stepSize: 1
          },
          scaleLabel: {
            display: true,
            labelString: 'Number of Sales'
          },
          display: true,
          position: 'left'
        }
        ]
      }
    };

    $scope.optionsMonthViews = {
      scales: {
        yAxes: [
        {
          id: 'y-axis-1',
          scaleSteps : 1,
          ticks: {
            suggestedMax: 500,
            min: 0,
            stepSize: 50
          },
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

    $scope.optionsYearTotal = {
      scales: {
        yAxes: [
        {
          id: 'y-axis-1',
          scaleSteps : 1,
          ticks: {
            suggestedMax: 5000,
            min: 0,
            stepSize: 1000
          },
          scaleLabel: {
            display: true,
            labelString: 'Total Sales'
          },
          display: true,
          position: 'left'
        }
        ]
      }
    };

    $scope.optionsMonthTally = {
      scales: {
        yAxes: [
        {
          id: 'y-axis-1',
          scaleSteps : 1,
          ticks: {
            suggestedMax: 10,
            min: 0,
            stepSize: 1
          },
          scaleLabel: {
            display: true,
            labelString: 'Number of Sales'
          },
          display: true,
          position: 'left'
        }
        ]
      }
    };

    $scope.optionsMonthTotal = {
      scales: {
        yAxes: [
        {
          id: 'y-axis-1',
          scaleSteps : 1,
          ticks: {
            suggestedMax: 1000,
            min: 0,
            stepSize: 200
          },
          scaleLabel: {
            display: true,
            labelString: 'Total Sales'
          },
          display: true,
          position: 'left'
        }
        ]
      }
    };


    $scope.series = ['Series A', 'Series B'];
    $scope.sizeQuantityData = [
      $scope.tallyMonth,
      $scope.avgMonthSaleSize
    ];

    $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
    $scope.sizeQuantityOptions = {
      scales: {
        yAxes: [
        {
          id: 'y-axis-1',
          scaleSteps : 1,
          ticks: {
            suggestedMax: 10,
            min: 0,
            stepSize: 1
          },
          scaleLabel: {
            display: true,
            labelString: 'Number of Sales'
          },
          display: true,
          position: 'left'
        },
        {
          id: 'y-axis-2',
          scaleSteps : 1,
          ticks: {
            suggestedMax: 1000,
            min: 0,
            stepSize: 200
          },
          scaleLabel: {
            display: true,
            labelString: 'Average Sale Size'
          },
          display: true,
          position: 'right'
        }
        ]
      }
    }

    // $scope.homePageViewData = [
    //   $scope.thirtyDayInfo,
    //   $scope.viewRecent.homePageViewData
    // ];



  }]);