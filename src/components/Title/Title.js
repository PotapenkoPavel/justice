import React from 'react';

import './Title.sass';

const Title = ({ children, type = 'h2', textAlign = 'left' }) => {
  const el = React.createElement(type, { className: `title ${textAlign}` }, children);

  return el;
};

export default Title;
