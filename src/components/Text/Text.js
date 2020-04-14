import React from 'react';
import PropTypes from 'prop-types';

// TIP:  styled() function means that it under the hood produces a className that 
// it injects into our component that we need to set to our top-level element, for it to take effect.
const Text = ({ text, className }) => (
    <div className={className}>{text}</div>
  );
  Text.propTypes = {
    text: PropTypes.string,
    className: PropTypes.any,
  };
  export default Text;