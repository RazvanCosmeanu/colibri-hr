import './StatsLayout.scss';

import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';
import useScrollToTop from '../../../lib/useScrollToTop';
import { useRef } from 'react';

export default function StatsLayout() {
  const graphContainer = useRef(null);
  useScrollToTop(graphContainer.current);

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

      <div className='content' id='graph-container' ref={graphContainer}>
        <Outlet />
      </div>
    </section>
  );
}
