import './StaffView.scss';

import { ReactComponent as Calendar } from '../../../assets/calendar.svg';
import { ReactComponent as Salary } from '../../../assets/salary.svg';
import { ReactComponent as Industries } from '../../../assets/industries.svg';
import { ReactComponent as Clock } from '../../../assets/clock.svg';

import { useNavigate } from 'react-router';

import Button from '../../../lib/components/Button/Button';
import { toDollars } from '../../../lib/toCurrency';

const data = {
  id: 10,
  firstName: 'Goldia',
  lastName: 'Axelby',
  email: 'gaxelby9@bizjournals.com',
  dateOfBirth: '06/05/1986',
  industry: 'Business Services',
  salary: 58835.13,
  experience: 6.9,
};

const getExperience = (years) => {
  if (years > 10) {
    return 'Senior';
  }

  if (years > 5) {
    return 'Intermediate';
  }

  return 'Junior';
};

export default function StaffView() {
  const navigate = useNavigate();

  return (
    <section id='staff-view'>
      <div className='staff-view-container'>
        <div className='staff-view-header'>
          <span className='staff-view-id'>#{data.id}</span>
          <h4 className='staff-view-name'>
            {data.firstName} {data.lastName}
          </h4>
          <a href={`mailto:${data.email}`} className='link'>
            {data.email}
          </a>
        </div>
        <div className='staff-view-body'>
          <div className='staff-view-row staff-view-dob'>
            <Calendar />
            {data.dateOfBirth}
          </div>
          <div className='staff-view-row staff-view-industry'>
            <Industries />
            {data.industry}
          </div>
          <div className='staff-view-row staff-view-salary'>
            <Salary />
            {toDollars(data.salary)} / year
          </div>
          <div className='staff-view-row staff-view-experience'>
            <Clock /> {getExperience(data.experience)} ({data.experience} years
            of experience)
          </div>
          <div className='staff-view-row staff-view-actions'>
            <Button onClick={() => navigate('/staff')}>Go back</Button>
            <Button onClick={() => navigate(`/staff/${data.id}/edit`)}>
              Edit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
