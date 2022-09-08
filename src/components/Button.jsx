import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { onClick, disabled, children } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="m-2 rounded bg-[#FA3] py-2 px-3
      text-center text-xs font-bold text-white transition-all hover:bg-gray-200"
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  disabled: 'disabled',
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  disabled: PropTypes.string,
};

export default Button;
