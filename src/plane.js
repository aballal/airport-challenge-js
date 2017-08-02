'use strict';

var Plane = function(name, location) {
  this.name = name;
  this.location = (location === undefined) ? "In Air" : location;
};

Plane.prototype.name = function() {
  return this.name;
};

Plane.prototype.land = function(airport){
  if (this.location !== "In Air") throw new Error('Cannot land, already landed!');
  airport.clearForLanding(this);
  this.location = airport;
};

Plane.prototype.takeoff = function (airport){
  if (this.location === "In Air") {
    throw new Error('Cannot takeoff, already in air!');
  }
  airport.clearForTakeoff(this);
};
