import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Truck, PlusCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

export default function ProveedorPage() {
  // Placeholder data
  const providers = [
    { id: 1, name: "Suministros Globales Inc.", service: "Material de Oficina", contact: "Ana López", email: "ana.lopez@suministros.com" },
    { id: 2, name: "Tecno Soluciones Avanzadas", service: "Soporte IT", contact: "Pedro Martínez", email: "pedro.m@tecnosoluciones.dev" },
    { id: 3, name: "Logística Rápida Express", service: "Transporte y Envío", contact: "Sofía Hernández", email: "sofia.h@logistica.net" },
  ];

  return (
    <Card className="w-full">
       <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Truck className="h-6 w-6 text-primary" />
          Proveedores
        </CardTitle>
         <Button size="sm">
          <PlusCircle className="mr-2 h-4 w-4" />
          Añadir Proveedor
        </Button>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">Administra los detalles de tus proveedores aquí.</p>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Servicio/Producto</TableHead>
              <TableHead>Contacto</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {providers.map((provider) => (
              <TableRow key={provider.id}>
                <TableCell className="font-medium">{provider.name}</TableCell>
                <TableCell>{provider.service}</TableCell>
                <TableCell>{provider.contact}</TableCell>
                <TableCell>{provider.email}</TableCell>
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
