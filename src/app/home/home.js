/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'programadoraBrasil.home', [
  'ui.router',
  'plusOne',
  'programadoraBrasil.programas.service'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/',
    views: {
      "main": {
        controller: 'homeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'homeCtrl', function HomeController( $scope, $http) {
  $scope.sinopse = function(descricao) {
    var sinopse = descricao.split('.');
    return sinopse[0]+" […]";
  };
  $http.get('http://www.programadorabrasil.gov.br/pb_api/programa/?format=json').
    success(function(data, status, headers, config) {
      programas = data.results;
      $scope.programas = programas;
      //console.log(programas);
    }).
    error(function(data, status, headers, config) {
      console.log("home pau no json");
    });  
  $http.get('http://www.programadorabrasil.gov.br/pb_api/filme/?format=json').
  success(function(data, status, headers, config) {
    filmes = data.results;
    $scope.filmes = filmes;
  }).
  error(function(data, status, headers, config) {
    console.log("home pau no json");
  });
})
.directive('ngParallax', [ // efeito paralaxe nos círculos
  '$window',
  function ($window) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        angular.element(window).bind('scroll', function () {
          var pos = $window.scrollY;
          element.css('marginTop',pos/2+'px');
          scope.$apply();
        });
      }
    };
  }
])
;

