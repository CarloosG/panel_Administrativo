import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { LogOut } from "lucide-react";

export default function SalirPage() {
  return (
      <Card className="w-full max-w-md mx-auto mt-8">
        <CardHeader className="text-center">
           <LogOut className="mx-auto h-12 w-12 text-primary mb-4" />
          <CardTitle className="text-2xl font-bold">Sesión Cerrada</CardTitle>
          <CardDescription>Has salido del panel de administración.</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p>Gracias por usar el Panel Admin.</p>
          {/* Optionally add a link back to login or home */}
          {/* <Link href="/login">
            <Button variant="link" className="mt-4">Volver a iniciar sesión</Button>
          </Link> */}
        </CardContent>
      </Card>
  );
}
