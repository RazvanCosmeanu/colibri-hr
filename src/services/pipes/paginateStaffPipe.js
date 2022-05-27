import { PER_PAGE } from '../../config';

export const paginateStaff = (staffList, page) => {
  return staffList.slice((page - 1) * PER_PAGE, page * PER_PAGE);
};

const paginateStaffPipe = (staffResponse) => {
  const paginatedEntries = paginateStaff(
    staffResponse.entries,
    staffResponse.meta.page,
  );

  return { ...staffResponse, entries: paginatedEntries };
};

export default paginateStaffPipe;
