import { Route } from 'react-router';

import Stats from './components/Stats';

export default function StatsRoutes() {
  return <Route path='/stats' exact element={<Stats />} />;
}
