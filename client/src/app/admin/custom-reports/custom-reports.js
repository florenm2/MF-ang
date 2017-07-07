angular.module('admin.custom-reports', ['ngRoute', 'security.authorization', 'services.adminResource', 'angular.morris', 'chart.js', 'ngSanitize', 'ngCsv']);
angular.module('admin.custom-reports').config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/admin/custom-reports', {
    templateUrl: 'admin/custom-reports/custom-reports.tpl.html',
    controller: 'CustomReportCtrl',
    title: 'Custom Reports',
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
        }],
        accountsEverything: ['$q', '$location', '$log', 'securityAuthorization', 'adminResource', function($q, $location, $log, securityAuthorization, adminResource){
          //get app stats only for admin-user, otherwise redirect to /account
          var redirectUrl;
          var promise = securityAuthorization.requireAdminUser()
          .then(function(){
              //handles url with query(search) parameter
              return adminResource.findAccountsEverything($location.search());
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
        }],
        phbigList: ['$q', '$location', '$log', 'securityAuthorization', 'adminResource', function($q, $location, $log, securityAuthorization, adminResource){
          //get app stats only for admin-user, otherwise redirect to /account
          var redirectUrl;
          var promise = securityAuthorization.requireAdminUser()
          .then(function(){
              //handles url with query(search) parameter
              return adminResource.findPHEverything($location.search());
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
        }]
      }
    })
}]);
angular.module('admin.custom-reports').controller('CustomReportCtrl', ['$scope', '$log', 'stats', 'viewCount', 'adminResource', 'accounts', '$http', '$q', '$timeout', 'phList', 'tally', 'accountsEverything', 'phbigList',
  function($scope, $log, stats, viewCount, adminResource, accountData, $http, $q, $timeout, phList, sales, accountsEverything, phbigList){

    //console.log(accountData);
    //console.log(accountsEverything);
    console.log(phbigList)

    $scope.graphChoice = "";
    $scope.salesGraph = "";
    $scope.viewGraph= "";

    $scope.graphChoices = ["Accounts", "Purchases", "Sales", "Page Views"];
    $scope.salesGraphs = ["Monthly", "Yearly", "Average"];
    $scope.viewGraphs= ["Home Page", "Shopping Cart"];

    $scope.accountStartDate = new Date();
    $scope.accountEndDate = new Date();

    $scope.phStartDate = new Date();
    $scope.phEndDate = new Date();

    $scope.phHeaders = "";

    //console.log(phList);

    $scope.generatePDF = function(graph){
      var element = '';
      if(graph=='home'){
        element="#home";
      }
      if(graph=='cart'){
        element="#cart";
      }
      if(graph=='avgSales'){
        element="#avgSales";
      }
      if(graph=='yearSales'){
        element="#yearSales";
      }
      if(graph=='monthSales'){
        element="#monthSales";
      }
      html2canvas($(element), {
        onrendered: function(canvas) {         
          var imgData = canvas.toDataURL(
            'image/png');              
          var doc = new jsPDF('p', 'mm');
          doc.addImage(imgData, 'PNG', 10, 10);
          doc.save(graph + '.pdf');
        }
      });
    }

    $scope.formatTime = function(timestamp, replace){
      var res = moment(timestamp).from();
      return replace? res.replace('ago', replace): res;
    };
    $scope.accountFiltersUpdated = function(){
      $scope.accountFilters.page = undefined;
      $scope.accountFilters.datespan1 = $scope.accountStartDate.toISOString();
      $scope.accountFilters.datespan2 = $scope.accountEndDate.toISOString();
      fetchAccounts();
    };
    $scope.accountPrev = function(){
      $scope.accountFilters.page = $scope.accountPages.prev;
      fetchAccounts();
    };
    $scope.accountNext = function(){
      $scope.accountFilters.page = $scope.accountPages.next;
      fetchAccounts();
    };

    $scope.accountSorts = [
    {label: "id \u25B2", value: "_id"},
    {label: "id \u25BC", value: "-_id"},
    {label: "name \u25B2", value: "name"},
    {label: "name \u25BC", value: "-name"},
    {label: "company \u25B2", value: "company"},
    {label: "company \u25BC", value: "-company"}
    ];
    $scope.accountLimits = [
    {label: "10 items", value: 10},
    {label: "20 items", value: 20},
    {label: "50 items", value: 50},
    {label: "100 items", value: 100}
    ];

//PURCHASES
$scope.phFiltersUpdated = function(){
  $scope.phFilters.page = undefined;
  $scope.phFilters.datespan1 = $scope.phStartDate.toISOString();
  $scope.phFilters.datespan2 = $scope.phEndDate.toISOString();
  fetchPH();
};
$scope.phPrev = function(){
  $scope.phFilters.page = $scope.phPages.prev;
  fetchPH();
};
$scope.phNext = function(){
  $scope.phFilters.page = $scope.phPages.next;
  fetchPH();
};


$scope.phSorts = [
{label: "id \u25B2", value: "_id"},
{label: "id \u25BC", value: "-_id"},
{label: "name \u25B2", value: "name"},
{label: "name \u25BC", value: "-name"},
{label: "company \u25B2", value: "company"},
{label: "company \u25BC", value: "-company"}
];
$scope.phLimits = [
{label: "10 items", value: 10},
{label: "20 items", value: 20},
{label: "50 items", value: 50},
{label: "100 items", value: 100}
];


//SALES
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

  $scope.sizeQuantityData = [
  $scope.tallyMonth,
  $scope.avgMonthSaleSize
  ];
};


var dataToVariables = function(tally){
  //console.log(tally);
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
      barShowStroke : false,
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
      barStrokeWidth:0,
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
        stepSize: 1,
        beginAtZero: false
      },
      barStrokeWidth:0,
      barShowStroke : false,
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
        min: 5,
        stepSize: 200,
        beginAtZero: false
      },
      barStrokeWidth:0,
      barShowStroke : false,
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



//VIEWS
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



var accountAfterFilter = function(data){
  var results = data.results;
  $scope.accountItems = results.items;
  $scope.accountPages = results.pages;
  $scope.accountFilters = results.filters;
  $scope.accounts = results.data;
};

var fetchAccounts = function(){
  adminResource.findAccounts($scope.accountFilters).then(function(data){
    accountAfterFilter(data);
  }, function(e){
    $log.error(e);
  });
};

var phAfterFilter = function(data){
  $scope.phItems = data.items;
  $scope.phPages = data.pages;
  $scope.phFilters = data.filters;
  $scope.phList = data.data;
};

var fetchPH = function(){
  adminResource.findPHs($scope.phFilters).then(function(phdata){
    console.log(phdata)
    phAfterFilter(phdata);
  }, function(e){
    $log.error(e);
  });
};

var deserializeData = function(data, ph, sales, viewCount){
  var results = data.results;
  $scope.accountItems = results.items;
  $scope.accountPages = results.pages;
  $scope.accountFilters = results.filters;
  $scope.accounts = results.data;

  $scope.phList = ph.data;
  $scope.phItems = ph.items;
  $scope.phPages = ph.pages;
  $scope.phFilters = ph.filters;

  $scope.tally = sales;

  dataToVariables($scope.tally);
  viewData(viewCount); 

};

deserializeData(accountData, phList, sales, viewCount);


}])






