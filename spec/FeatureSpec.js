'use strict';

describe('Feature Test', function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  // As an air traffic controller
  // To get passengers to a destination
  // I want to instruct a plan to land at an airport and confirm that it has landed

  it('instructs a plane to land', function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });


  // As an air traffic controller
  // So I can get passengers on the way to their destination
  // I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport
  it('instructs a plane to take off', function() {
    plane.land(airport);
    plane.take_off();
    expect(airport.planes()).not.toContain(plane);
  });

});
