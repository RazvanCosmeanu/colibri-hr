// const data = [
//   {
//     id: 1,
//     firstName: 'Loutitia',
//     lastName: 'Steaning',
//     email: 'lsteaning0@usnews.com',
//     dateOfBirth: '13/05/1978',
//     industry: 'n/a',
//     salary: 98803.83,
//     yearsOfExperience: 6.6,
//   },
//   {
//     id: 2,
//     firstName: 'Ewen',
//     lastName: 'McLewd',
//     email: 'emclewd1@bbb.org',
//     dateOfBirth: '15/12/1991',
//     industry: 'Telecommunications Equipment',
//     salary: 144392.9,
//     yearsOfExperience: 2.8,
//   },
//   {
//     id: 3,
//     firstName: 'Park',
//     lastName: null,
//     email: null,
//     dateOfBirth: '11/06/1993',
//     industry: 'n/a',
//     salary: 101773.01,
//     yearsOfExperience: 1.8,
//   },
//   {
//     id: 4,
//     firstName: 'Benson',
//     lastName: 'Possek',
//     email: 'bpossek3@devhub.com',
//     dateOfBirth: '01/03/1993',
//     industry: 'n/a',
//     salary: 141822.61,
//     yearsOfExperience: 3.7,
//   },
//   {
//     id: 5,
//     firstName: 'Derril',
//     lastName: 'Santorini',
//     email: 'dsantorini4@wp.com',
//     dateOfBirth: '10/10/1991',
//     industry: 'Electrical Products',
//     salary: 144774.96,
//     yearsOfExperience: 4.1,
//   },
//   {
//     id: 6,
//     firstName: 'Lisa',
//     lastName: 'Cobb',
//     email: 'lcobb5@trellian.com',
//     dateOfBirth: '22/02/1999',
//     industry: 'Major Pharmaceuticals',
//     salary: 116433.83,
//     yearsOfExperience: 4.3,
//   },
//   {
//     id: 7,
//     firstName: 'Erek',
//     lastName: 'Corbould',
//     email: 'ecorbould6@blog.com',
//     dateOfBirth: '10/07/1961',
//     industry: 'Steel/Iron Ore',
//     salary: 72515.73,
//     yearsOfExperience: 3.0,
//   },
//   {
//     id: 8,
//     firstName: 'Stacee',
//     lastName: 'McAdam',
//     email: 'smcadam7@pen.io',
//     dateOfBirth: '26/04/1995',
//     industry: 'Computer Software: Prepackaged Software',
//     salary: 79521.66,
//     yearsOfExperience: 2.4,
//   },
//   {
//     id: 9,
//     firstName: 'Anna-diane',
//     lastName: 'Urquhart',
//     email: 'aurquhart8@reuters.com',
//     dateOfBirth: '09/10/1968',
//     industry: 'Precious Metals',
//     salary: 55216.7,
//     yearsOfExperience: 4.0,
//   },
//   {
//     id: 10,
//     firstName: 'Goldia',
//     lastName: 'Axelby',
//     email: 'gaxelby9@bizjournals.com',
//     dateOfBirth: '06/05/1986',
//     industry: 'Business Services',
//     salary: 58835.13,
//     yearsOfExperience: 6.9,
//   },
// ];

import Graph from '../../../lib/components/Graph/Graph';

// const getAge = (dateOfBirth) => {
//   const dob = new Date(dateOfBirth);
//   const now = new Date();

//   return Math.abs(new Date(now - dob.getTime()).getUTCFullYear() - 1970);
// };

// const averageAgePerIndustry = () => {
//   const agesPerIndustry = data.reduce((acc, curr) => {

//     if(!acc[curr.industry]) {
//       acc[curr.industry] = {
//         entries: 0,
//         ages: 0
//       };
//     }

//     if(!curr.dateOfBirth) {
//       return acc;
//     }

//     acc[curr.industry] = {
//       entries: acc[curr.industry].entries + 1,
//       ages: acc[curr.industry].ages + getAge(curr)
//     };

//     return acc;
//   }, {});

//   return Object.keys(agesPerIndustry).map(key => {
//     return
//   })
// };

const averageAgePerIndustry = {
  industry1: 57,
  industry2: 33,
  industry3: 66,
  industry4: 88,
  industry5: 21,
  industry6: 12,
  industry7: 8,
  industry9: 10,
  indistry10: 0,
};

const averageSalaryPerIndustry = {
  industry1: 57121.01,
  industry2: 331231.12,
  industry3: 661211.0,
  industry4: 881231.21,
  industry5: 21999.22,
  industry6: 125123.0,
  industry7: 81231.12,
  industry9: 10988.12,
  industry10: 0,
};

const averageSalaryPerSeniority = {
  Junior: 12311.21,
  Medium: 55423.44,
  Senior: 123133.99,
};

export default function Stats() {
  return (
    <section id='stats-page'>
      <h3>STATS</h3>

      <article className='graph-container'>
        <h5>Average age per industry</h5>
        <Graph data={averageAgePerIndustry} />
      </article>

      <article className='graph-container'>
        <h5>Average salary per industry</h5>
        <Graph data={averageSalaryPerIndustry} />
      </article>

      <article className='graph-container'>
        <h5>Average salary per seniority</h5>
        <Graph data={averageSalaryPerSeniority} />
      </article>
    </section>
  );
}
