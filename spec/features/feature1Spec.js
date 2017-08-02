var plane = new Plane('Boeing');
var airport = new Airport('London Heathrow');

plane.land(airport);
console.log(airport.planes());
