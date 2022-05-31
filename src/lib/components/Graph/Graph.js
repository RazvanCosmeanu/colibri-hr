import './Graph.scss';

import id from '../../id';

const getBarWidth = (max, value) => {
  return Math.round((value * 100) / max);
};

export default function Graph({ data, formatValue = id }) {
  const max = Math.max(...Object.values(data));

  return (
    <div className='graph-component'>
      {Object.keys(data).map((key, index) => {
        return (
          <div className='graph-entry' key={index}>
            <div className='graph-key' title={key}>{`(${formatValue(
              data[key],
            )}) ${key}`}</div>
            <div className='graph-value-container'>
              <div
                className='graph-value'
                style={{ width: `${getBarWidth(max, data[key])}%` }}
                title={`(${formatValue(data[key])}) ${key}`}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
