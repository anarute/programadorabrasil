angular.module( 'programadoraBrasil.filmes', [
    'ui.router',
    'programadoraBrasil.filmes.service'
])

.config(function config( $uiViewScrollProvider, $stateProvider, $urlRouterProvider) {
  $uiViewScrollProvider.useAnchorScroll(),
  $stateProvider
    .state( 'filmes', {
      // With abstract set to true, that means this state can not be explicitly activated.
      // It can only be implicitly activated by activating one of its children.
      abstract: true,
      url: '/filmes',
      views: {
        "main": {
          templateUrl: 'filmes/filmes.tpl.html',
          resolve: {
            filmes: ['filmes',
              function( filmes ){
                return filmes.all();
              }]
          },
          controller: 'filmesCtrl'
        }
      },
      data:{ pageTitle: 'filmes' }
    })
    .state('filmes.detail', {
      url: '/:id',
      views: {
        "filmes-view": {
          /*
          controller: ['$scope', '$stateParams', 'utils',
            function ( $scope, $stateParams, utils) {

                $scope.filmes = filmes;

                // console.log($scope.filmes + " - id: " + $stateParams.id);
                $scope.filme = utils.findById($scope.filmes, $stateParams.id);

                $scope.capa = "assets/img/" + $scope.filme.img;

                console.log($scope.capa);
            }], */
            controller: ['$scope', '$stateParams', 'utils', '$http',
              function ( $scope, $stateParams, utils, $http) {
                $http.get('http://localhost:8000/filme/'+ $stateParams.id +'/?format=json').
                  success(function(data, status, headers, config) {
                  $scope.filme = data;
                  $scope.capa = "assets/img/" + $scope.filme.img;
                  }).
                  error(function(data, status, headers, config) {
                    // log error
                });
            }],
          templateUrl: 'filmes/filme.tpl.html'
        }
      },
      onEnter: function($stateParams) {
          console.log("enter " + $stateParams.id);
      }
    });
})

.controller( 'filmesCtrl', function filmesCtrl( $scope, $http ) {
  // This is simple a demo for UI Boostrap.
  $http.get('http://localhost:8000/filme/?format=json').
    success(function(data, status, headers, config) {
      filmes = data.filmes;
      $scope.filmes = filmes;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
})

;
