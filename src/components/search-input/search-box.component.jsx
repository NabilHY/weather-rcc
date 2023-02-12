import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';

class SearchBox extends Component {
  constructor() {
    super();
    this.state = {
      searchField: '',
    };
    this.onSearchChanged = this.onSearchChange.bind(this);
  }

  onSearchChange = (e) => {
    const { value } = e.target;
    const { searchField } = this.state;
    const { onSearchChange } = this.props;
    this.setState({
      searchField: value,
    }, () => {
      onSearchChange(searchField);
    });
  };

  render() {
    return (
      <div>
        <h1>Search Box</h1>
        <AiOutlineSearch />
        <input onChange={this.onSearchChange} />
      </div>
    );
  }
}

SearchBox.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
};

export default SearchBox;
