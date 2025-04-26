import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Using Inter as a default sans-serif font
import './globals.css';
import { cn } from '@/lib/utils';
import { MainLayout } from '@/components/layout/main-layout';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Admin Panel Navigator',
  description: 'Admin panel navigation example',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable
        )}
      >
        <MainLayout>{children}</MainLayout>
        <Toaster /> {/* Add Toaster component */}
      </body>
    </html>
  );
}
