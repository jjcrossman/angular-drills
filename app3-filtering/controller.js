angular.module( 'filterApp' )

.controller( 'filterCtrl', function ( $scope, filterService ) {


  $scope.contacts = filterService.getContacts();




} );
