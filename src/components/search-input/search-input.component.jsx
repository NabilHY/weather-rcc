import { Component } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';

class SearchInput extends Component {
    handleClick = () => {
      const { onClick } = this.props;
      onClick();
    }

    handleChange = (e) => {
      const { onChange } = this.props;
      onChange(e);
    }

    render() {
      const { handleChange, handleClick } = this;
      return (
        <div>
          <input
            onChange={handleChange}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                handleClick();
              }
            }}
          />
          <AiOutlineSearch onClick={handleClick} />

        </div>
      );
    }
}

SearchInput.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchInput;
