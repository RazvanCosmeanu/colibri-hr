import './StaffList.scss';

import Button from '../../../lib/components/Button/Button';
import SearchInput from '../../../lib/components/SearchInput/SearchInput';
import StaffTable from './StaffTable';

import useStaffList from '../useStaffList';

export default function StaffList() {
  const vm = useStaffList();

  return (
    <section id='staff-list'>
      <div className='table-container'>
        <section className='table-controls'>
          <SearchInput onChange={vm.userSearchesStaff} value={vm.query} />
          <div className='table-pagination'>
            <Button
              disabled={!vm.userCanClickPrevPage}
              onClick={vm.userClicksPrevPage}
            >
              {'< Previous'}
            </Button>
            <Button
              disabled={!vm.userCanClickNextPage}
              onClick={vm.userClicksNextPage}
            >
              {'Next >'}
            </Button>
          </div>
        </section>
        <section className='table'>
          <StaffTable data={vm.data.entries} />
        </section>
      </div>
    </section>
  );
}
