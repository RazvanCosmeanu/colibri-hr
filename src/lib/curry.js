const curry = (fn) =>
  function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...rest) {
        return curried.apply(this, args.concat(rest));
      };
    }
  };

export default curry;
