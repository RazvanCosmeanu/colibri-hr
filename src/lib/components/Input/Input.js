import './Input.scss';

import ErrorBag from '../error-bag/ErrorBag';

const Input = React.forwardRef((props, ref) => {
  const { errors = [], label, renderInsert, className, ...inputProps } = props;

  const classes = classNames('qm-input', className, {
    'is-invalid': errors.length,
    'with-insert': renderInsert,
  });

  const classes = Object.assign(
    { [className]: true },
    { 'is-invalid': errors.length, 'with-insert': renderInsert },
  );

  // const containerClasses = classNames('qm-input-container', containerClassName);

  return (
    <div className='input-container'>
      {label && (
        <label className='input-label' htmlFor={inputProps.name}>
          {label}
        </label>
      )}

      {renderInsert && (
        <span className='insert left-insert'>{renderInsert()}</span>
      )}
      <input
        ref={ref}
        data-testid='input'
        className={classes}
        {...inputProps}
      />

      <ErrorBag errors={errors} />
    </div>
  );
});

export default Input;
