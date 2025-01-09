import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Matrix25/', // Replace 'your-repo-name' with your GitHub repository name
});
