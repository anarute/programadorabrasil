angular.module( 'programadoraBrasil.cadastro', [
  'ui.router',
  'ui.bootstrap',
  'ui.utils.masks',
  'programadoraBrasil.cadastro.directives',
  'ui.router.stateHelper'
])

.config(function config( stateHelperProvider ) {
  stateHelperProvider.setNestedState({
    name: 'cadastro',
    url: '/cadastro',
    mainUrl: 'cadastro',
    views: {
      "main": {
        controller: 'CadastroCtrl',
        templateUrl: 'cadastro/cadastro.tpl.html'
      }
    },
    data:{ pageTitle: 'Cadastro' },
    children: [
     { 
        abstract: true,
        name: '',
        url: '/usuario',
        mainUrl: 'cadastro',
        views: {
          "cadastroForm": {
            templateUrl: 'cadastro/cadastro-usuario.tpl.html'
          }
        },
        data:{ pageTitle: 'Cadastro de usuário' }
      },
     { 
        name: 'usuario',
        url: '/usuario',
        mainUrl: 'cadastro',
        views: {
          "cadastroForm": {
            templateUrl: 'cadastro/cadastro-usuario.tpl.html'
          }
        },
        data:{ pageTitle: 'Cadastro de usuário' }
      },
      { 
        name: 'exibidor',
        url: '/exibidor',
        mainUrl: 'cadastro',
        views: {
          "cadastroForm": {
            templateUrl: 'cadastro/cadastro-exibidor.tpl.html'
          }
        },
        data:{ pageTitle: 'Cadastro de exibidor' }
      },
      { 
        name: 'realizador',
        url: '/realizador',
        mainUrl: 'cadastro',
        views: {
          "cadastroForm": {
            templateUrl: 'cadastro/cadastro-realizador.tpl.html'
          }
        },
        data:{ pageTitle: 'Cadastro de realizador' }
      }
    ]
  });
})
.controller( 'CadastroCtrl', function CadastroController( $scope, $http,  $state, $location) {  
  $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
    if($state.current.url == '/cadastro') { $state.transitionTo('cadastro.usuario'); } 
    $scope.mainUrl = toState.name;
  });
})
.directive('cadastro', [ // efeito paralaxe nos círculos
  '$timeout',
  function ($timeout) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        element.bind('click',function(){
          var fator = attrs.cadastro,
              desloc = 15 * fator+"% bottom",
              tri = document.getElementById('tri');
          $timeout(function () {
            angular.element(tri).css('backgroundPosition',desloc);
          },300);
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