import { useCallback, useEffect, useState } from 'react';
import debounce from '../../lib/debounce';
import log from '../../lib/log';

import staffService from '../../services/staffService';

const useStaffList = () => {
  const [data, setData] = useState({
    entries: [],
    meta: { page: 1, totalPages: 1, query: '' },
  });
  const [query, setQuery] = useState('');

  useEffect(() => {
    staffService.fetchStaff({ page: 1, query: '' }).then(setData);
  }, []);

  // eslint-disable-next-line
  const debouncedSearch = useCallback(
    debounce((query) => {
      staffService.fetchStaff({ page: 1, query }).then(setData);
    }, 300),
    [],
  );

  const userSearchesStaff = (e) => {
    const val = e.target.value ? e.target.value.toString() : '';
    setQuery(val);
    debouncedSearch(val);
  };

  const userClicksNextPage = () =>
    staffService.fetchStaff({ page: data.meta.page + 1, query }).then(setData);

  const userClicksPrevPage = () =>
    staffService.fetchStaff({ page: data.meta.page - 1, query }).then(setData);

  const userCanClickNextPage = data.meta.page < data.meta.totalPages;
  const userCanClickPrevPage = data.meta.page > 1;

  return {
    userSearchesStaff,
    query,
    userClicksNextPage,
    userClicksPrevPage,
    userCanClickNextPage,
    userCanClickPrevPage,
    data,
  };
};

export default useStaffList;
