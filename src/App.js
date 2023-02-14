import React, { Component } from 'react';
import SeachInput from './components/search-input/search-input.component';
import WeatherInfo from './components/weather-info/weather-info.component';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      weatherObj: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=190a729e56399683fb4a81428b63841f')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          weatherObj: data,
        });
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      cityName: value,
    });
  }

  handleClick = () => {
    const { cityName } = this.state;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=190a729e56399683fb4a81428b63841f`)
      .then((response) => response.json())
      .then((data) => this.setState({
        weatherObj: data,
      }))
      .catch((error) => console.log(error));
  }

  render() {
    const { weatherObj } = this.state;

    const { handleChange, handleClick } = this;

    if (!weatherObj) {
      return <p>...loading</p>;
    }

    return (
      <div className="App">
        <SeachInput onChange={handleChange} onClick={handleClick} />
        <WeatherInfo weatherObj={weatherObj} />
      </div>
    );
  }
}

export default App;
