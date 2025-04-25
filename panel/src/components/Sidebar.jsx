import { useState } from 'react';
import { Home, Users, Package, Briefcase, LogOut } from 'lucide-react';

function Sidebar({ activeLink, setActiveLink }) {
  return (
    <div className="w-64 bg-white shadow-md h-full">
      <div className="flex items-center justify-center h-16 border-b">
        <span className="text-xl font-bold text-blue-600">AdminPanel</span>
      </div>
      <nav className="mt-6">
        <div 
          onClick={() => setActiveLink('dashboard')} 
          className={`flex items-center px-6 py-3 cursor-pointer ${
            activeLink === 'dashboard' 
              ? 'text-blue-600 bg-blue-50 border-r-4 border-blue-600' 
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="mx-3">Dashboard</span>
        </div>
        <div 
          onClick={() => setActiveLink('clients')} 
          className={`flex items-center px-6 py-3 cursor-pointer ${
            activeLink === 'clients' 
              ? 'text-blue-600 bg-blue-50 border-r-4 border-blue-600' 
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <Briefcase className="w-5 h-5" />
          <span className="mx-3">Clientes</span>
        </div>
        <div 
          onClick={() => setActiveLink('providers')} 
          className={`flex items-center px-6 py-3 cursor-pointer ${
            activeLink === 'providers' 
              ? 'text-blue-600 bg-blue-50 border-r-4 border-blue-600' 
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <Package className="w-5 h-5" />
          <span className="mx-3">Proveedores</span>
        </div>
        <div 
          onClick={() => setActiveLink('users')} 
          className={`flex items-center px-6 py-3 cursor-pointer ${
            activeLink === 'users' 
              ? 'text-blue-600 bg-blue-50 border-r-4 border-blue-600' 
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <Users className="w-5 h-5" />
          <span className="mx-3">Usuarios</span>
        </div>
      </nav>
      <div className="absolute bottom-0 w-64 mb-6">
        <div className="flex items-center px-6 py-3 text-gray-600 cursor-pointer hover:bg-gray-50">
          <LogOut className="w-5 h-5" />
          <span className="mx-3">Logout</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;