import Link from 'next/link';
import { Building, Users, Truck, UserCog, LogOut } from 'lucide-react'; // Changed User to UserCog
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
          <Building className="h-6 w-6" />
          <span>Panel Admin</span>
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6">
          <NavLink href="/clientes" icon={<Users />}>
            Clientes
          </NavLink>
          <NavLink href="/proveedor" icon={<Truck />}>
            Proveedores
          </NavLink>
          <NavLink href="/usuarios" icon={<UserCog />}> {/* Changed icon */}
            Usuarios
          </NavLink>
          {/* Changed Link to point to /salir */}
          <Link href="/salir">
             <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground gap-1.5">
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Salir</span>
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}

interface NavLinkProps {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

function NavLink({ href, icon, children }: NavLinkProps) {
  // Basic active state check could be added here using usePathname
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-primary-foreground/80'
        // Add active class based on path: 'text-accent-foreground'
      )}
    >
      {icon}
      <span className="hidden sm:inline">{children}</span>
    </Link>
  );
}
