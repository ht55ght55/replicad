import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { BoxHelper } from 'three'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
  lib: {
    entry: 'lib/replicad-threejs-helper.ts',
    name: 'replicad-threejs-helper',
    fileName: 'replicad-threejs-helper'
  }}
})
