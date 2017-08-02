describe('Airport', function(){
  var airport;
  var plane;
  var weather;

  beforeEach( function(){
    weather = jasmine.createSpyObj('weather',['isStormy']);
    airport = new Airport('London Heathrow', weather);
    plane = jasmine.createSpyObj('plane',['location']);
    weather.isStormy.and.returnValue(false);
  });

  describe('constructor', function() {
    it('has a name', function() {
      expect(airport.name).toEqual('London Heathrow');
    });

    it('has no planes to begin with', function() {
      expect(airport.planes()).toEqual([]);
    });

    it('has a weather', function () {
      expect(airport.weather.isStormy()).toBe(false);
    });
  });

  describe('clears a plane for', function() {
    beforeEach(function() {
      airport.clearForLanding(plane);
    });

    it('landing', function(){
      expect(airport.planes()).toEqual([plane]);
    });

    it('takeoff', function() {
      airport.clearForTakeoff(plane);
      expect(airport.planes()).toEqual([]);
    });
  });

  describe('does not clear a plane for', function() {
    it('landing in stormy weather', function(){
      weather.isStormy.and.returnValue(true);
      expect(function() { airport.clearForLanding(plane); }).toThrowError('Cannot clear for landing in stormy weather');
    });

    it('takeoff in stormy weather', function() {
      airport.clearForLanding(plane);
      weather.isStormy.and.returnValue(true);
      expect(function() { airport.clearForTakeoff(plane); }).toThrowError('Cannot clear for takeoff in stormy weather');
    });
  });
});
