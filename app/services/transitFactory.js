(function() {

  angular
    .module('transitApp')
    .factory('transitFactory', transitFactory);

  function transitFactory($log, $http) {

    var transit = {};

    transit.getLocations = getLocations;
    transit.getFeeds = getFeeds;


    var baseUrl = 'http://transportapi.com/v3/uk/train/stations/';

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
        url: baseUrl + 'near.json?lat=51.527789&lon=-0.102323&page=3&rpp=10/' + app_id + app_key
      };
      return $http(request);
    }


    return transit;
  }

})();
