angular.module( 'programadoraBrasil.programas', [
  'ui.router'
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
      parent: 'programas',
      url: '/:id',
      views: {
        "programas-view": {
          controller: function() {
            alert('yey');
          },
          templateUrl: 'programas/programa.tpl.html'
        }
      },
      onEnter: function() {
          console.log("enter programas.detail");
      }
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
