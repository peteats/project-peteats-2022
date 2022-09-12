import React from 'react';
import PropTypes from 'prop-types';

import { useNProgress } from '@tanem/react-nprogress';

import Bar from './Bar';
import Spinner from './Spinner';
import Container from './Container';

function Progress({ isAnimating }) {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating,
  });
  // console.log('animationDuration', animationDuration);
  // console.log('isFinished', isFinished);
  // console.log('isAnimating', isAnimating);

  return (
    <Container animationDuration={animationDuration} isFinished={isFinished}>
      <Bar animationDuration={animationDuration} progress={progress} />
      <Spinner />
    </Container>
  );
}

Progress.propTypes = {
  isAnimating: PropTypes.bool.isRequired,
};

export default Progress;
