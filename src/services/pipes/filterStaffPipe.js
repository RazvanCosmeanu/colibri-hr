import { PER_PAGE } from '../../config';

// we'll also get weird results if we type in property names, like first_name,
// but, oh... how about the wonderful weather we're having

export const filterStaff = (staffList, query) => {
  if (query === '' || !query) {
    return staffList;
  }

  return staffList.filter((staffMember) => {
    return JSON.stringify(staffMember)
      .toLowerCase()
      .includes(query.toLowerCase());
  });
};

const filterStaffPipe = (staffResponse) => {
  const filteredEntries = filterStaff(
    staffResponse.entries,
    staffResponse.meta.query,
  );

  return {
    entries: filteredEntries,
    meta: {
      ...staffResponse.meta,
      totalPages: Math.ceil(filteredEntries.length / PER_PAGE),
    },
  };
};

export default filterStaffPipe;
