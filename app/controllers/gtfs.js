'use strict';
(function() {
  /*
    Methods for Controller
  */
  function gtfsController ($scope) {
    var vm = this;

    vm.hello = 'Hello World';



  }
  /*
  Bind Controller to the View
  */
  angular
    .module('transitApp')
    .controller('gtfsController', gtfsController);
  gtfsController.$inject = ['$scope'];
})();
