import './App.scss';

import { Navigate, Route, Routes } from 'react-router';
import StaffRoutes from './modules/staff/routes';
import StatsRoutes from './modules/stats/routes';

function App() {
  return (
    <div className='app'>
      <header className='app-header'>
        <a className='home-link' href='/staff'>
          Colibri HR
        </a>
        <nav id='main-nav'>
          <a href='/staff'>Staff</a>
          <a href='/stats'>Stats</a>
        </nav>
      </header>
      <section id='content'>
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
