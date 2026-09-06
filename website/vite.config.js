import { cp } from 'node:fs/promises'
import { createRequire } from 'node:module'
import { dirname, join, resolve } from 'node:path'
import { defineConfig } from 'vite'

const extensionsDir = join(
  dirname(
    createRequire(import.meta.url).resolve(
      'three/addons/inspector/Inspector.js',
    ),
  ),
  'extensions',
)

function inspectorExtensions() {
  let extensionsOutDir = 'dist/extensions'

  return {
    name: 'inspector-extensions',
    apply: 'build',
    configResolved({ root, build }) {
      extensionsOutDir = join(resolve(root, build.outDir), 'extensions')
    },
    async closeBundle() {
      await cp(extensionsDir, extensionsOutDir, { recursive: true })
    },
  }
}

export default defineConfig({
  base: './',
  optimizeDeps: {
    entries: ['index.html', 'problem.html', 'personal.html', 'enterprise.html', 'trial.html', 'system.html', 'story.html', 'proof.html', 'next.html', 'resources.html'],
    exclude: ['three'],
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        problem: 'problem.html',
        personal: 'personal.html',
        enterprise: 'enterprise.html',
        method: 'trial.html',
        system: 'system.html',
        story: 'story.html',
        proof: 'proof.html',
        next: 'next.html',
        resources: 'resources.html',
      },
    },
  },
  plugins: [inspectorExtensions()],
})
