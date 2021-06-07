const config = {
    ignorePatterns: ["**/dist/**", "**/tmp/**"],
    extends: ["vnus/presets/library"],
    parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
    },
};

module.exports = config;
