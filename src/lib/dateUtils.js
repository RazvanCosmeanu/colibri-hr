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

const dateUtils = {
  toDateInput,
  fromDateInput,
};

export default dateUtils;
