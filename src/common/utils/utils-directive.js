angular.module('programadoraBrasil.utils.directive', [
  'ngAnimate',
  'angularSpinner'

])
.directive('animateOnChange', [ // transições de seções!
  '$animate',
  '$timeout',
  function ($animate, $timeout) {
    return function (scope, elem, attr) {
      scope.$watch(attr.animateOnChange, function () {
        c = 'show';
        $animate.removeClass(elem, c, function () {
          $timeout(function () {
            $animate.addClass(elem, c);
          }, 300);
        });
      });
    };
  }
])
;