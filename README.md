# Navegador del Panel de Administración - Entornos de programación G1

Este proyecto demuestra una aplicación web de panel administrativo simple construida con [Next.js](https://nextjs.org/) (framework de React) y estilada utilizando [Tailwind CSS](https://tailwindcss.com/) a través de componentes de [ShadCN UI](https://ui.shadcn.com/). Cuenta con una barra de navegación fija moderna y enrutamiento básico para diferentes secciones.

## Realizado por

- Carlos Gómez
- Julián Pérez
- Anderson Lemus

## Características

- **Framework**: Next.js (App Router)
- **Estilos**: Tailwind CSS con componentes de ShadCN UI
- **Enrutamiento**: Next.js App Router para enrutamiento basado en páginas
- **Navegación**: Barra de navegación superior fija con enlaces a:
  - Clientes
  - Proveedor
  - Usuarios
  - Botón de Cerrar Sesión (funcionalidad no implementada)
- **Vistas**: Contenido de marcador de posición simple para cada sección.

## Empezando

1. **Clonar el repositorio (si aplica):**
   ```bash
   git clone <tu-url-del-repositorio>
   cd admin-panel-navigator
   ```
2. **Instalar dependencias:**
   ```bash
   npm install
   ```
3. **Ejecutar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [https://www.google.com/search?q=http://localhost:9002](https://www.google.com/search?q=http://localhost:9002) (o el puerto especificado) en tu navegador.

## Estructura del Proyecto

- `src/app/`: Contiene las páginas y layouts principales de la aplicación (usando Next.js App Router).
  - `layout.tsx`: Layout raíz, incluye estilos globales y estructura principal.
  - `page.tsx`: Componente de la página de inicio.
  - `clientes/page.tsx`: Página de la sección de Clientes.
  - `proveedor/page.tsx`: Página de la sección de Proveedor.
  - `usuarios/page.tsx`: Página de la sección de Usuarios.
  - `globals.css`: Estilos globales y configuración del tema de Tailwind CSS (variables de ShadCN).
- `src/components/`: Componentes de UI reutilizables.
  - `layout/`: Componentes específicos del layout como el Header.
  - `ui/`: Componentes de ShadCN UI.
- `public/`: Recursos estáticos.
- `tailwind.config.ts`: Configuración de Tailwind CSS.
- `next.config.ts`: Configuración de Next.js.
- `package.json`: Dependencias y scripts del proyecto.

## Decisiones de Diseño

- **Next.js App Router**: Elegido por sus características modernas como Server Components, enrutamiento mejorado y capacidades de layout.
- **Tailwind CSS & ShadCN UI**: Seleccionados para un desarrollo de UI rápido, consistencia y personalización a través de variables CSS. ShadCN proporciona componentes preconstruidos y accesibles que se integran bien con Tailwind.
- **Esquema de Colores**:
  - **Primario**: Azul (`#2563EB`) - Utilizado para el encabezado y las acciones primarias.
  - **Fondo**: Gris Claro (`#F3F4F6`) - Proporciona un fondo limpio y neutral.
  - **Acento**: Teal (`#14B8A6`) - Utilizado para resaltados y elementos interactivos (aunque no se usa mucho en esta versión básica).
- **Layout**: El layout de ancho completo con un encabezado fijo asegura que la navegación esté siempre accesible.

## Capturas de Pantalla
![image](https://github.com/user-attachments/assets/ee164230-825f-432b-8b81-92173584ba75)

![image](https://github.com/user-attachments/assets/06a6f58a-345f-4bcd-8a0c-d15e49b06593)

![image](https://github.com/user-attachments/assets/7ceb3dc4-3f58-4639-a481-072910654751)

![image](https://github.com/user-attachments/assets/cf52aadd-cb0a-40a8-bec0-dd1e86baf04a)

![image](https://github.com/user-attachments/assets/dd9b1e06-6560-48a8-8d64-12668e522dff)
