// @ts-check

import * as fs from "fs";
import * as path from "path";
import * as prettier from "prettier";
import * as url from "url";
import pluginDTS from "rollup-plugin-dts";

/** @type {string} */
const __filename = url.fileURLToPath(import.meta.url);
/** @type {string} */
const __dirname = path.dirname(__filename);

/** @param {string[]} p */
const joinRoot = (...p) => path.join(__dirname, ...p);

/** @returns {import('rollup').Plugin} */
const pluginWriteEmptyIndexJS = () => ({
    name: "write-empty-index-js",
    async generateBundle(options, bundle, isWrite) {
        if (!isWrite) return;
        if (!options.dir) throw new Error("Cannot write index.js because `options.output.dir` is not set.");
        const outputPath = path.join(options.dir, "index.js");
        await fs.promises.mkdir(options.dir, { recursive: true });
        await fs.promises.writeFile(outputPath, "module.exports = {};", { encoding: "utf8" });
    },
});

/** @returns {import('rollup').Plugin} */
const pluginFormatOutput = () => ({
    name: "format-output",
    async renderChunk(code, chunk, options, meta) {
        const config = await prettier.resolveConfig(__filename);
        const output = await prettier.format(code, { ...config, filepath: "_.d.ts" });
        return output;
    },
});

/** @type {import('rollup').RollupOptions} */
const config = {
    input: joinRoot("./src/index.ts"),
    output: {
        dir: joinRoot("./dist"),
    },
    plugins: [
        pluginDTS({
            respectExternal: true,
            compilerOptions: {
                removeComments: false,
            },
        }),
        pluginWriteEmptyIndexJS(),
        pluginFormatOutput(),
    ],
};

export default config;
