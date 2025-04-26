import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
      <Card className="w-full max-w-2xl mx-auto mt-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Welcome to the Admin Panel</CardTitle>
          <CardDescription>Select a section from the navigation bar to get started.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This is a sample dashboard interface built with Next.js and Tailwind CSS.</p>
        </CardContent>
      </Card>
  );
}
