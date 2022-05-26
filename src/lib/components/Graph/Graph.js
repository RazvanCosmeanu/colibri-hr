import './Graph.scss';

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
            <div className='graph-key'>{`${key} (${data[key]})`}</div>
            <div className='graph-value-container'>
              <div
                className='graph-value'
                style={{ width: `${getBarWidth(max, data[key])}%` }}
                title={data[key]}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
