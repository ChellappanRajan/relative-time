import { defineConfig } from 'vite'

// https://vitejs.dev/config/
//https://github.com/vitejs/vite/discussions/4085
export default defineConfig(({ command, mode, ssrBuild }) => {
    return {
      build: {
        lib: {
          entry: 'src/relative-time.ts',
          formats: ['es']
        },
        rollupOptions: {
          external: mode === "production" ? '' : /^lit/
        }
      }
    }
})
