import Graph from '../../../lib/components/Graph/Graph';

import useStats from '../useStats';

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
  const vm = useStats();

  return (
    <section id='stats-page'>
      <h3>STATS</h3>

      {vm.data.map((statsSerie) => {
        return (
          <article className='graph-container' key={statsSerie.title}>
            <h5>{statsSerie.title}</h5>
            <Graph data={statsSerie.data} />
          </article>
        );
      })}
    </section>
  );
}
