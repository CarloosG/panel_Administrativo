import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Truck } from 'lucide-react';

export default function ProveedorPage() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Truck className="h-6 w-6 text-primary" />
          Proveedor
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>This is the Provider section. Manage your provider details here.</p>
         {/* Placeholder content */}
        <div className="mt-4 p-4 border rounded-md bg-secondary/50">
          Provider data will be displayed here.
        </div>
      </CardContent>
    </Card>
  );
}
