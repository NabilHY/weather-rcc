import React, { Component } from 'react';
import SearchBox from './components/search-input/search-box.component';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const apiKey = '190a729e56399683fb4a81428b63841f';
    const { cityName } = this.state;
    if (prevState.cityName !== cityName && cityName !== '') {
      fetch()
    }
  }

  handleDataChange = (data) => {
    this.setState({
      cityName: data,
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBox onSearchChange={handleDataChange} />
      </div>
    );
  }
}

export default App;
