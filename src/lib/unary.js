const unary = (fn) =>
  fn.length === 1
    ? fn
    : function (arg) {
        return fn.call(this, arg);
      };

export default unary;
