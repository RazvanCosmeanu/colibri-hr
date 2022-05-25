export const makeLogger =
  (loggerFn, namespace) =>
  (...args) => {
    loggerFn(`[${new Date().toISOString()} - ${namespace}]`, ...args);
  };

export const log = makeLogger(console.log, 'Colibri HR');

export default log;
