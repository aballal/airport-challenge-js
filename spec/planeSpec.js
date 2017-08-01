describe('Plane', function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane;
    airport = jasmine.createSpyObj('airport',['clearForLanding','clearForTakeoff']);
  });

  it('can land at an airport', function() {
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });

  it('can take off from an airport', function() {
    plane.takeoff(airport);
    expect(airport.clearForTakeoff).toHaveBeenCalledWith(plane);
  });

  it('cannot land if landed already', function() {
    plane.land(airport);
    expect(function() {
      plane.land();
    }).toThrowError('Cannot land, already landed!');
  });
});
