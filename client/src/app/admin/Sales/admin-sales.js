angular.module('admin.sales', ['ngRoute', 'security.authorization', 'services.adminResource', 'angular.morris', 'chart.js']);
angular.module('admin.sales').config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/admin/sales', {
    templateUrl: 'admin/Sales/admin-sales.tpl.html',
    controller: 'SalesCtrl',
    title: 'Sales Area',
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
    });
}]);
angular.module('admin.sales').controller('SalesCtrl', ['$scope', '$log', 'stats', 'tally', 'phList', 'adminResource',
  function($scope, $log, stats, tally, phData, adminResource){
    
    var deserializeData = function(phData, tally){
      $scope.items = phData.items;
      $scope.pages = phData.pages;
      $scope.filters = phData.filters;
      $scope.phList = phData.data;

      $scope.tally = tally.data;

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

          // console.log($scope.tallyYear);
          // console.log($scope.totalYear);
          
        };
    var monthInfo = function(tallyMonth){

      $scope.tallyMonth = [];
      $scope.totalMonth = []; 

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


       //console.log($scope.tallyMonth);
       //console.log($scope.totalMonth);

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

      $scope.tally30Days = $scope.tallyDay.reduce(function(sum, num){ return sum + num }, 0);
      $scope.total30Days = $scope.totalDay.reduce(function(sum, num){ return sum + num }, 0);

      $scope.average30Days = $scope.total30Days/$scope.tally30Days;


      //console.log($scope.tallyDay);
      //console.log($scope.totalDay);

    };


    var dataToVariables = function(tally){
      console.log(tally);
      var graphData = []; 
      $scope.totalOverall = 0;
      $scope.tallyOverall = 0;
      $scope.averageOverall = 0;


      for(var tal in tally){
        var entry = {
          day : tally[tal]._id.day,
          month : tally[tal]._id.month,
          year : tally[tal]._id.year,
          total : tally[tal].total
        }

        $scope.totalOverall += entry.total;
        $scope.tallyOverall += 1;
        graphData.push(entry);
      }

      $scope.averageOverall = $scope.totalOverall/$scope.tallyOverall;
      $scope.graphData = graphData;
      yearInfo($scope.graphData);

    };

    //console.log($scope.phData);
    deserializeData(phData, tally);

    $scope.labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    $scope.colors2 = ['#45b7cd'];

    $scope.yearLabels = ["2015", "2016", "2017"];

    $scope.data = [
    65, 59, 80, 81, 56, 55, 40
    ];
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
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

    $scope.optionsDayTotal = {
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
      },
      chartColors: ['#803690','#803690']
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
      },
      chartColors: ['#803690','#803690']
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
            labelString: 'Total Sales',
            left: 30
          },
          display: true,
          position: 'left'
        }
        ]
      }
    };


    $scope.series = ['Number of Sales', 'Average Sale Size'];
    $scope.sizeQuantityData = [
      $scope.tallyMonth,
      $scope.avgMonthSaleSize
    ];
    console.log($scope.sizeQuantityData);

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
      },
      legend: { display: true }
    }

  $scope.xcolors = ['#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD'];

  $scope.xlabels1 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  $scope.xdata1 = [
    [65, -59, 80, 81, -56, 55, -40]
  ];
  $scope.xdatasetOverride1 = [
    {
      label: 'Override Series A',
      borderWidth: 1,
      type: 'bar'
    }
  ];
  $scope.xdatasetOverrideBar = [
    {
      label: 'Override Series A',
      borderWidth: 1,
      type: 'bar'
    }
  ];


  }]);