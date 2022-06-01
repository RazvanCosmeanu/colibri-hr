import './Table.scss';

import classNames from '../../classNames';

const HeaderSortButton = ({ label, sortId, sortOrder, setSortBy, sortBy }) => {
  const newOrder = sortOrder === 'ASC' ? 'DESC' : 'ASC';
  const icon = sortOrder === 'ASC' ? '˄' : '˅';

  return (
    <div className='header-button' onClick={() => setSortBy(sortId, newOrder)}>
      {label}
      {sortBy === sortId && <div className={`sort-icon active`}>{icon}</div>}
    </div>
  );
};

const Table = (props) => {
  const {
    getColumns,
    data = [],
    sortOrder,
    setSortBy,
    sortBy,
    pageSize,
    setPageSize,
    page,
    setPage,
    count,
    onRowClick,
    ...restProps
  } = props;

  const columns = getColumns(props);

  return (
    <table className={classNames('table-component', restProps.className)}>
      <thead>
        <tr className='table-row table-header'>
          {columns.map((column, idx) => (
            <th
              key={`header-${idx}`}
              className={classNames('table-cell', column.headerClassName)}
            >
              {!!column.sortId ? (
                <HeaderSortButton
                  label={column.title}
                  sortId={column.sortId}
                  sortOrder={sortOrder}
                  setSortBy={setSortBy}
                  sortBy={sortBy}
                />
              ) : (
                column.title
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((record) => (
          <tr key={record.id} className={'table-row'}>
            {columns.map((column, idx) => (
              <td
                key={`${record.id}-${idx}`}
                className={classNames('table-cell', column.className)}
              >
                {column.render(record)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
