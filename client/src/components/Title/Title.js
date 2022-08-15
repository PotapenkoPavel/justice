import React from 'react';

import './Title.sass';

const Title = ({ children, type = 'h2', textAlign = 'left' }) => (
  React.createElement(type, {
    className: `title ${textAlign}`,
    style: {
      textAlign,
    },
  }, children)
);

export default Title;
