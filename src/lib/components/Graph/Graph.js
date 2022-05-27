import './Graph.scss';

// we can take each series and pretty format (eg: currency), but I have to write some tests
// and we'll have to assume this is readable

export default function Graph({ data }) {
  const getBarWidth = (max, value) => {
    return Math.round((value * 100) / max);
  };

  const max = Math.max(...Object.values(data));

  return (
    <div className='graph-component'>
      {Object.keys(data).map((key, index) => {
        return (
          <div className='graph-entry' key={index}>
            <div
              className='graph-key'
              title={key}
            >{`(${data[key]}) ${key}`}</div>
            <div className='graph-value-container'>
              <div
                className='graph-value'
                style={{ width: `${getBarWidth(max, data[key])}%` }}
                title={`(${data[key]}) ${key}`}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
