import './StaffTable.scss';

import Table from '../../../lib/components/Table/Table';
import { Link } from 'react-router-dom';

const getStaffTableColumns = (props) => [
  {
    title: 'ID',
    // sortId: 'id',
    className: 'id-cell',
    render: (record) => `#${record.id}`,
  },
  {
    title: 'First Name',
    // sortId: 'firstName',
    className: 'first-name-cell',
    render: (record) => record.firstName,
  },
  {
    title: 'Last Name',
    // sortId: 'lastName',
    className: 'last-name-cell',
    render: (record) => record.lastName,
  },
  {
    title: 'Email',
    // sortId: 'email',
    className: 'email-cell',
    render: (record) => record.email,
  },
  {
    title: 'DOB',
    // sortId: 'dateOfBirth',
    className: 'email-cell',
    render: (record) => record.dateOfBirth,
  },
  {
    title: 'Actions',
    className: 'actions-cell',
    headerClassName: 'actions-header',
    render: (record) => (
      <div className='actions-cell'>
        <Link className='link' to={`${record.id}`}>
          VIEW
        </Link>
        <Link className='link' to={`${record.id}/edit`}>
          EDIT
        </Link>
      </div>
    ),
  },
];

const StaffTable = (props) => (
  <Table getColumns={getStaffTableColumns} className='staff-table' {...props} />
);

export default StaffTable;
