plane1 = new Plane('Boeing');
plane2 = new Plane('Airbus');

airport = new Airport('London Heathrow');

plane1.land(airport);
plane2.land(airport);

console.log(airport.planes());
// Why is console.log showing changed state? How to show current state?

plane.takeoff(airport);
console.log(airport.planes());
