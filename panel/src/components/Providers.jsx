import { useState } from 'react';
import { Search, Edit, Trash2, Plus } from 'lucide-react';

function Providers() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const providers = [
    { id: 1, name: 'Distribuidora XYZ', contact: 'Luis Mendoza', email: 'info@xyz.com', phone: '123-456-7890', category: 'Electrónica' },
    { id: 2, name: 'Suministros ABC', contact: 'Sofía Ramírez', email: 'contacto@abc.com', phone: '234-567-8901', category: 'Papelería' },
    { id: 3, name: 'Importadora Global', contact: 'Miguel Torres', email: 'ventas@global.com', phone: '345-678-9012', category: 'Textiles' },
    { id: 4, name: 'Insumos Industriales', contact: 'Carmen Vargas', email: 'info@insumos.com', phone: '456-789-0123', category: 'Herramientas' },
  ];

  const filteredProviders = providers.filter(provider => 
    provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    provider.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Proveedores</h1>
        <button className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Nuevo Proveedor
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
            placeholder="Buscar proveedor..."
            className="w-full px-2 py-2 outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {/* Providers Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">ID</th>
                <th scope="col" className="px-6 py-3">Empresa</th>
                <th scope="col" className="px-6 py-3">Contacto</th>
                <th scope="col" className="px-6 py-3">Email</th>
                <th scope="col" className="px-6 py-3">Teléfono</th>
                <th scope="col" className="px-6 py-3">Categoría</th>
                <th scope="col" className="px-6 py-3">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredProviders.map(provider => (
                <tr key={provider.id} className="bg-white border-b">
                  <td className="px-6 py-4">#{provider.id}</td>
                  <td className="px-6 py-4">{provider.name}</td>
                  <td className="px-6 py-4">{provider.contact}</td>
                  <td className="px-6 py-4">{provider.email}</td>
                  <td className="px-6 py-4">{provider.phone}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">
                      {provider.category}
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
        
        {filteredProviders.length === 0 && (
          <div className="py-8 text-center text-gray-500">
            No se encontraron proveedores con esa búsqueda.
          </div>
        )}
      </div>
    </div>
  );
}

export default Providers;