describe('Airport', function(){
  var airport;
  var plane;
  beforeEach( function(){
    airport = new Airport;
    plane = new Plane;
  });

  it('lands a plane', function() {
    plane.land(airport)
    expect(airport.planes).toContain(plane);
  });
});
