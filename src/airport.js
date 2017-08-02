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
  this._planes.push(plane);
};

Airport.prototype.clearForTakeoff = function(plane){
  this._planes.splice(this._planes.indexOf(plane),1);
};
