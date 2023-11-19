import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Setting base URL conditionally
const base = process.env.NODE_ENV === 'production' ? '/EC_23/' : '/';

export default defineConfig({
  base,
  plugins: [react()],
});
