import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { InterpolateLinear } from 'three'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
  ],
  build: {
  sourcemap: 'inline',
  lib: {
    entry: 'lib/replicad-threejs-helper.ts',
    name: 'replicad',
    fileName: 'replicad-threejs-helper',
    formats: ['es', 'umd', 'cjs'] 
  }}
})
