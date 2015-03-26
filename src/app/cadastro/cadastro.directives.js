angular.module( 'programadoraBrasil.cadastro.directives', [
])
.directive('comboEstado',function(){
  return {
    restrict: 'A',
    link: function() {
        new DgCidadesEstados({
          estado: document.getElementById('estado'),
          cidade: document.getElementById('cidade')
        });
    }
  };
})
.directive('buscaCEP',function(){
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
        element.bind('blur',function(){
          console.log(element.val());
        });
    }
  };
})

;

