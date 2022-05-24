import './ErrorBag.scss';

function ErrorBag({ errors = [], ...props }) {
  return errors.length ? (
    <div className='error-bag' {...props}>
      {errors.map((error, index) => {
        return (
          <div key={index} className='invalid-feedback error-item'>
            {error}
          </div>
        );
      })}
    </div>
  ) : null;
}

export default ErrorBag;
