'use strict';

describe('Airport', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['land']);
  });

  it('has no planes by default', function() {
    expect(airport.planes()).toEqual([]);
  });

  it('clears planes for landing then proceeds to land plane', function() {
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });
});
