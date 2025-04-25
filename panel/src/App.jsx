import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Clients from './components/Clients';
import Providers from './components/Providers';
import Users from './components/Users';

function App() {
  const [activeLink, setActiveLink] = useState('dashboard');

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar activeLink={activeLink} setActiveLink={setActiveLink} />

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {activeLink === 'dashboard' && <Dashboard />}
        {activeLink === 'clients' && <Clients />}
        {activeLink === 'providers' && <Providers />}
        {activeLink === 'users' && <Users />}
      </div>
    </div>
  );
}

export default App;