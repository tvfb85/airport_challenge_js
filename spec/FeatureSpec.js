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
});
