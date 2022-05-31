import Graph from '../../../lib/components/Graph/Graph';

import useStats from '../useStats';

export default function AgePerIndustryStat() {
  const vm = useStats('getAverageAgePerIndustry');

  return (
    <div>
      <article className='graph-container' key={vm.data.title}>
        <Graph
          data={vm.data.series}
          formatValue={(val) => `${val} years old`}
        />
      </article>
    </div>
  );
}
