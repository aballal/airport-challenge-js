'use strict';

var Airport = function(name, weather){
  this.name = name;
  this.weather = weather;
  this._planes = [];
};

Airport.prototype.planes = function(){
  return  this._planes;
};

Airport.prototype.clearForLanding = function(plane){
  if (this.weather.isStormy() == true) throw new Error('Cannot clear for landing in stormy weather');
  this._planes.push(plane);
};

Airport.prototype.clearForTakeoff = function(plane){
  if (this.weather.isStormy() == true) throw new Error('Cannot clear for takeoff in stormy weather');
  this._planes.splice(this._planes.indexOf(plane),1);
};
