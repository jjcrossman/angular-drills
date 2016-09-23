angular.module( 'basicApp' )

.controller( 'basicCtrl', function ( $scope, basicService ) {
  $scope.test = "THIS IS CONTROLLER";
  $scope.getTest = basicService.getTest();
} );
