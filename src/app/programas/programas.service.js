angular.module( 'programadoraBrasil.programas.service' , [

])

// A RESTful factory for retrieving programas from 'programas.json'
.factory('programas', ['$http', 'utils', function ($http, utils) {
  var path = 'http://www.programadorabrasil.gov.br/pb_api/programa/?format=json';
  var programas = $http.get(path).then(function (resp) {
    return resp.data.results;
  });

  var factory = {};
  factory.all = function () {
    return programas;
  };
  factory.get = function (id) {
    return programas.then(function(){
      return utils.findById(programas, id);
    });
  };
  return factory;
}]);
