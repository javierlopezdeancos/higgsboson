const postcssPresetEnv = require("postcss-preset-env");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const atImport = require("postcss-import");
const simpleExtend = require("postcss-extend");
const postcssNesting = require("postcss-nesting");
const stylelint = require("stylelint");
const copyAssets = require("postcss-copy-assets");
const postCssCsso = require("postcss-csso");

module.exports = (ctx) => ({
  map: ctx.options.map,
  parser: ctx.options.parser,
  plugins: [
    postcssPresetEnv({ stage: 4 }),
    atImport({
      from: "src/index.css",
    }),
    postcssNesting(),
    simpleExtend(),
    stylelint(),
    autoprefixer(),
    cssnano({ preset: "default" }),
    postCssCsso({ restructure: false }),
    copyAssets({ base: "dist" }),
  ],
});
