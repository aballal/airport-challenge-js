'use strict';

var Weather = function() {
  this._weather = this._randomWeather();
};

Weather.prototype.isStormy = function () {
  return this._weather === "Stormy" ? true : false;
};

Weather.prototype._randomWeather = function () {
  // A random number between 1 and 5 is generated
  // If this number is 5 weather is stormy, otherwise it is sunny
  return Math.floor((Math.random() * 5) + 1) === 5 ? "Stormy" : "Sunny";
};
