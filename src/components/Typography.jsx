import React from 'react';

// MATERIAL UI - CORE
import Typography from '@material-ui/core/Typography';

const Writing = ({ content, ...props }) => {
  return <Typography {...props}>{content}</Typography>;
};

export default Writing;
