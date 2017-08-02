describe('Plane', function() {
  var plane, landedPlane;
  var airport;
  var weather;

  beforeEach(function() {
    weather = jasmine.createSpyObj('weather',['isStormy']);
    airport = jasmine.createSpyObj('airport',['weather','clearForLanding','clearForTakeoff']);
    plane = new Plane("Boeing");
    landedPlane = new Plane("Airbus", airport);
  });

  describe('constructor', function() {
    it('has a name', function() {
      expect(plane.name).toEqual('Boeing');
    });

    it('is in air unless an airport is given', function() {
      expect(plane.location).toEqual('In Air');
    });

    it('can be at an airport', function() {
      expect(landedPlane.location).toEqual(airport);
    });
  });

  describe ('landing', function() {
    it('can land at an airport', function() {
      plane.land(airport);
      expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
    });

    it('cannot land if already landed', function() {
      expect(function() { landedPlane.land(airport); } ).toThrowError('Cannot land, already landed!');
    });
  });

  describe ('takeoff', function() {
    it('can take off from an airport', function() {
      landedPlane.takeoff(airport);
      expect(airport.clearForTakeoff).toHaveBeenCalledWith(landedPlane);
    });

    it('cannot take off if already in air', function() {
      expect(function() { plane.takeoff(); } ).toThrowError('Cannot takeoff, already in air!');
    });
  });
});
