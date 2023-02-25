// vite.config.ts
import {
    defineConfig
} from 'vite'
import react from '@vitejs/plugin-react';
import {
    createHtmlPlugin
} from 'vite-plugin-html';

import path from 'path';

export default defineConfig({
    plugins: [
        react({
            // Use React plugin in all *.jsx and *.tsx files
            include: '**/*.{js,jsx,tsx}',
        }),
    ],
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src'),
        }
    },
})