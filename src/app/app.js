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

.controller( 'AppCtrl', function AppCtrl ( $scope, $location, $state ) {
  console.log($state);
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | Programadora Brasil' ;
    }
  });
})
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

