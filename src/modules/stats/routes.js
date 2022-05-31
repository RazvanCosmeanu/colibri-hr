import { Navigate, Route } from 'react-router';

import AgePerIndustryStat from './components/AgePerIndustryStat';
import SalaryPerIndustryStat from './components/SalaryPerIndustryStat';
import StatsLayout from './components/StatsLayout';

export default function StatsRoutes() {
  return (
    <Route path='/stats' element={<StatsLayout />}>
      <Route
        index
        path='/stats/average-age-industry'
        element={<AgePerIndustryStat />}
      ></Route>
      <Route
        path='/stats/average-salary-industry'
        element={<SalaryPerIndustryStat />}
      ></Route>
      <Route
        path='/stats'
        element={<Navigate to='/stats/average-age-industry' replace />}
      />
    </Route>
  );
}
