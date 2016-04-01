'use strict';

(function() {
  angular
    .module('transitApp')
    .controller('MainController', MainController);

  MainController.$inject = ['$scope', '$q', 'transitFactory'];

  function MainController($scope, $q, transit) {
    var vm = this;
    vm.feeds = [];

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

            vm.feeds = res.data.results.feeds;
            console.table(res.data.results.feeds);

            resolve();
          }, function(err) {
            reject(err);
          });
      });
    }


  }
})();
