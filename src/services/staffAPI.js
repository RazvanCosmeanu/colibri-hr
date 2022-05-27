import http from '../lib/http';
import log from '../lib/log';

const STORAGE_KEY = 'COLIBRI_STORAGE';
const API_URL = '/MOCK_DATA.json';

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
    const found = data.find((member) => member.id === parseInt(id));
    return found || { id: 0 };
  });

const updateStaffMember = (payload) =>
  fetchStaff().then((currentData) => {
    const newData = currentData.map((staffMember) => {
      if (staffMember.id === payload.id) {
        console.log('found my member', staffMember, payload);
        return Object.assign({}, payload);
      }

      return staffMember;
    });

    console.log('NEW DATA HERE', newData);

    setMemo(newData);
  });

const staffAPI = {
  fetchStaff,
  updateStaffMember,
  fetchStaffMember,
};

export default staffAPI;
