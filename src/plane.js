'use strict';

var Plane = function() {
  this.name = "";
};

Plane.prototype.name = function() {
  return this.name;
};

Plane.prototype.set = function(name) {
  this.name = name;
};

Plane.prototype.land = function(airport){
  airport.clearForLanding(this);
};

Plane.prototype.takeoff = function (airport){
  airport.clearForTakeoff(this);
};
