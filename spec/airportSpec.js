describe('Airport', function(){
  var airport;
  var plane;
  beforeEach( function(){
    airport = new Airport;
    plane = new Plane;
  });

  it('has no planes to begin with', function() {
    expect(airport.planes()).toEqual([]);
  });
});
