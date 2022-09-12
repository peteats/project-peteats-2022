import React from 'react';
import PropTypes from 'prop-types';

function Container({ animationDuration, isFinished, children }) {
  return (
    <div
      style={{
        opacity: isFinished ? 0 : 1,
        pointerEvents: 'none',
        transition: `opacity ${animationDuration}ms linear`,
      }}
    >
      {children}
    </div>
  );
}

Container.defaultProps = {
  animationDuration: 1,
  isFinished: true,
};

Container.propTypes = {
  animationDuration: PropTypes.number,
  isFinished: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Container;
