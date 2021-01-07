// @ts-check

import * as fs from 'fs';
import * as path from 'path';
import pluginDTS from 'rollup-plugin-dts';

/** @param {string[]} p */
const joinRoot = (...p) => path.join(__dirname, ...p);

/** @returns {import('rollup').Plugin} */
const pluginWriteEmptyIndexJS = () => ({
    name: 'write-empty-index-js',
    async generateBundle(options, bundle, isWrite) {
        if (!isWrite) return;
        if (!options.dir) throw new Error('Cannot write index.js because `options.output.dir` is not set.');
        const outputPath = path.join(options.dir, 'index.js');
        await fs.promises.writeFile(outputPath, 'module.exports = {};', { encoding: 'utf8' });
    },
});

/** @type {import('rollup').RollupOptions} */
const config = {
    input: joinRoot('./src/index.ts'),
    output: {
        dir: joinRoot('./dist'),
    },
    plugins: [
        pluginDTS({
            respectExternal: true,
            compilerOptions: {
                removeComments: false,
            },
        }),
        pluginWriteEmptyIndexJS(),
    ],
};

export default config;
