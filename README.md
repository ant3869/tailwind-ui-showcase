# Tailwind UI Library Showcase
This project showcases popular Tailwind CSS-based UI libraries with interactive dashboard examples:

- shadcn/ui
- Chakra UI
- Aceternity UI
- Franken UI
- Park UI
- Bulma UI
- React Aria
- Tremor UI
- Vercel UI
- Cult UI
- Next UI


## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/ant3869/tailwind-ui-showcase.git
   cd tailwind-ui-showcase
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Dependencies
- React
- Typescript
- Vite
- Tailwind CSS
- Lucide React (for icons)
- Recharts (for data visualization)

## How It Works
The application provides a simple navigation system that allows you to switch between different UI library showcases. Each showcase is implemented as a separate component, demonstrating the unique design language and components of its respective library.

## Master Dashboard
The **Master Dashboard** component serves as the shared layout for all examples. It supplies the navigation bar and page structure so each library can be shown in the same context.

### Switching Themes
Select a library name in the header to load its dashboard. The master layout stays visible while the content area swaps to that library's components, making it easy to compare themes.

## License
MIT
