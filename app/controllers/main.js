'use strict';

(function() {
  angular
    .module('transitApp')
    .controller('MainController', MainController);

  MainController.$inject = ['$scope', '$q', 'transitFactory'];

  function MainController($scope, $q, transit) {
    var vm = this;
    vm.feeds = [];



    getFeedsAsync();
    function getFeedsAsync() {
      return $q(function(resolve, reject) {
        //  transit.getLatestFeedVersion()
        //  transit.getFeedVersions()
        //  transit.getLocations()
        transit.getFeeds()
          .then(function(res) {
            // Bind data to the view model.
             vm.feeds = res;
             console.table(res);
             vm.getCode = function(code){
               transit.getLocations(code);
              //  console.log(transit.getLocations(code));
               vm.liveTable = transit.getLocations(code);
               console.log(transit.getLocations(code));
             }
             vm.getCode(res.data.stations[0].station_code);

             // click the feed and pass the $index to id
            vm.getSelectedFeed = function(id){
              // console.log(id);
               vm.feeds = res.data.results.feeds[id];
               vm.fs = res.data.results.feeds[id].u.d;
            };
            resolve();
          }, function(err) {
            reject(err);
          });
      });
    }
  }
})();
