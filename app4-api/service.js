angular.module( 'apiApp' )

.service( 'apiService', function ( $http, $q, starshipsUrl ) {

  this.getStarships = function () {

    var sexyTime = $q.defer();
    $http.get(starshipsUrl).then( function ( response ) {
      if ( response.status === 200 ) {
        sexyTime.resolve( response );
      } else {
        sexyTime.reject( alert("Your shit is fucked") );
      }
    } );
    return sexyTime.promise;

  };



} );
