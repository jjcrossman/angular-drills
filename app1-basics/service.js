angular.module( 'basicApp' )

.service( 'basicService', function () {

  var test = "THIS IS THE SERVICE";

  this.getTest = function () {
    return test;
  }
} );
