const classNames = (...args) =>
  args
    .reduce((acc, curr) => {
      if (curr === null || curr === undefined) {
        return acc;
      }

      switch (typeof curr) {
        case 'string':
        case 'number':
          return `${acc} ${curr}`;
        case 'object':
          const classes = Object.keys(curr)
            .map((key) => {
              return curr[key] ? key : '';
            })
            .join(' ');

          return `${acc} ${classes}`;
        default:
          return acc;
      }
    }, '')
    .trim();

export default classNames;
