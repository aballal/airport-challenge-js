'use strict';

var Plane = function(name) {
  this.name = name;
  this.location =  'In Air';
};

Plane.prototype.name = function() {
  return this.name;
};

Plane.prototype.land = function(airport){
  if (this.location !== 'In Air') throw new Error('Cannot land, already landed!');
  airport.clearForLanding(this);
  this.location = airport;
};

Plane.prototype.takeoff = function (airport){
  if (this.location === 'In Air') throw new Error('Cannot takeoff, already in air!');
  airport.clearForTakeoff(this);
  this.location = 'In Air';
};
