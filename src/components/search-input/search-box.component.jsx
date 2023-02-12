import React, { Component } from 'react';

class SearchBox extends Component {
  constructor() {
    super();
    this.state = {
      searchField: '',
    };
  }

  render() {
    const { searchField } = this.state;
    return (
      <div>
        <h1>Search Box</h1>
        <p>{searchField}</p>
      </div>
    );
  }
}

export default SearchBox;
