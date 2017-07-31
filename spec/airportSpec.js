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

  it('accepts a plane', function(){
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });
});
