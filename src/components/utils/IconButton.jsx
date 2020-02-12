import React from 'react';

// MATERIAL UI - CORE
import IconButton from '@material-ui/core/IconButton';

const Button = ({ icon, ...props }) => {
  return (
    <IconButton {...props} color='inherit' size='small'>
      {icon}
    </IconButton>
  );
};

export default Button;
