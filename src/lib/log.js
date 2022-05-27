export const makeLogger =
  (loggerFn, namespace) =>
  (...args) => {
    loggerFn(`[${new Date().toISOString()} - ${namespace}]`, ...args);
  };

const defaultLoggerFn =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? console.log
    : () => {};

export const log = makeLogger(defaultLoggerFn, 'Colibri HR');

const trySerialize = (arg) => {
  try {
    return JSON.stringify(arg);
  } catch (e) {
    return arg;
  }
};

const logFunctionSuccess = (result, name) => {
  log(`Function call succeeded ${name} with results: ${trySerialize(result)}`);
};

// we could handle both cases the same with the async keyword or Promise.resolve
// but we don't want to transform any function into an async function
export const logFn = (fn) =>
  function (...args) {
    log(`Function call ${fn.name} with args: ${trySerialize(args)}`);

    try {
      const result = fn.apply(this, args);

      if (typeof result === 'object' && typeof result.then === 'function') {
        return result
          .then((res) => {
            logFunctionSuccess(res, fn.name);

            return res;
          })
          .catch((e) => {
            log(`Function call failed ${fn.name} with results: ${e}`);

            throw e;
          });
      } else {
        logFunctionSuccess(result, fn.name);
      }

      return result;
    } catch (e) {
      log(`Function call failed ${fn.name} with results: ${e}`);
      throw e;
    }
  };

export default log;
