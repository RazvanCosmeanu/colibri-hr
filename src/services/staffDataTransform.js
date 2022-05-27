const normalizeValue = (value) => {
  if (value === 'n/a' || !value) {
    return null;
  }

  return value;
};

const toStaffMember = (member) => ({
  id: member.id,
  firstName: normalizeValue(member.first_name),
  lastName: normalizeValue(member.last_name),
  email: normalizeValue(member.email),
  dateOfBirth: normalizeValue(member.date_of_birth),
  industry: normalizeValue(member.industry),
  salary: normalizeValue(member.salary),
  experience: normalizeValue(member.years_of_experience),
});

const fromStaffMember = (member) => ({
  id: member.id,
  first_name: member.firstName,
  last_name: member.lastName,
  email: member.email,
  date_of_birth: member.dateOfBirth,
  industry: member.industry,
  salary: member.salary,
  years_of_experience: member.experience,
});

const normalizeStaffMembers = (staffList) => staffList.map(toStaffMember);

const staffDataTransform = {
  normalizeStaffMembers,
  toStaffMember,
  fromStaffMember,
};

export default staffDataTransform;
