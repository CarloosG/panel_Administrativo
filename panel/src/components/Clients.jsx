import { useState } from 'react';
import { Search, Edit, Trash2, Plus } from 'lucide-react';

function Clients() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const clients = [
    { id: 1, name: 'Juan Pérez', email: 'juan@example.com', phone: '123-456-7890', status: 'Activo' },
    { id: 2, name: 'María López', email: 'maria@example.com', phone: '234-567-8901', status: 'Activo' },
    { id: 3, name: 'Carlos Rodríguez', email: 'carlos@example.com', phone: '345-678-9012', status: 'Inactivo' },
    { id: 4, name: 'Ana Martínez', email: 'ana@example.com', phone: '456-789-0123', status: 'Activo' },
    { id: 5, name: 'Roberto Gómez', email: 'roberto@example.com', phone: '567-890-1234', status: 'Activo' }
  ];

  const filteredClients = clients.filter(client => 
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Clientes</h1>
        <button className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Nuevo Cliente
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
            placeholder="Buscar cliente..."
            className="w-full px-2 py-2 outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {/* Clients Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">ID</th>
                <th scope="col" className="px-6 py-3">Nombre</th>
                <th scope="col" className="px-6 py-3">Email</th>
                <th scope="col" className="px-6 py-3">Teléfono</th>
                <th scope="col" className="px-6 py-3">Estado</th>
                <th scope="col" className="px-6 py-3">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredClients.map(client => (
                <tr key={client.id} className="bg-white border-b">
                  <td className="px-6 py-4">#{client.id}</td>
                  <td className="px-6 py-4">{client.name}</td>
                  <td className="px-6 py-4">{client.email}</td>
                  <td className="px-6 py-4">{client.phone}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      client.status === 'Activo' 
                        ? 'text-green-800 bg-green-100' 
                        : 'text-red-800 bg-red-100'
                    }`}>
                      {client.status}
                    </span>
                  </td>
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
        
        {filteredClients.length === 0 && (
          <div className="py-8 text-center text-gray-500">
            No se encontraron clientes con esa búsqueda.
          </div>
        )}
      </div>
    </div>
  );
}

export default Clients;