angular.module( 'programadoraBrasil.programas', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider, $urlRouterProvider) {
  $stateProvider
    .state( 'programas', {
      url: '/programas',
      views: {
        "main": {
          controller: 'ProgramasCtrl',
          templateUrl: 'programas/programas.tpl.html'
        }
      },
      data:{ pageTitle: 'Programas' }
    })
    .state('programas.detail', {
      url: '/:id',
      views: {
        "main": {
          // controller: function($scope, $stateParams) {
          //   $scope.programa = $scope.programas[$stateParams.id];
          // },
          // loaded into ui-view of parent's template
          templateUrl: 'programas/programas.detail.html'
        }
      }
      // onEnter: function() {
      //     console.log("enter programas.detail");
      // }
    });
})

.controller( 'ProgramasCtrl', function ProgramasCtrl( $scope, $http ) {
  // This is simple a demo for UI Boostrap.
  $http.get('assets/json/programas.json').
    success(function(data, status, headers, config) {
      $scope.programas = data.programas;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
})

;
