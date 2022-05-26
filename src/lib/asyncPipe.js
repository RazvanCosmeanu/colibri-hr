const asyncPipe =
  (...fns) =>
  (val) =>
    fns.reduce((acc, fn) => acc.then(fn), Promise.resolve(val));

export default asyncPipe;
