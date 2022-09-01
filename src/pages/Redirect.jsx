import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Redirect({ to }) {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(to);
  });

  return null;
}

export default Redirect;
