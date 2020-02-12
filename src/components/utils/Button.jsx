import React from 'react';

// MATERIAL UI - CORE
import Button from '@material-ui/core/Button';

const Buttons = ({ content, ...props }) => {
  return <Button {...props}>{content}</Button>;
};

export default Buttons;
