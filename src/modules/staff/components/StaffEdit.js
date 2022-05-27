import './StaffEdit.scss';

import Button from '../../../lib/components/Button/Button';
import Input from '../../../lib/components/Input/Input';

import useStaffEdit from '../useStaffEdit';

export default function StaffEdit() {
  const vm = useStaffEdit();

  return (
    <section id='staff-edit'>
      <h5>Edit Staff Member #{vm.id}</h5>
      <form>
        <div className='form-row'>
          <Input
            label='First Name'
            type='text'
            name='firstName'
            value={vm.data.firstName.value}
            onChange={vm.userTypesFirstName}
            errors={vm.data.firstName.errors}
          />
        </div>
        <div className='form-row'>
          <Input
            label='Last Name'
            type='text'
            name='lastName'
            value={vm.data.lastName.value}
            onChange={vm.userTypesLastName}
            errors={vm.data.lastName.errors}
          />
        </div>
        <div className='form-row'>
          <Input
            label='Email'
            type='email'
            name='email'
            value={vm.data.email.value}
            onChange={vm.userTypesEmail}
            errors={vm.data.email.errors}
          />
        </div>
        <div className='form-row'>
          <Input
            label='Date of Birth (MM/DD/YY)'
            type='date'
            name='dateOfBirth'
            value={vm.data.dateOfBirth.value}
            onChange={vm.userTypesDOB}
            errors={vm.data.dateOfBirth.errors}
          />
        </div>
        <div className='form-row'>
          <Input
            label='Industry'
            type='text'
            name='industry'
            value={vm.data.industry.value}
            onChange={vm.userTypesIndustry}
            errors={vm.data.industry.errors}
          />
        </div>
        <div className='form-row'>
          <Input
            label='Salary'
            type='number'
            name='salary'
            min='1'
            step='any'
            value={vm.data.salary.value}
            onChange={vm.userTypesSalary}
            errors={vm.data.salary.errors}
          />
        </div>
        <div className='form-row'>
          <Input
            label='Experience'
            type='number'
            name='experience'
            min='0'
            step='0.1'
            value={vm.data.experience.value}
            onChange={vm.userTypesExperience}
            errors={vm.data.experience.errors}
          />
        </div>
      </form>
      <div className='form-row form-actions'>
        <Button
          type='submit'
          disabled={!vm.canUserClickSubmit}
          onClick={vm.userClicksSubmit}
        >
          Save
        </Button>
        <Button onClick={vm.userClicksCancel}>Cancel</Button>
      </div>
    </section>
  );
}
