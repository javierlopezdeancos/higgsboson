const presetEnv = require("postcss-preset-env");
const autoprefixer = require("autoprefixer");
const nesting = require("postcss-nesting");
const atImport = require("postcss-import");
const extend = require("postcss-extend");
const stylelint = require("stylelint");
const copyAssets = require("postcss-copy-assets");

module.exports = (ctx) => ({
  map: ctx.options.map,
  parser: ctx.options.parser,
  plugins:
    process.env.NODE_ENV === "production"
      ? [
          presetEnv({
            stage: 0,
          }),
          atImport(),
          copyAssets({ base: "dist" }),
          nesting(),
          extend(),
          stylelint(),
          autoprefixer(),
          // minify(),
        ]
      : [
          presetEnv({ stage: 0 }),
          atImport(),
          copyAssets({ base: "dist" }),
          nesting(),
          extend(),
          stylelint(),
          autoprefixer(),
        ],
});
