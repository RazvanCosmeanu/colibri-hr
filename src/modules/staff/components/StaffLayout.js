import { Outlet } from 'react-router';

export default function StaffLayout() {
  return (
    <div>
      <header>STAFF</header>
      <div className='content'>
        <Outlet />
      </div>
    </div>
  );
}
