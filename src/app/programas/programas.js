angular.module( 'programadoraBrasil.programas', [
    'ui.router'
])

.config(function config( $uiViewScrollProvider, $stateProvider, $urlRouterProvider) {
  $uiViewScrollProvider.useAnchorScroll(),
  $stateProvider
    .state( 'programas', {
      // With abstract set to true, that means this state can not be explicitly activated.
      // It can only be implicitly activated by activating one of its children.
      abstract: true,
      url: '/programas',
      views: {
        "main": {
          controller: 'ProgramasCtrl',
          templateUrl: 'programas/programas.tpl.html'
        }
      },
      data:{ pageTitle: 'Programas' }
    })
    .state( 'programas.list', {
      url: '',
      views: {
        "programas-view": {
          templateUrl: 'programas/programas.list.tpl.html'
        }
      },
      onEnter: function($stateParams) {
          console.log("entrou no programaslist");
      }
    })
    .state('programas.detail', {
      url: '/:id',
      views: {
        "programas-view": {
          controller: ['$scope', '$stateParams', 'utils',
            function ( $scope, $stateParams, utils) {
                $scope.programa = utils.findById($scope.programas, $stateParams.id);
            }],
          templateUrl: 'programas/programa.tpl.html'
        }
      },
      onEnter: function($stateParams) {
          console.log("enter " + $stateParams.id);
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
