plane1 = new Plane;
plane1.set("Boeing");

plane2 = new Plane;
plane2.set("Airbus");

airport = new Airport;

plane1.land(airport);
plane2.land(airport);

console.log(airport.planes());
// Why is console.log showing changed state? How to show current state?

plane.takeoff(airport);
console.log(airport.planes());
