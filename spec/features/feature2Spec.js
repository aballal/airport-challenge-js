'use strict';

var plane1 = new Plane('Boeing');
var plane2 = new Plane('Airbus');

airport = new Airport('London Heathrow');

plane1.land(airport);
plane2.land(airport);

console.log(airport.planes());

plane1.takeoff(airport);
console.log(airport.planes());
