'use strict';

var Airport = function(){
  this._  planes = [];
};

Airport.prototype.planes = function(){
  return  this._planes;
};

Airport.prototype.clearForLanding = function(plane){
  this._planes.push(plane);
};
