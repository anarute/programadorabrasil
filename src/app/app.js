angular.module( 'programadoraBrasil', [
  'templates-app',
  'templates-common',
  'programadoraBrasil.home',
  'programadoraBrasil.about',
  'programadoraBrasil.programas',
  'programadoraBrasil.utils.service',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider ) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise( '/' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location, $state ) {
  console.log($state);
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate' ;
    }
  });
})

;

