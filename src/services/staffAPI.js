import http from '../lib/http';
import log from '../lib/log';

const STORAGE_KEY = 'COLIBRI_STORAGE';
const API_URL = 'MOCK_DATA.json';

const getMemo = () => JSON.parse(localStorage.getItem(STORAGE_KEY));
const setMemo = (data) =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

const fetchStaff = (force) => {
  const store = getMemo();

  if (store && !force) {
    return Promise.resolve(store);
  }

  return http.get(API_URL).then((data) => {
    setMemo(data);
    return data;
  });
};

const updateStaff = (id, payload) => {
  const currentData = getMemo();

  if (!currentData) {
    return;
  }

  const newData = currentData.map((staffMember) => {
    if (staffMember.id === id) {
      return Object.assign(staffMember, payload);
    }

    return staffMember;
  });

  setMemo(newData);
};

const staffAPI = {
  fetchStaff,
  updateStaff,
};

export default staffAPI;
