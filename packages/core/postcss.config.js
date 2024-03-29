const presetEnv = require("postcss-preset-env");
const autoprefixer = require("autoprefixer");
const nesting = require("postcss-nesting");
const atImport = require("postcss-import");
const stylelint = require("stylelint");
const copyAssets = require("postcss-copy-assets");
const minify = require("cssnano");
const reporter = require("postcss-reporter");

function pathTransform(newPath) {
  const newPathSlots = newPath.split("/");
  const newPathSlotsWithoutDefaultThemeSlot = newPathSlots.filter((s) => s !== "default-theme");
  const newPathWithoutDefaultThemeSlot = newPathSlotsWithoutDefaultThemeSlot.join("/");

  return newPathWithoutDefaultThemeSlot;
}

module.exports = (ctx) => ({
  map: ctx.options.map,
  parser: ctx.options.parser,
  plugins:
    process.env.NODE_ENV === "production"
      ? [
          stylelint({
            configFile: ".stylelintrc",
            quiet: true,
          }),
          presetEnv(),
          atImport(),
          copyAssets({
            base: "./dist",
            pathTransform,
          }),
          nesting({ noIsPseudoSelector: true }),
          autoprefixer(),
          minify({
            preset: "advanced",
          }),
        ]
      : [
          stylelint({
            configFile: ".stylelintrc",
          }),
          presetEnv(),
          atImport(),
          copyAssets({
            base: "./dist",
            pathTransform,
          }),
          nesting({ noIsPseudoSelector: true }),
          autoprefixer(),
          reporter({ clearReportedMessages: true }),
        ],
});
