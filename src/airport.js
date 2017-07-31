'use strict';

var Airport = function(){
  this._hanger = [];
};

Airport.prototype.planes = function(){
  return  this._hanger;
};

Airport.prototype.clearForLanding = function(plane){
  this._hanger.push(plane);
};
