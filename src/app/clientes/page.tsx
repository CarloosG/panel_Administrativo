import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users, UserPlus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

export default function ClientesPage() {
  // Placeholder data
  const clients = [
    { id: 1, name: "Cliente Ejemplo S.A.", contact: "Juan Pérez", email: "juan.perez@cliente.com", phone: "+34 123 456 789" },
    { id: 2, name: "Negocios Unidos Ltda.", contact: "María García", email: "maria.garcia@negocios.com", phone: "+34 987 654 321" },
    { id: 3, name: "Soluciones Creativas", contact: "Carlos Rodríguez", email: "carlos.r@soluciones.es", phone: "+34 555 123 456" },
  ];

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Users className="h-6 w-6 text-primary" />
          Clientes
        </CardTitle>
         <Button size="sm">
          <UserPlus className="mr-2 h-4 w-4" />
          Añadir Cliente
        </Button>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">Administra la información de tus clientes aquí.</p>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Contacto Principal</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Teléfono</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clients.map((client) => (
              <TableRow key={client.id}>
                <TableCell className="font-medium">{client.name}</TableCell>
                <TableCell>{client.contact}</TableCell>
                <TableCell>{client.email}</TableCell>
                <TableCell>{client.phone}</TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm" className="mr-2">Editar</Button>
                  <Button variant="destructive" size="sm">Eliminar</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
