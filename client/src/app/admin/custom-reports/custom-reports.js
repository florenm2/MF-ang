angular.module('admin.custom-reports', ['ngRoute', 'security.authorization', 'services.adminResource', 'angular.morris', 'chart.js']);
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
        }]
      }
    })
}]);
angular.module('admin.custom-reports').controller('CustomReportCtrl', ['$scope', '$log', 'stats', 'viewCount', 'adminResource', 'accounts', '$http', '$q', '$timeout', 'phList',
  function($scope, $log, stats, viewCount, adminResource, accountData, $http, $q, $timeout, phList){

    $scope.graphData = 'purchases';


    //$scope.graphData = [];

    console.log(phList)
     // local var
     var deserializeData = function(data, ph){
      var results = data.results;
      $scope.statuses = data.statuses;
      $scope.items = results.items;
      $scope.pages = results.pages;
      $scope.filters = results.filters;
      $scope.accounts = results.data;
      $scope.phList = ph.data;

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

    $scope.goToAccount = function() {
      $scope.selected = this.account;
      $location.path('/admin/accounts/' + $scope.selected._id);
        //ng-href="/admin/accounts/{{account._id}}"
      };




    //initialize $scope variables
    deserializeData(accountData, phList);
    // $('#datatable-tabletools').DataTable( {
    //   dom: 'Bfrtip',
    //   buttons: [
    //   'colvis',
    //   'excel',
    //   'csv',
    //   'pdf',
    //   'print'
    //   ]
    // } );

    // $('#datatable-tabletools').DataTable( {
    //   dom: 'Bfrtip',
    //   buttons: true
    // } );


    // $('#datatable-tabletools').buttons().container()
    // .appendTo( 'body' );
   //  angular.element(document).ready( function () {
   //   dTable = $('#datatable-tabletools')
   //   dTable.DataTable();
   // });




    // angular.element(document).ready( function () {
    //      dTable = $('#user_table');
    //      serverSide: true,
    // initComplete : function () {
    //   table.buttons().container()
    //   .appendTo( $('#example_wrapper .col-sm-6:eq(0)'));
    // },
    //      dTable.DataTable();
    //  });

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


}])




// .directive('tableDirective', function () {
//   return {
//     restrict: 'E, A, C',
//     link: function (scope, element, attrs, controller) {
//       var dataTable = element.dataTable({
//         bJQueryUI: true,
//         //bDestroy: true,
//         bRetrieve: true,
//         dom: 'Bfrtip',
//         buttons:true
//       });

//       scope.$watch('graphData', handleModelUpdates, true);

//       function handleModelUpdates(newData) {
//         var data = newData || null;
//         if (data) {
//           dataTable.fnClearTable();
//           dataTable.fnAddData(data);
//           dataTable.fnAdjustColumnSizing();
//           dataTable.fnResizeButtons();
//         }
//       }
//     },
//     scope: {
//       options: "="
//     }
//   };
// });



.directive('tableDirective', function() {
  return {
    // angular passes the element reference to you
    compile: function(element) {
      $(element).DataTable({
        dom: 'Bfrtip',
        buttons: ['columnsToggle',
        'colvis',
        'pdf',
        'print',
        'excel'],
        bRetrieve:true
      });

    }
  }
})





// .directive('tableDirective', function() {
//   return function(scope, element, attrs) {

//             // apply DataTable options, use defaults if none specified by user
//             var options = {};
//             if (attrs.tableDirective.length > 0) {
//               options = scope.$eval(attrs.tableDirective);
//             } else {
//               options = {
//                 "bStateSave": true,
//                 "iCookieDuration": 2419200, /* 1 month */
//                 "bJQueryUI": true,
//                 "bPaginate": false,
//                 "bLengthChange": false,
//                 "bFilter": false,
//                 "bInfo": false,
//                 "bDestroy": true
//               };
//             }

//             // Tell the dataTables plugin what columns to use
//             // We can either derive them from the dom, or use setup from the controller           
//             var explicitColumns = [];
//             element.find('th').each(function(index, elem) {
//               explicitColumns.push($(elem).text());
//             });
//             if (explicitColumns.length > 0) {
//               options["aoColumns"] = explicitColumns;
//             } else if (attrs.aoColumns) {
//               options["aoColumns"] = scope.$eval(attrs.aoColumns);
//             }

//             // aoColumnDefs is dataTables way of providing fine control over column config
//             if (attrs.aoColumnDefs) {
//               options["aoColumnDefs"] = scope.$eval(attrs.aoColumnDefs);
//             }

//             if (attrs.fnRowCallback) {
//               options["fnRowCallback"] = scope.$eval(attrs.fnRowCallback);
//             }

//             // apply the plugin
//             var dataTable = element.dataTable(options);



//             // watch for any changes to our data, rebuild the DataTable
//             scope.$watch(attrs.aaData, function(value) {
//               var val = value || null;
//               if (val) {
//                 dataTable.fnClearTable();
//                 dataTable.fnAddData(scope.$eval(attrs.aaData));
//               }
//             });
//           };
//         });



