angular.module('admin.index', ['ngRoute', 'security.authorization', 'services.adminResource', 'angular.morris', 'chart.js']);
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
    })
}]);
angular.module('admin.index').controller('AdminCtrl', ['$scope', '$log', 'stats', 'viewCount', 'adminResource',
  function($scope, $log, stats, viewCount, adminResource){

    // html2canvas(document.getElementById('exportthis'), {
    //         onrendered: function (canvas) {
    //             var data = canvas.toDataURL();
    //             var docDefinition = {
    //                 content: [{
    //                     image: data,
    //                     width: 500,
    //                 }]
    //             };
    //             pdfMake.createPdf(docDefinition).download("Test.pdf");
    //         }
    //     });

    $scope.click = function() {
      //    console.log("button clicked");
      //  $scope.order.showPopupAddedToCart = !$scope.order.showPopupAddedToCart;
      var doc = new jsPDF();
      doc.text(20, 20, 'Hello world!');

      var pdfBase64 = doc.output('datauristring');

     // adminResource.sendConfirmationEmail();


      // var emailjs = require('emailjs/email');
      // var emailer = emailjs.server.connect( req.app.config.smtp.credentials );
      // emailer.send({
      //   from: req.app.config.smtp.from.name +' <'+ req.app.config.smtp.from.address +'>',
      //   to: 'florenm2@miamioh.edu',
      //   subject: 'subject',
      //   text: 'hello',
      //  // attachment: attachments
      // }, function(err, message) {
      //   if (err) {
      //     options.error('Email failed to send. '+ err);
      //     return;
      //   }
      //   else {
      //     options.success(message);
      //     return;
      //   }
      // })


      // Save the PDF
      //doc.save('Test.pdf');

    };

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
            $scope.homeViewCounts.push(view.homePageViews);
            $scope.cartViewCounts.push(view.cartViews);

            var currentDate = new Date(view.date);

            var ts = new TimeSpan(currentDate-cutOff);
            var n = ts.days - 1;
            if(n > 0 && n < 30){
              var f = 30-n;
              $scope.homeView30Day[n]+=view.homePageViews;
              $scope.cartView30Day[n]+=view.cartViews;
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