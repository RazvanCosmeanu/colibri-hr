const debounce = (fn, time = 200) => {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => fn.apply(this, args), time);
  };
};

export default debounce;
