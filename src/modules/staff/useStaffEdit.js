import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import dateUtils from '../../lib/dateUtils';
import log from '../../lib/log';
import staffService from '../../services/staffService';

const toVMData = (staffMember) => ({
  firstName: { value: staffMember.firstName || '', errors: [] },
  lastName: { value: staffMember.lastName || '', errors: [] },
  email: { value: staffMember.email || '', errors: [] },
  industry: { value: staffMember.industry || '', errors: [] },
  salary: { value: staffMember.salary || 0.0, errors: [] },
  experience: { value: staffMember.experience || 0.0, errors: [] },
  dateOfBirth: {
    value: dateUtils.toDateInput(staffMember.dateOfBirth) || '',
    errors: [],
  },
});

const fromVMData = (staffMember) => {
  return Object.keys(staffMember).reduce((acc, curr) => {
    switch (curr) {
      case 'dateOfBirth':
        return {
          ...acc,
          dateOfBirth: !staffMember[curr].value
            ? null
            : dateUtils.fromDateInput(staffMember[curr].value),
        };
      default:
        let value = staffMember[curr].value;

        if (value === '' || value === 0) {
          value = null;
        }
        return { ...acc, [curr]: value };
    }
  }, {});
};

const useStaffEdit = () => {
  const [data, setData] = useState({
    firstName: { value: '', errors: [] },
    lastName: { value: '', errors: [] },
    email: { value: '', errors: [] },
    industry: { value: '', errors: [] },
    salary: { value: 0.0, errors: [] },
    experience: { value: 0.0, errors: [] },
    dateOfBirth: { value: '', errors: [] },
  });

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    staffService
      .fetchStaffMember(params.id)
      .then((staffMember) => setData(toVMData(staffMember)));
  }, [params.id]);

  const setField =
    (key) =>
    ({ target: { value } }) => {
      setData({ ...data, [key]: { ...data[key], value } });
    };

  const userTypesFirstName = ({ target: { value = '' } }) => {
    const field = { value: '', errors: [] };

    if (value === '') {
      // we need to have at least one value in first name or last name
      if (data.lastName.value === '') {
        field.errors.push('We need to have at least one name!');
      }
    } else {
      setData({
        ...data,
        lastName: { errors: [], value: data.lastName.value },
      });
    }

    field.value = value;

    setData({ ...data, firstName: field });
  };

  const userTypesLastName = ({ target: { value = '' } }) => {
    const field = { value: '', errors: [] };

    if (value === '') {
      // we need to have at least one value in first name or last name
      if (data.firstName.value === '') {
        field.errors.push('We need to have at least one name!');
      }
    } else {
      setData({
        ...data,
        firstName: { errors: [], value: data.firstName.value },
      });
    }

    field.value = value;

    setData({ ...data, lastName: field });
  };

  // normally I would validate these but I'm running out of time
  const userTypesEmail = setField('email');
  const userTypesDOB = setField('dateOfBirth');
  const userTypesIndustry = setField('industry');
  const userTypesSalary = setField('salary');
  const userTypesExperience = setField('experience');

  const userClicksSubmit = (e) => {
    e.preventDefault();

    const updatedStaffMember = { ...fromVMData(data), id: parseInt(params.id) };

    return staffService
      .updateStaffMember(updatedStaffMember)
      .then(() => {
        navigate(`/staff/${params.id}`);
      })
      .catch(log);
  };

  const userClicksCancel = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const canUserClickSubmit = Object.values(data).every((field) => {
    if (field.errors.length) {
      return false;
    }

    return true;
  });

  return {
    id: params.id,
    data,
    userTypesFirstName,
    userTypesIndustry,
    userTypesLastName,
    userTypesEmail,
    userTypesDOB,
    userTypesSalary,
    userTypesExperience,
    userClicksSubmit,
    userClicksCancel,
    canUserClickSubmit,
  };
};

export default useStaffEdit;
