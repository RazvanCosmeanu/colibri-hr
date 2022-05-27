import './StaffView.scss';

import { ReactComponent as Calendar } from '../../../assets/calendar.svg';
import { ReactComponent as Salary } from '../../../assets/salary.svg';
import { ReactComponent as Industries } from '../../../assets/industries.svg';
import { ReactComponent as Clock } from '../../../assets/clock.svg';

import Button from '../../../lib/components/Button/Button';
import useStaffView from '../useStaffView';

export default function StaffView() {
  const vm = useStaffView();

  return (
    <section id='staff-view'>
      <div className='staff-view-container'>
        <div className='staff-view-header'>
          <span className='staff-view-id'>#{vm.data.id}</span>
          <h4 className='staff-view-name'>
            {vm.data.firstName} {vm.data.lastName}
          </h4>
          <a href={`mailto:${vm.data.email}`} className='link'>
            {vm.data.email}
          </a>
        </div>
        <div className='staff-view-body'>
          <div className='staff-view-row staff-view-dob'>
            <Calendar />
            {vm.data.dateOfBirth}
          </div>
          <div className='staff-view-row staff-view-industry'>
            <Industries />
            {vm.data.industry}
          </div>
          <div className='staff-view-row staff-view-salary'>
            <Salary />
            {vm.data.salary}
          </div>
          <div className='staff-view-row staff-view-experience'>
            <Clock />
            {vm.data.experience}
          </div>
          <div className='staff-view-row staff-view-actions'>
            <Button onClick={vm.userClicksBackButton}>Go back</Button>
            <Button onClick={vm.userClicksEditButton}>Edit</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
