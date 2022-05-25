import { Route } from 'react-router';

import StaffEdit from './components/StaffEdit';
import StaffLayout from './components/StaffLayout';
import StaffList from './components/StaffList';
import StaffView from './components/StaffView';

export default function StaffRoutes() {
  return (
    <Route path='/staff' element={<StaffLayout />}>
      <Route index element={<StaffList />} />
      <Route path=':id' element={<StaffView />} />
      <Route path=':id/edit' element={<StaffEdit />} />
    </Route>
  );
}
