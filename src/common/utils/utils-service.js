angular.module('programadoraBrasil.utils.service', [

])

.factory('utils', function () {
  return {
    // Util for finding an object by its 'id' property among an array
    findById: function findById(a, id) {
      for (var i = 0; i < a.length; i++) {
        if (a[i].n == id) {return a[i];}
      }
      return null;
    }
  };
});
