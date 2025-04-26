import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users } from 'lucide-react';

export default function ClientesPage() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-6 w-6 text-primary" />
          Clientes
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>This is the Clients section. Manage your client information here.</p>
        {/* Placeholder content */}
        <div className="mt-4 p-4 border rounded-md bg-secondary/50">
          Client data will be displayed here.
        </div>
      </CardContent>
    </Card>
  );
}
