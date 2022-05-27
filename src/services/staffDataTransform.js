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
  yearsOfExperience: normalizeValue(member.years_of_experience),
});

const normalizeStaffMembers = (staffList) => staffList.map(toStaffMember);

export default {
  normalizeStaffMembers,
  toStaffMember,
};
