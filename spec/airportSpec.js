describe('Airport', function(){
  var airport;
  var plane;
  beforeEach( function(){
    airport = new Airport;
    plane = jasmine.createSpyObj("plane",["land"]);
  });

  it('has no planes to begin with', function() {
    expect(airport.planes()).toEqual([]);
  });

  it('clears a plane for landing', function(){
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

  it('clears a plane for takeoff', function() {
    airport.clearForLanding(plane);
    airport.clearForTakeoff(plane);
    expect(airport.planes()).toEqual([]);
  });
});
