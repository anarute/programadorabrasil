angular.module( 'programadoraBrasil.cadastro', [
  'ui.router',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'cadastro', {
    url: '/cadastro',
    views: {
      "main": {
        controller: 'CadastroCtrl',
        templateUrl: 'cadastro/cadastro.tpl.html'
      }
    },
    data:{ pageTitle: 'Cadastro' }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'CadastroCtrl', function CadastroController( $scope, $http) {
});


