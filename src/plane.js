'use strict';

var Plane = function() {
  this.name = "";
  this.location = "In Air";
};

Plane.prototype.name = function() {
  return this.name;
};

Plane.prototype.set = function(name) {
  this.name = name;
};

Plane.prototype.land = function(airport){
  if (this.location !== "In Air") {
    throw new Error('Cannot land, already landed!');
  }
  this.location = airport;
  airport.clearForLanding(this);
};

Plane.prototype.takeoff = function (airport){
  airport.clearForTakeoff(this);
};
