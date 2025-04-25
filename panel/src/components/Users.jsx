import { useState } from 'react';
import { Search, Edit, Trash2, Plus, Shield, User } from 'lucide-react';

function Users() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const users = [
    { id: 1, name: 'Alejandro Rivas', email: 'admin@example.com', role: 'Admin', lastLogin: '24/04/2025 10:23' },
    { id: 2, name: 'Elena Morales', email: 'elena@example.com', role: 'Editor', lastLogin: '23/04/2025 14:56' },
    { id: 3, name: 'David Sánchez', email: 'david@example.com', role: 'Viewer', lastLogin: '22/04/2025 09:14' },
    { id: 4, name: 'Laura Méndez', email: 'laura@example.com', role: 'Editor', lastLogin: '21/04/2025 16:45' },
  ];

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Usuarios</h1>
        <button className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Nuevo Usuario
        </button>
      </div>
      
      <div className="p-6 bg-white rounded-lg shadow">
        {/* Search Bar */}
        <div className="flex items-center mb-6 border rounded-md">
          <div className="px-3 py-2 text-gray-400">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            placeholder="Buscar usuario..."
            className="w-full px-2 py-2 outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {/* Users Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">ID</th>
                <th scope="col" className="px-6 py-3">Nombre</th>
                <th scope="col" className="px-6 py-3">Email</th>
                <th scope="col" className="px-6 py-3">Rol</th>
                <th scope="col" className="px-6 py-3">Último Acceso</th>
                <th scope="col" className="px-6 py-3">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map(user => (
                <tr key={user.id} className="bg-white border-b">
                  <td className="px-6 py-4">#{user.id}</td>
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      {user.role === 'Admin' ? (
                        <Shield className="w-4 h-4 mr-1 text-red-500" />
                      ) : user.role === 'Editor' ? (
                        <Edit className="w-4 h-4 mr-1 text-blue-500" />
                      ) : (
                        <User className="w-4 h-4 mr-1 text-gray-500" />
                      )}
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        user.role === 'Admin' 
                          ? 'text-red-800 bg-red-100' 
                          : user.role === 'Editor'
                          ? 'text-blue-800 bg-blue-100'
                          : 'text-gray-800 bg-gray-100'
                      }`}>
                        {user.role}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">{user.lastLogin}</td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="p-1 text-blue-600 hover:text-blue-800">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-red-600 hover:text-red-800">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredUsers.length === 0 && (
          <div className="py-8 text-center text-gray-500">
            No se encontraron usuarios con esa búsqueda.
          </div>
        )}
      </div>
    </div>
  );
}

export default Users;