'use strict';
(function() {
  /*
    Methods for Controller
  */
  function GTFSController ($scope) {
    var vm = this;



        getFeedsAsync();

        function getFeedsAsync() {
          return $q(function(resolve, reject) {
            transit.getFeeds()
              .then(function(res) {
                // Bind data to the view model.
                //vm.getSelectedFeed = getSelectedFeed;
                    function getSelectedFeed(id){
                      vm.feeds = res.data.results.feeds[id];
                      console.log(res.data.results.feeds[id]);
                    };
                resolve();
              }, function(err) {
                reject(err);
              });
          });
        }


    (function () {

  function showError(elt, err) {
    elt.innerHTML = "<p class='alert alert-danger'>" + err + "</p>";
  }

  function showContent(elt, type, content) {
    elt.innerHTML = "<p class='alert alert-success'>loaded ! (as a " + type + ")<br/>" +
      "Content = " + content + "</p>";
  }

  //=========================
  // JSZipUtils
  //=========================
  JSZipUtils.getBinaryContent('/jszip/test/ref/text.zip', function(err, data) {
    var elt = document.getElementById('jszip_utils');
    if(err) {
      showError(elt, err);
      return;
    }

    try {
      var zip = new JSZip(data);
      showContent(elt, "" + data, zip.file("Hello.txt").asText());
    } catch(e) {
      showError(elt, e);
    }
  });

})();

  }
  /*
  Bind Controller to the View
  */
  angular
    .module('transitApp')
    .controller('GTFSController', GTFSController);
  GTFSController.$inject = ['$scope'];
})();
