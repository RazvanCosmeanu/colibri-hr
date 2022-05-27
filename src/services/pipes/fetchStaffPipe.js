import staffAPI from '../staffAPI';

export const DEFAULT_STAFF_RESPONSE = {
  entries: [],
  meta: {
    page: 1,
    totalPages: 1,
    query: '',
  },
};

const fetchStaffPipe = ({ page = 1, query = '', force }) =>
  staffAPI.fetchStaff(force).then((entries = []) => ({
    entries,
    meta: {
      page,
      query,
      totalPages: 1,
    },
  }));

export default fetchStaffPipe;
