plane = new Plane('Boeing');
airport = new Airport('London Heathrow');
plane.land(airport);
console.log(airport.planes());
