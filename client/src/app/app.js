angular.module('app', [
  'ngRoute',
  'config',
  'base',
  'signup',
  'login',
  'admin',
  'services.i18nNotifications',
  'services.httpRequestTracker',
  'services.products',
  'services.accountResource',
  'security',
  'templates.app',
  'templates.common',
  'pricing',
  'hl.sticky',
  'ui.bootstrap',
  'ngMaterial'
  ]);

angular.module('app').config(['$httpProvider', 'XSRF_COOKIE_NAME', function($httpProvider, XSRF_COOKIE_NAME){
  $httpProvider.defaults.xsrfCookieName = XSRF_COOKIE_NAME;
}]);

angular.module('app').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  $routeProvider
  .when('/', {
    templateUrl: 'main.tpl.html',
    controller: 'AppCtrl'
  })
  .when('/contact', {
    templateUrl: 'contact.tpl.html',
    controller: 'ContactCtrl',
    title: 'Contact Us'
  })
  .when('/about', {
    templateUrl: 'about.tpl.html',
    title: 'About Us'
  })
  .when('/specs', {
    templateUrl: 'specs.tpl.html',
    controller: 'SpecsCtrl',
    title: 'SmartBox Options'
  })
  .otherwise({
    templateUrl: '404.tpl.html',
    title: 'Page Not Found'
  });

}]);

angular.module('app').run(['$location', '$window', '$rootScope', 'security', 'accountResource', function($location, $window, $rootScope, security, accountResource) {
  // Get the current user when the application starts
  // (in case they are still logged in from a previous session)
  security.requestCurrentUser();

  $rootScope.$on('$routeChangeStart', function(e, toState) {
      if($location.url() == '/'){
        accountResource.addHomePageView();
      }
      if($location.url() == '/pricing/checkout'){
        accountResource.addCartView();
      }
    });

  // add a listener to $routeChangeSuccess
  $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
    $rootScope.title = current.$$route && current.$$route.title? current.$$route.title: 'SafeConnect Solar';
  });
}]);

angular.module('app').controller('AppCtrl', ['$scope', 'i18nNotifications', 'localizedMessages', function($scope, i18nNotifications, localizedMessages) {

  $scope.notifications = i18nNotifications;

  $scope.removeNotification = function (notification) {
    i18nNotifications.remove(notification);
  };

  $scope.charts = [{
        reportType: 'ga',
        query: {
            metrics: 'ga:sessions',
            dimensions: 'ga:date',
            'start-date': '30daysAgo',
            'end-date': 'yesterday'
        },
        chart: {
            container: 'chart-container-1',
            type: 'LINE',
            options: {
                width: '100%'
            }
        }
    }, {
        reportType: 'ga',
        query: {
            metrics: 'ga:sessions',
            dimensions: 'ga:browser',
            'start-date': '30daysAgo',
            'end-date': 'yesterday'
        },
        chart: {
            container: 'chart-container-2',
            type: 'PIE',
            options: {
                width: '100%',
                is3D: true,
                title: 'Browser Usage'
            }
        }
    }];
    $scope.extraChart = {
        reportType: 'ga',
        query: {
            metrics: 'ga:sessions',
            dimensions: 'ga:date',
            'start-date': '360daysAgo',
            'end-date': 'yesterday',
            ids: 'ga:136221478' // put your viewID here
        },
        chart: {
            container: 'chart-container-3',
            type: 'LINE',
            options: {
                width: '100%'
            }
        }
    };
    $scope.defaultIds = {
        ids: 'ga:136221478'
    };
    $scope.queries = [{
        query: {
            ids: 'ga:136221478',  // put your viewID here
            metrics: 'ga:sessions',
            dimensions: 'ga:city'
        }
    }];
    // if a report is ready
    $scope.$on('$gaReportSuccess', function (e, report, element) {
        console.log(report, element);
    });



  $scope.$on('$routeChangeError', function(event, current, previous, rejection){
    i18nNotifications.pushForCurrentRoute('errors.route.changeError', 'error', {}, {rejection: rejection});
  });
  
}]);


angular.module('app').directive('slideit', function () {    
  return {
    link: function (scope, element, attrs) {          
      $(element).nivoSlider();
    }
  }
});

angular.module('app').controller('OwlCtrl', ['$scope',
  function($scope){
    $scope.products = [
    {
      "id": 1,
      "type": "SmartBox",
      "title": "SmartBox",
      "image": "/img/SmartBox1.png",
      "price": 25
    },
    {
      "id": 2,
      "title": "SmartBox",
      "type": "SmartBox",
      "image": "/img/SmartBox4.png",
      "price": 50
    },
    {
      "id": 3,
      "title": "SmartBox",
      "type": "SmartBox",
      "image": "/img/SmartBox3.png",
      "price": 80
    },
    {
      "id": 4,
      "type": "Cabling",
      "title": "Cabling",
      "image": "/img/SmartBox2.png",
      "price": 25
    },
    {
      "id": 5,
      "type": "Cabling",
      "title": "Cabling",
      "image": "/img/projects/project-1.jpg",
      "price": 25
    },
    {
      "id": 6,
      "title": "Cabling",
      "type": "Cabling",
      "image": "/img/projects/project-1.jpg",
      "price": 8
    },
    {
      "id": 7,
      "title": "Adapter",
      "type": "Adapter",
      "image": "/img/projects/project-1.jpg",
      "price": 2
    },
    {
      "id": 8,
      "title": "Adapter",
      "type": "Adapter",
      "image": "/img/projects/project-1.jpg",
      "price": 2
    }
    ];
    $scope.setActive = function(id) {
      $scope.products[id].active=true;
    }
  }
  ]);


