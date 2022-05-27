// DD/MM/YYYY => YYYY-MM-DD
const toDateInput = (date) => {
  if (!date) {
    return;
  }

  const [days, months, years] = date.split('/');

  return `${years}-${months}-${days}`;
};

// YYYY-MM-DD => DD/MM/YYYY
const fromDateInput = (date) => {
  if (!date) {
    return;
  }

  const [years, months, days] = date.split('-');

  return `${days}/${months}/${years}`;
};

const getAge = (dateOfBirth) => {
  const dob = new Date(toDateInput(dateOfBirth));
  const now = new Date();

  // get years and subtract years since epoch to get the age
  // it could have gone more complicated, with leap years and better precision
  // but how about the weather
  return Math.abs(new Date(now - dob.getTime()).getUTCFullYear() - 1970);
};

const dateUtils = {
  toDateInput,
  fromDateInput,
  getAge,
};

export default dateUtils;
