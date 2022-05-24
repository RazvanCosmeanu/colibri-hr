import { Outlet } from 'react-router';

export default function StaffLayout() {
  return (
    <section id='staff-page'>
      <h3>STAFF</h3>
      <div className='content'>
        <Outlet />
      </div>
    </section>
  );
}
