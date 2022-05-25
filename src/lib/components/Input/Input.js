import React from 'react';
import classNames from '../../classNames';
import ErrorBag from '../ErrorBag/ErrorBag';
import './Input.scss';

const Input = React.forwardRef((props, ref) => {
  const {
    errors = [],
    label,
    renderInsert,
    containerClassName,
    className,
    ...inputProps
  } = props;

  const classes = classNames('input-component', className, {
    'is-invalid': errors.length,
    'with-insert': renderInsert,
  });

  const containerClasses = classNames('input-container', containerClassName);

  return (
    <div className={containerClasses}>
      {label && (
        <label className='input-label' htmlFor={inputProps.name}>
          {label}
        </label>
      )}

      {renderInsert && <span className='input-insert'>{renderInsert()}</span>}
      <input
        ref={ref}
        data-testid='input-element'
        className={classes}
        {...inputProps}
      />

      <ErrorBag errors={errors} />
    </div>
  );
});

export default Input;
