import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    //sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'index',
      formats: ['es', 'cjs']
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
