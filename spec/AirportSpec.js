'use strict';

describe('Airport', function() {
  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    weather = jasmine.createSpyObj('weather', ['isStormy']);
    airport = new Airport(weather);
    plane = jasmine.createSpy('plane');
  });

  it('has no planes by default', function() {
    expect(airport.planes()).toEqual([]);
  });

  describe('under normal conditions', function() {

    beforeEach(function() {
      weather.isStormy.and.returnValue(false);
    });

      it('clears planes for landing then proceeds to land plane', function() {
        airport.clearForLanding(plane);
        expect(airport.planes()).toEqual([plane]);
      });

      it('clears planes for take_off then proceeds to take_off plane', function() {
        airport.clearForTakeOff(plane);
        expect(airport.planes()).toEqual([]);
      });

  })

  describe('under stormy condititons', function() {

    beforeEach(function() {
      weather.isStormy.and.returnValue(true);
    });

      it('does not clear planes for takeoff', function() {
        expect(function() { airport.clearForTakeOff(plane);}).toThrowError('cannot takeoff during storm');
      });

      it('does not clear planes for landing', function() {
        expect(function() { airport.clearForLanding(plane);}).toThrowError('cannot land during storm');
      });

  });
});
