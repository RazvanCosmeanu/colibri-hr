function tap(value, fn) {
  try {
    fn.apply(this, value);
  } finally {
    return fn;
  }
}

export default tap;
