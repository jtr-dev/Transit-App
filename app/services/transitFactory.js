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


    var baseUrl = 'http://transportapi.com/v3/uk/train/stations/near.json?lat=51.527789&lon=-0.102323&page=3&rpp=10';

    function getLocations(station_code) {
      var request = {
        method: 'GET',
        url: 'http://transportapi.com/v3/uk/train/station/' +station_code+ '/live?' + app_id + app_key

      };
      return $http(request);
    }

    function getFeeds() {
      var request = {
        method: 'GET',
        url: baseUrl + app_id + app_key
      };
      return $http(request);
    }




    // function getFeeds(pageNum) {
    //   var request = {
    //     method: 'GET',
    //     url: baseUrl + '/v1/getFeeds' + '?key=' + key + '&page=' + pageNum
    //   };
    //   return $http(request);
    // }

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
