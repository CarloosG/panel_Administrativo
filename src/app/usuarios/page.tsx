import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { User, UserCog, UserPlus } from 'lucide-react'; // Changed icon to UserCog for relevance
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function UsuariosPage() {
   // Placeholder data
  const users = [
    { id: 1, name: "Admin Principal", email: "admin@panel.com", role: "Administrador", status: "Activo" },
    { id: 2, name: "Editor Contenido", email: "editor@panel.com", role: "Editor", status: "Activo" },
    { id: 3, name: "Usuario Invitado", email: "invitado@panel.com", role: "Lector", status: "Inactivo" },
  ];

  return (
    <Card className="w-full">
       <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <UserCog className="h-6 w-6 text-primary" /> {/* Changed icon */}
          Usuarios
        </CardTitle>
         <Button size="sm">
          <UserPlus className="mr-2 h-4 w-4" />
          Añadir Usuario
        </Button>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">Administra las cuentas de usuario y sus permisos.</p>

         <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Rol</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Badge variant={user.role === 'Administrador' ? 'default' : 'secondary'}>
                    {user.role}
                  </Badge>
                  </TableCell>
                <TableCell>
                   <Badge variant={user.status === 'Activo' ? 'outline' : 'destructive'} className={user.status === 'Activo' ? 'border-green-500 text-green-700' : ''}>
                     {user.status}
                    </Badge>
                </TableCell>
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
