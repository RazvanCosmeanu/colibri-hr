import './App.scss';
import { ReactComponent as Logo } from './assets/logo.svg';

import { Navigate, Route, Routes } from 'react-router';
import { NavLink } from 'react-router-dom';
import StaffRoutes from './modules/staff/routes';
import StatsRoutes from './modules/stats/routes';

function App() {
  return (
    <div className='app'>
      <header className='app-header container'>
        <a className='home-link logo' href='/staff'>
          <Logo className='logo-image' />
          Colibri HR
        </a>
        <nav id='main-nav'>
          <NavLink className='link' to='/staff'>
            Staff
          </NavLink>
          <NavLink className='link' to='/stats'>
            Stats
          </NavLink>
        </nav>
      </header>
      <section id='content' className='container'>
        {/* react-router-dom v6 doesn't allow for route composition so we have to use the separate routes as plain functions */}
        <Routes>
          {StaffRoutes()}
          {StatsRoutes()}
          <Route path='*' element={<Navigate to='/staff' replace />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
