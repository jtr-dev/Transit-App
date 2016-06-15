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
             vm.feeds = res.data.results.feeds;
              console.table(res.data.results.feeds);
             console.table(res.data.results);
             // click the feed and pass the $index to id
            vm.getSelectedFeed = function(id){
              console.log(id);
               vm.feeds = res.data.results.feeds[id];
               console.log(res.data.results.feeds[id]);
               vm.fs = res.data.results.feeds[id].u.d;
               var zf = res.data.results.feeds[id].u.d;

                 function showError(elt, err) {
                   elt.innerHTML = "<p class='alert alert-danger'>" + err + "</p>";
                 }

                 function showContent(elt, type, content) {
                  //  elt.innerHTML = "<p class='alert alert-success'> " + content + "</p>";
                   elt.innerHTML =  "<p>" + content + "</p>";
                   vm.csv = content;

                 }

                 //=========================
                 // JSZipUtils
                 //=========================
                 JSZipUtils.getBinaryContent(zf, function(err, data) {
                   var elt = document.getElementById('jszip_utils');
                   if(err) {
                     showError(elt, err);
                     return;
                   }

                   try {
                     var zip = new JSZip(data);

                     showContent(elt, "" + data, zip.file('stops.txt').asText());  //var for all possible txt files
                   } catch(e) {
                     showError(elt, e);
                   }
                 });
            };
            resolve();
          }, function(err) {
            reject(err);
          });
      });
    }
  }
})();
