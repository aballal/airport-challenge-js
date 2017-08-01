describe('Weather', function () {
  var weather;

  it('is usually sunny but occasionally it is stormy', function () {
    for(var i = 1; i <= 100; i++) {
      weather = new Weather;
      if (weather.isStormy()) break;
    }
    expect(weather.isStormy()).toBe(true);
  });
});
