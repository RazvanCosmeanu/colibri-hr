import './StaffList.scss';

import Button from '../../../lib/components/Button/Button';
import SearchInput from '../../../lib/components/SearchInput/SearchInput';
import StaffTable from './StaffTable';
import log from '../../../lib/log';

const data = [
  {
    id: 1,
    firstName: 'Loutitia',
    lastName: 'Steaning',
    email: 'lsteaning0@usnews.com',
    dateOfBirth: '13/05/1978',
    industry: 'n/a',
    salary: 98803.83,
    years_of_experience: 6.6,
  },
  {
    id: 2,
    firstName: 'Ewen',
    lastName: 'McLewd',
    email: 'emclewd1@bbb.org',
    dateOfBirth: '15/12/1991',
    industry: 'Telecommunications Equipment',
    salary: 144392.9,
    years_of_experience: 2.8,
  },
  {
    id: 3,
    firstName: 'Park',
    lastName: null,
    email: null,
    dateOfBirth: '11/06/1993',
    industry: 'n/a',
    salary: 101773.01,
    years_of_experience: 1.8,
  },
  {
    id: 4,
    firstName: 'Benson',
    lastName: 'Possek',
    email: 'bpossek3@devhub.com',
    dateOfBirth: '01/03/1993',
    industry: 'n/a',
    salary: 141822.61,
    years_of_experience: 3.7,
  },
  {
    id: 5,
    firstName: 'Derril',
    lastName: 'Santorini',
    email: 'dsantorini4@wp.com',
    dateOfBirth: '10/10/1991',
    industry: 'Electrical Products',
    salary: 144774.96,
    years_of_experience: 4.1,
  },
  {
    id: 6,
    firstName: 'Lisa',
    lastName: 'Cobb',
    email: 'lcobb5@trellian.com',
    dateOfBirth: '22/02/1999',
    industry: 'Major Pharmaceuticals',
    salary: 116433.83,
    years_of_experience: 4.3,
  },
  {
    id: 7,
    firstName: 'Erek',
    lastName: 'Corbould',
    email: 'ecorbould6@blog.com',
    dateOfBirth: '10/07/1961',
    industry: 'Steel/Iron Ore',
    salary: 72515.73,
    years_of_experience: 3.0,
  },
  {
    id: 8,
    firstName: 'Stacee',
    lastName: 'McAdam',
    email: 'smcadam7@pen.io',
    dateOfBirth: '26/04/1995',
    industry: 'Computer Software: Prepackaged Software',
    salary: 79521.66,
    years_of_experience: 2.4,
  },
  {
    id: 9,
    firstName: 'Anna-diane',
    lastName: 'Urquhart',
    email: 'aurquhart8@reuters.com',
    dateOfBirth: '09/10/1968',
    industry: 'Precious Metals',
    salary: 55216.7,
    years_of_experience: 4.0,
  },
  {
    id: 10,
    firstName: 'Goldia',
    lastName: 'Axelby',
    email: 'gaxelby9@bizjournals.com',
    dateOfBirth: '06/05/1986',
    industry: 'Business Services',
    salary: 58835.13,
    years_of_experience: 6.9,
  },
];

export default function StaffList() {
  return (
    <div className='table-container staff-list'>
      <section className='table-controls'>
        <SearchInput onChange={log} />
        <div className='table-pagination'>
          <Button>{'< Previous'}</Button>
          <Button>{'Next >'}</Button>
        </div>
      </section>
      <section className='table'>
        <StaffTable data={data} setSortBy={log} />
      </section>
    </div>
  );
}
