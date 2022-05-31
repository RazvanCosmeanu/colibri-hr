import './StatsLayout.scss';

import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';

export default function StatsLayout() {
  return (
    <section id='stats-page'>
      <div className='stats-header'>
        <h3>STATS</h3>
        <nav id='stats-menu'>
          <NavLink className='link' to='/stats/average-age-industry'>
            Average age per industry
          </NavLink>
          <NavLink className='link' to='/stats/average-salary-industry'>
            Average salary per industry
          </NavLink>
        </nav>
      </div>

      <div className='content'>
        <Outlet />
      </div>
    </section>
  );
}
