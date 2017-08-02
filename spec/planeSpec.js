describe('Plane', function() {
  var plane;
  var airport;
  var weather;

  beforeEach(function() {
    weather = jasmine.createSpyObj('weather',['isStormy']);
    airport = jasmine.createSpyObj('airport',['weather','clearForLanding','clearForTakeoff']);
    plane = new Plane('Boeing');
  });

  describe('constructor', function() {
    it('has a name', function() {
      expect(plane.name).toEqual('Boeing');
    });

    it('is in air', function() {
      expect(plane.location).toEqual('In Air');
    });
  });

  describe ('landing', function() {
    it('can land at an airport', function() {
      plane.land(airport);
      expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
    });

    it('cannot land if already landed', function() {
      plane.land(airport);
      expect(function() { plane.land(airport); } ).toThrowError('Cannot land, already landed!');
    });
  });

  describe ('takeoff', function() {
    it('can take off from an airport', function() {
      plane.land(airport);
      plane.takeoff(airport);
      expect(airport.clearForTakeoff).toHaveBeenCalledWith(plane);
    });

    it('cannot take off if already in air', function() {
      expect(function() { plane.takeoff(); } ).toThrowError('Cannot takeoff, already in air!');
    });
  });
});
