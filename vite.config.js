import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The project deploys to GitHub Pages under the repository name.
// Setting a static base path avoids issues where the DEPLOY_BASE
// environment variable might not be available during the build.
const repository = 'tailwind-ui-showcase'

// https://vitejs.dev/config/
export default defineConfig({
  base: `/${repository}/`,
  plugins: [react()],
})

