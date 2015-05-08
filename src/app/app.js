angular.module( 'programadoraBrasil', [
  'templates-app',
  'templates-common',
  'programadoraBrasil.home',
  'programadoraBrasil.about',
  'programadoraBrasil.cadastro',
  'programadoraBrasil.programas',
  'programadoraBrasil.programas.service',
  'programadoraBrasil.filmes',
  'programadoraBrasil.filmes.service',
  'programadoraBrasil.utils.service',
  'ngAnimate',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider ) {
    $urlRouterProvider.otherwise( '/' );
    $locationProvider.html5Mode(true).hashPrefix('!');
})

.run(
  [          '$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {

    // It's very handy to add references to $state and $stateParams to the $rootScope
    // so that you can access them from any scope within your applications.For example,
    // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
    // to active whenever 'contacts.list' or one of its decendents is active.
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.$on('$stateChangeSuccess', function() {
       document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
    }
  ]
)

.controller( 'AppCtrl', function AppCtrl ( $rootScope, $scope, $location, $state ) {
    $rootScope.spinnerOpts = {
      lines: 13, // The number of lines to draw
      length: 7, // The length of each line
      width: 4, // The line thickness
      radius: 19, // The radius of the inner circle
      corners: 1, // Corner roundness (0..1)
      rotate: 0, // The rotation offset
      direction: 1, // 1: clockwise, -1: counterclockwise
      color: '#C51011', // #rgb or #rrggbb or array of colors
      speed: 1, // Rounds per second
      trail: 60, // Afterglow percentage
      shadow: false, // Whether to render a shadow
      hwaccel: false, // Whether to use hardware acceleration
      className: 'spinner', // The CSS class to assign to the spinner
      zIndex: 2e9 // The z-index (defaults to 2000000000)
    };

//  console.log($state);
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | Programadora Brasil' ;
    }
  });
})
.directive('animateOnChange', [ // transições de seções!
  '$timeout',
  '$animate',  
  function ($timeout, $animate) {
    return {
      restrict: 'A',
      link: function(scope, elem, attr) {
        var cls = 'show';
        //console.log(attr.class);
        if(attr.class.search('show')) {
          //console.log(elem);
          $animate.removeClass(elem,'show', function () {
            console.log('removeu');
            $timeout(function () {
              console.log('removeu classe');
              $animate.addClass(elem,cls);
            }, 300);
          });
        }
        else {
          console.log($animate.addClass(scope,'show'));
        }
      }
    };
  }
])
;

