import dateUtils from '../lib/dateUtils';
import staffService from './staffService';

// this can be further abstracted into factory functions but the clock is ticking
// also, maybe some of these would be faster with for loops and mutating state
// but I find this easier to read, and we are familiar with the domain - 500 entries

const calculateAverageAgePerIndustry = (staff) => {
  const agesPerIndustry = staff.reduce((acc, curr) => {
    const industry = curr.industry || 'Unknown';

    // don't calculate people that are ageless
    if (!curr.dateOfBirth) {
      return acc;
    }

    const age = dateUtils.getAge(curr.dateOfBirth);

    if (!acc[industry]) {
      acc[industry] = {
        entriesLength: 1,
        ages: age,
      };
    }

    acc[industry] = {
      entriesLength: acc[industry].entriesLength + 1,
      ages: acc[industry].ages + age,
    };

    return acc;
  }, {});

  const data = Object.keys(agesPerIndustry).reduce((acc, curr) => {
    acc[curr] = Math.round(
      agesPerIndustry[curr].ages / agesPerIndustry[curr].entriesLength,
    );

    return acc;
  }, {});

  return { series: data, title: 'Average Age Per Industry' };
};

const calculateAverageSalaryPerIndustry = (staff) => {
  const salariesPerIndustry = staff.reduce((acc, curr) => {
    const industry = curr.industry || 'Unknown';

    // don't calculate people that are poor
    if (!curr.salary) {
      return acc;
    }

    if (!acc[industry]) {
      acc[industry] = {
        entriesLength: 1,
        salaries: curr.salary,
      };
    }

    acc[industry] = {
      entriesLength: acc[industry].entriesLength + 1,
      salaries: acc[industry].salaries + curr.salary,
    };

    return acc;
  }, {});

  const data = Object.keys(salariesPerIndustry).reduce((acc, curr) => {
    acc[curr] = parseFloat(
      salariesPerIndustry[curr].salaries /
        salariesPerIndustry[curr].entriesLength,
    ).toFixed(2);

    return acc;
  }, {});

  return { series: data, title: 'Average Salary Per Industry' };
};

const getAverageAgePerIndustry = () =>
  staffService
    .fetchStaff({ perPage: 500 })
    .then(({ entries }) => calculateAverageAgePerIndustry(entries));

const getAverageSalaryPerIndustry = () =>
  staffService
    .fetchStaff({ perPage: 500 })
    .then(({ entries }) => calculateAverageSalaryPerIndustry(entries));

const statsService = {
  getAverageAgePerIndustry,
  getAverageSalaryPerIndustry,
};

export default statsService;
