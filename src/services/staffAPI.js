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

const fetchStaffMember = (id) =>
  fetchStaff().then((data) => {
    const found = data.find((member) => member.id == id);
    return found || { id: 0 };
  });

const updateStaffMember = (id, payload) =>
  fetchStaffMember(id).then((currentData) => {
    const newData = currentData.map((staffMember) => {
      if (staffMember.id === id) {
        return Object.assign({}, staffMember, payload);
      }

      return staffMember;
    });

    setMemo(newData);
  });

const staffAPI = {
  fetchStaff,
  updateStaffMember,
  fetchStaffMember,
};

export default staffAPI;
