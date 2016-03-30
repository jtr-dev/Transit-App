'use strict';

(function() {
  angular
    .module('transitApp')
    .controller('MainController', MainController);

  MainController.$inject = ['$scope', '$q', 'transitFactory'];

  function MainController($scope, $q, transit) {
    var vm = this;

    vm.trains = ['Carlisle', 'Mtn. View', 'Desperado'];
    vm.agencies = [];

    if (1 < 2) {
      getFeedsAsync();
    }



    function getFeedsAsync() {
      return $q(function(resolve, reject) {
        // transit.getLatestFeedVersion()
        // transit.getFeedVersions()
        // transit.getLocations()
        transit.getFeeds()
          .then(function(res) {
            // Bind data to the view model.

            vm.feeds = JSON.parse(res.data);
            console.log(res.data);

            resolve();
          }, function(err) {
            reject(err);
          });
      });
    }


  }
})();
