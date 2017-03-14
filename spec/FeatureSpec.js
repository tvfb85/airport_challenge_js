'use strict';

describe('Feature Test', function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  describe('under normal weather conditions', function() {

    beforeEach(function() {
      spyOn(Math, 'random').and.returnValue(0);
    });

    // As an air traffic controller
    // To get passengers to a destination
    // I want to instruct a plan to land at an airport and confirm that it has landed

    it('instructs a plane to land', function() {
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    });

    // As an air traffic controller
    // So I can get passengers on the way to their destination
    // I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport

    it('instructs a plane to take off', function() {
      plane.land(airport);
      plane.take_off(airport);
      expect(airport.planes()).not.toContain(plane);
    });

  });

  describe('under stormy conditions', function() {

    // As an air traffic controller
    // To ensure safety
    // I want to prevent landing when weather is stormy

    it('prevents landing when stormy', function() {
      spyOn(Math, 'random').and.returnValue(1);
      expect(function() { plane.land(airport); }).toThrowError('cannot land during storm');
      expect(airport.planes()).not.toContain(plane);
    });

    // As an air traffic controller
    // To ensure safety
    // I want to prevent takeoff when weather is stormy

    it('prevents takeoff when stormy', function() {
      spyOn(Math, 'random').and.returnValue(0);
      plane.land(airport);
      spyOn(airport._weather, 'isStormy').and.returnValue(true);
      expect(function() { plane.take_off(airport); }).toThrowError('cannot takeoff during storm');
      expect(airport.planes()).toContain(plane);
    });

  });

});
