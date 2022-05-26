import asyncPipe from '../lib/asyncPipe';
import staffAPI from './staffAPI';

const PER_PAGE = 10;

const filterStaff = (query) => (staffList) => {
  if (query === '' || !query) {
    return staffList;
  }

  return staffList.filter((staffMember) => {
    return JSON.stringify(staffMember)
      .toLowerCase()
      .includes(query.toLowerCase());
  });
};

const paginateStaff = (page) => (staffList) => {
  return staffList.slice((page - 1) * PER_PAGE, page * PER_PAGE);
};

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

const fetchStaff = async ({ page = 1, query = '' }, force) => {
  const staff = await staffAPI.fetchStaff(force);

  const filterStaffByQuery = filterStaff(query);
  const paginateStaffByPage = paginateStaff(page);

  const filteredStaff = filterStaffByQuery(staff);

  const parsedStaff = await asyncPipe(
    paginateStaffByPage,
    normalizeStaffMembers,
  )(filteredStaff);

  return {
    entries: parsedStaff,
    meta: {
      currentPage: page,
      totalPages: filteredStaff.length / PER_PAGE,
      query,
    },
  };
};

const staffService = {
  fetchStaff,
};

export default staffService;
