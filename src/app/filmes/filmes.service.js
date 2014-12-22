angular.module( 'programadoraBrasil.filmes.service' , [

])

// A RESTful factory for retrieving filmes from 'filmes.json'
.factory('filmes', ['$http', 'utils', function ($http, utils) {
  var path = 'assets/json/filmes.json';
  var filmes = $http.get(path).then(function (resp) {
    return resp.data.filmes;
  });

  var factory = {};
  factory.all = function () {
    return filmes;
  };
  factory.get = function (id) {
    return filmes.then(function(){
      return utils.findById(filmes, id);
    });
  };
  return factory;
}]);
