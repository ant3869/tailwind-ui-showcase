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
All dashboards are rendered inside a single **Master Dashboard** layout. This shared frame provides the navigation bar and overall page structure so you can focus on comparing the UI libraries themselves. When you select a library from the top navigation, its dashboard is loaded within this layout while the surrounding interface stays the same. This lets you quickly switch themes to see how each library looks in the same context.

## License
MIT
