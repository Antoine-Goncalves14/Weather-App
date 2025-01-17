const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=8d789f6985ef28e2a9b7c71e54225beb&query=' +
    latitude +
    ',' +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service !', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ' observed at ' +
          body.current.observation_time +
          '. It is currently ' +
          body.current.temperature +
          ' degrees out. There is a ' +
          body.current.precip +
          '% chance of rain.'
      );
    }
  });
};

module.exports = forecast;
