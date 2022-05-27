export const paginateStaff = (staffList, page, perPage) => {
  return staffList.slice((page - 1) * perPage, page * perPage);
};

const paginateStaffPipe = (staffResponse) => {
  const paginatedEntries = paginateStaff(
    staffResponse.entries,
    staffResponse.meta.page,
    staffResponse.meta.perPage,
  );

  return { ...staffResponse, entries: paginatedEntries };
};

export default paginateStaffPipe;
