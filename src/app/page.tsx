import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
      <Card className="w-full max-w-2xl mx-auto mt-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Bienvenido al Panel de Administración</CardTitle>
          <CardDescription>Selecciona una sección de la barra de navegación para comenzar.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Este es un panel de ejemplo construido con Next.js y Tailwind CSS.</p>
          <p className="mt-2">Aquí puedes administrar clientes, proveedores y usuarios.</p>
        </CardContent>
      </Card>
  );
}
