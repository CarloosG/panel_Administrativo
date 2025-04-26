# Admin Panel Navigator

This project demonstrates a simple administrative panel web application built with Next.js (React framework) and styled using Tailwind CSS via ShadCN UI components. It features a modern fixed navigation bar and basic routing for different sections.

## Features

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS with ShadCN UI components
- **Routing**: Next.js App Router for page-based routing
- **Navigation**: Fixed top navigation bar with links to:
    - Clientes (Clients)
    - Proveedor (Providers)
    - Usuarios (Users)
    - Logout button (no functionality implemented)
- **Views**: Simple placeholder content for each section.

## Getting Started

1.  **Clone the repository (if applicable):**
    ```bash
    git clone <your-repo-url>
    cd admin-panel-navigator
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:9002](http://localhost:9002) (or the specified port) in your browser.

## Project Structure

- `src/app/`: Contains the main application pages and layouts (using Next.js App Router).
    - `layout.tsx`: Root layout, includes global styles and main structure.
    - `page.tsx`: Home page component.
    - `clientes/page.tsx`: Clients section page.
    - `proveedor/page.tsx`: Provider section page.
    - `usuarios/page.tsx`: Users section page.
    - `globals.css`: Global styles and Tailwind CSS theme configuration (ShadCN variables).
- `src/components/`: Reusable UI components.
    - `layout/`: Layout specific components like Header.
    - `ui/`: ShadCN UI components.
- `public/`: Static assets.
- `tailwind.config.ts`: Tailwind CSS configuration.
- `next.config.ts`: Next.js configuration.
- `package.json`: Project dependencies and scripts.

## Design Choices

- **Next.js App Router**: Chosen for its modern features like Server Components, improved routing, and layout capabilities.
- **Tailwind CSS & ShadCN UI**: Selected for rapid UI development, consistency, and customization via CSS variables. ShadCN provides pre-built, accessible components that integrate well with Tailwind.
- **Color Scheme**:
    - Primary: Blue (`#2563EB`) - Used for the header and primary actions.
    - Background: Light Gray (`#F3F4F6`) - Provides a clean, neutral backdrop.
    - Accent: Teal (`#14B8A6`) - Used for highlights and interactive elements (though not heavily used in this basic version).
- **Layout**: Full-width layout with a fixed header ensures navigation is always accessible.

## Screenshot

*(Add a screenshot of your running application here)*

```
[Screenshot of the Admin Panel]
```
