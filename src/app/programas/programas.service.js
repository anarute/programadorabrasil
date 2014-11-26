angular.module( 'programadoraBrasil.programas.service' , [

])

// A RESTful factory for retrieving programas from 'programas.json'
.factory('programas', ['$http', 'utils', function ($http, utils) {
  var path = 'assets/json/programas.json';
  var programas = $http.get(path).then(function (resp) {
    return resp.data.programas;
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
