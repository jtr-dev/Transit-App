(function() {

  angular
    .module('transitApp')
    .factory('transitFactory', transitFactory);

  function transitFactory($log, $http) {

    var transit = {};

    transit.getLocations = getLocations;
    transit.getFeeds = getFeeds;
    transit.getLatestFeedVersion = getLatestFeedVersion;
    transit.getFeedVersions = getFeedVersions;


    var baseUrl = 'http://api.transitfeeds.com';

    function getLocations() {
      var request = {
        method: 'GET',
        url: baseUrl + '/v1/getLocations' + '?key=' + key
      };
      return $http(request);
    }

    function getFeeds(pageNum) {
      var request = {
        method: 'GET',
        url: baseUrl + '/v1/getFeeds' + '?key=' + key + '&page=' + pageNum
      };
      return $http(request);
    }

    function getLatestFeedVersion() {
      var request = {
        method: 'GET',
        url: baseUrl + '/v1/getLatestFeedVersion' + '?key=' + key
      };
      return $http(request);
    }

    function getFeedVersions() {
      var request = {
        method: 'GET',
        url: baseUrl + '/v1/getFeedVersions' + '?key=' + key
      };
      return $http(request);
    }

    return transit;
  }

})();
