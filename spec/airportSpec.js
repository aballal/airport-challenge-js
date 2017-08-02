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
    beforeEach( function(){
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
});
