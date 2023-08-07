import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import copy from 'rollup-plugin-copy'
import {resolve, dirname} from 'path'
import {fileURLToPath} from 'url'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;

export default defineConfig({
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
    plugins: [
        vue(),
        VueI18nPlugin({
            /* options */
            // locale messages resource pre-compile option
            include: resolve(dirname(fileURLToPath(import.meta.url)), './src/locale/lang/**'),
        }),
        copy({
            targets: [
                {src: 'src/assets', dest: 'dist'},
                {src: 'src/manifest.json', dest: 'dist'},
            ],
            hook: 'writeBundle'
        })
    ],
    build: {
        rollupOptions: {
            input: {
                background: resolve('src/background/index.ts'),
                content_script: resolve('src/content_script/index.ts'),
                'src/popup': resolve('popup.html'),
                'src/options': resolve('options.html'),
                'src/tab': resolve('tab.html'),
            },
            output: {
                chunkFileNames: "[name].[hash].js",
                assetFileNames: "[name].[hash].[ext]",
                entryFileNames: "[name].js",
                dir: "dist",
                sanitizeFileName(name: string): string {
                    const match = DRIVE_LETTER_REGEX.exec(name);
                    const driveLetter = match ? match[0] : '';
                    return driveLetter + name.substring(driveLetter.length).replace(INVALID_CHAR_REGEX, '');
                }
            },
        },
    }
})
