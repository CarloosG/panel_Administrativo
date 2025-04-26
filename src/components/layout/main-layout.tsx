import type { ReactNode } from 'react';
import { Header } from './header';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16"> {/* Add padding-top equal to header height */}
        <div className="container mx-auto p-4 md:p-6">
           {children}
        </div>
      </main>
    </div>
  );
}
