import './Button.scss';

import React from 'react';
import classNames from '../../classNames';

const Button = React.forwardRef(({ className, ...props }, ref) => {
  const classes = classNames('button-component', className);

  return (
    <button className={classes} {...props} ref={ref}>
      {props.children}
    </button>
  );
});

export default Button;
