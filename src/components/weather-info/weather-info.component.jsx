import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WeatherInfo extends Component {
  shouldComponentUpdate(nextProps) {
    const { weatherObj } = this.props;
    return nextProps.weatherObj !== weatherObj;
  }

  render() {
    const { weatherObj } = this.props;
    const {
      weather: [{ description: weatherDescription }],
      main: {
        temp: temperature,
        feels_like: feelsLike,
        temp_min: tempMin,
        temp_max: tempMax,
        pressure,
        humidity,
      },
      wind: {
        speed,
      },
      name: city,
      sys: {
        country,
      },
    } = weatherObj;
    return (
      <div>
        <p>
          City:
          {' '}
          {city}
          {' '}
          {country}
        </p>
        <p>
          Weather:
          {' '}
          {weatherDescription}
        </p>
        <p>
          Temperature:
          {' '}
          {temperature}
        </p>
        <p>
          Feels like:
          {' '}
          {feelsLike}
        </p>
        <p>
          Minimum temperature:
          {' '}
          {tempMin}
        </p>
        <p>
          Maximum temperature:
          {' '}
          {tempMax}
        </p>
        <p>
          Wind speed:
          {' '}
          {speed}
        </p>
        <p>
          Pressure:
          {' '}
          {pressure}
        </p>
        <p>
          Humidity:
          {' '}
          {humidity}
        </p>
      </div>
    );
  }
}

WeatherInfo.propTypes = {
  weatherObj: PropTypes.shape({
    weather: PropTypes.string.isRequired,
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
      feels_like: PropTypes.number.isRequired,
      temp_min: PropTypes.number.isRequired,
      temp_max: PropTypes.number.isRequired,
      pressure: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
    sys: PropTypes.shape({
      country: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default WeatherInfo;
