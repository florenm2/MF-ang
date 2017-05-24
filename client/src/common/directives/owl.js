angular.module('dir.owlCarousel', [])
  .directive('owlCarousel',[function() {
    return {
      restrict: 'EA',
      transclude: false,
      scope: {
        owlOptions: '='
      },
      link: function(scope, element, attrs) {
          scope.initCarousel = function() {
            $(element).owlCarousel(scope.owlOptions);
          };
        }
      }
  }])
  .directive('owlCarouselItem',[function() {
     return function(scope) {
     if (scope.$last) {
        scope.initCarousel();
     }
    };
  }]);