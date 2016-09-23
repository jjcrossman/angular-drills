angular.module( 'apiApp' )

.controller( 'apiCtrl', function ( $scope, apiService ) {


  function init () {

    apiService.getStarships().then( function ( response ) {
      console.log( response );
        $scope.starships = response.data.results;

    } )
    .catch( function ( error ) {
      error;
    } );

  }

  init();


} );
