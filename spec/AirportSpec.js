'use strict';

describe('Airport', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['land', 'take_off']);
  });

  it('has no planes by default', function() {
    expect(airport.planes()).toEqual([]);
  });

  it('clears planes for landing then proceeds to land plane', function() {
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

  it('can check for stormy conditions', function(){
    expect(airport.isStormy()).toBeFalsy();
  });

  describe('under stormy condititons', function() {
    it('does not clear planes for takeoff', function() {
      spyOn(airport, 'isStormy').and.returnValue(true);
      expect(function() { airport.clearForTakeOff(plane)}).toThrowError('cannot takeoff during storm');
    });
  });
});
