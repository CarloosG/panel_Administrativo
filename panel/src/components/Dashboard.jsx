import { BarChart, DollarSign, Users, ShoppingBag } from 'lucide-react';

function Dashboard() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold text-gray-800">Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-4">
        <div className="flex items-center p-4 bg-white rounded-lg shadow">
          <div className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-gray-600">Usuarios Totales</p>
            <p className="text-lg font-semibold text-gray-700">328</p>
          </div>
        </div>
        
        <div className="flex items-center p-4 bg-white rounded-lg shadow">
          <div className="p-3 mr-4 text-green-500 bg-green-100 rounded-full">
            <DollarSign className="w-6 h-6" />
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-gray-600">Ventas Mensuales</p>
            <p className="text-lg font-semibold text-gray-700">$13,450</p>
          </div>
        </div>
        
        <div className="flex items-center p-4 bg-white rounded-lg shadow">
          <div className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full">
            <ShoppingBag className="w-6 h-6" />
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-gray-600">Órdenes Nuevas</p>
            <p className="text-lg font-semibold text-gray-700">42</p>
          </div>
        </div>
        
        <div className="flex items-center p-4 bg-white rounded-lg shadow">
          <div className="p-3 mr-4 text-purple-500 bg-purple-100 rounded-full">
            <BarChart className="w-6 h-6" />
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-gray-600">Crecimiento</p>
            <p className="text-lg font-semibold text-gray-700">+12.5%</p>
          </div>
        </div>
      </div>
      
      {/* Recent Activity */}
      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">Actividad Reciente</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">ID</th>
                <th scope="col" className="px-6 py-3">Cliente</th>
                <th scope="col" className="px-6 py-3">Fecha</th>
                <th scope="col" className="px-6 py-3">Estado</th>
                <th scope="col" className="px-6 py-3">Monto</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td className="px-6 py-4">#1234</td>
                <td className="px-6 py-4">Juan Pérez</td>
                <td className="px-6 py-4">24/04/2025</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">Completado</span>
                </td>
                <td className="px-6 py-4">$1,200</td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-6 py-4">#1233</td>
                <td className="px-6 py-4">María López</td>
                <td className="px-6 py-4">23/04/2025</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 text-xs font-semibold text-yellow-800 bg-yellow-100 rounded-full">Pendiente</span>
                </td>
                <td className="px-6 py-4">$850</td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-4">#1232</td>
                <td className="px-6 py-4">Carlos Rodríguez</td>
                <td className="px-6 py-4">22/04/2025</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 text-xs font-semibold text-red-800 bg-red-100 rounded-full">Cancelado</span>
                </td>
                <td className="px-6 py-4">$340</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;