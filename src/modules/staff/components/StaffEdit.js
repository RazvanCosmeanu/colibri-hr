import './StaffEdit.scss';

import Button from '../../../lib/components/Button/Button';
import Input from '../../../lib/components/Input/Input';

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

export default function StaffEdit() {
  return (
    <section id='staff-edit'>
      <form noValidate>
        <div className='form-row'>
          <Input
            label='First Name'
            type='text'
            name='firstName'
            value={data.firstName}
          />
        </div>
        <div className='form-row'>
          <Input
            label='Last Name'
            type='text'
            name='lastName'
            value={data.lastName}
          />
        </div>
        <div className='form-row'>
          <Input label='Email' type='email' name='email' value={data.email} />
        </div>
        <div className='form-row'>
          <Input
            label='Date of Birth'
            type='date'
            name='dateOfBirth'
            value={data.dateOfBirth}
          />
        </div>
        <div className='form-row'>
          <Input
            label='Industry'
            type='text'
            name='industry'
            value={data.industry}
          />
        </div>
        <div className='form-row'>
          <Input
            label='Salary'
            type='number'
            name='salary'
            min='1'
            step='any'
            value={data.salary}
          />
        </div>
        <div className='form-row'>
          <Input
            label='Experience'
            type='number'
            name='experience'
            min='0'
            step='0.1'
            value={data.experience}
          />
        </div>
        <div className='form-row form-actions'>
          <Button>Save</Button>
          <Button>Cancel</Button>
        </div>
      </form>
    </section>
  );
}
