import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        lib: {
            entry: resolve('index.ts'),
            name: '{{PACKAGE_NAME}}',
            fileName: () => `index.js`,
            formats: ['cjs'],
        },
    },
});
