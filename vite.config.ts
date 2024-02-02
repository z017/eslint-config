import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'index',
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      input: resolve(__dirname, 'src/index.ts'),
    }
  },
  plugins: [
    // generates declaration files
    dts({
      // merge all declarations into one file
      rollupTypes: true,
    }),
  ]
})
