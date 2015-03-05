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
.controller( 'CadastroCtrl', function CadastroController( $scope, $http) {  
  $scope.mudaCadastro = function(tipo) {
    $scope.cadastro = {};
    if(tipo == 'usuario') $scope.cadastro.usuario = true; 
    if(tipo == 'exibidor') $scope.cadastro.exibidor = true; 
    if(tipo == 'realizador') $scope.cadastro.realizador = true; 
    
  };
})
.directive('cadastro', [ // efeito paralaxe nos círculos
  function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        element.bind('click',function(){
          var fator = attrs.cadastro,
              desloc = 15 * fator+"% bottom",
              tri = document.getElementById('tri');
          angular.element(tri).css('backgroundPosition',desloc);
        });
        /*
        angular.element('.ng-no-paralax').bind('', function () {
          var pos = $window.scrollY;
          element.css('marginTop',pos/2+'px');
          scope.$apply();
        });*/
      }
    };
  }
])
;

