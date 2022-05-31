import Graph from '../../../lib/components/Graph/Graph';

import { toDollars } from '../../../lib/toCurrency';
import useStats from '../useStats';

export default function SalaryPerIndustryStat() {
  const vm = useStats('getAverageSalaryPerIndustry');

  return (
    <article className='graph-container' key={vm.data.title}>
      <Graph data={vm.data.series} formatValue={toDollars} />
    </article>
  );
}
