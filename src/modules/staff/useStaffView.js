import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import log, { logFn } from '../../lib/log';
import { toDollars } from '../../lib/toCurrency';
import staffService from '../../services/staffService';

const getExperience = (years) => {
  if (years > 10) {
    return 'Senior';
  }

  if (years > 5) {
    return 'Intermediate';
  }

  return 'Junior';
};

const toVMData = (staffMember) => ({
  id: staffMember.id,
  email: staffMember.email || '-',
  dateOfBirth: staffMember.dateOfBirth || '-',
  industry: staffMember.industry || '-',
  firstName: staffMember.firstName || '-',
  lastName: staffMember.lastName || '-',
  experience: staffMember.experience
    ? `${getExperience(staffMember.experience)} (${staffMember.experience} years
            of experience)`
    : '-',
  salary: staffMember.salary ? `${toDollars(staffMember.salary)} / year` : '-',
});

const useStaffView = () => {
  const [data, setData] = useState({});

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    staffService.fetchStaffMember(params.id).then((staffMember) => {
      setData(toVMData(staffMember));
    });
  }, [params.id]);

  const userClicksBackButton = () => navigate('/staff');
  const userClicksEditButton = () => navigate(`/staff/${params.id}/edit`);

  return {
    data,
    userClicksBackButton: logFn(userClicksBackButton),
    userClicksEditButton: logFn(userClicksEditButton),
  };
};

export default useStaffView;
