import setGlobal from "./setGlobal.mjs";
import { getClasses, getClassesIf, getIds, getStyles, hasClass, isDarkTheme } from "./domHelpers.mjs";
import {
  articleStyles,
  bigGrayBoxStyles,
  bigGrayBoxWithHeightStyles,
  getArticleQuinaryStyles,
  getInlineMarginLeftWrapQuinaryStyles,
  getWrapperQuinaryStyles,
  grayBoxStyles,
  headerQuinaryStyles,
  headerStyles,
  inlineMarginLeftStyles,
  smallDarkerGrayBoxWithHeightStyles,
  smallDarkGrayBoxWithHeightStyles,
  smallLightGrayBoxWithHeightStyles,
  titleIndentation1xStyles,
  titleIndentation2xStyles,
  titleIndentation3xStyles,
  titleIndentation4xStyles,
  titleStyles,
} from "./devPlaygroundStyles.mjs";
import { iconsClasses, iconSizesClases } from "./devPlaygroundClasses.mjs";

function addGlobalHelpers() {
  const articleQuinaryStyles = getArticleQuinaryStyles(isDarkTheme);
  const inlineMarginLeftWrapQuinaryStyles = getInlineMarginLeftWrapQuinaryStyles(isDarkTheme);
  const wrapperQuinaryStyles = getWrapperQuinaryStyles(isDarkTheme);

  setGlobal("articleQuinaryStyles", articleQuinaryStyles);
  setGlobal("articleStyles", articleStyles);
  setGlobal("bigGrayBoxStyles", bigGrayBoxStyles);
  setGlobal("bigGrayBoxWithHeightStyles", bigGrayBoxWithHeightStyles);
  setGlobal("getClasses", getClasses);
  setGlobal("getClassesIf", getClassesIf);
  setGlobal("getIds", getIds);
  setGlobal("getStyles", getStyles);
  setGlobal("grayBoxStyles", grayBoxStyles);
  setGlobal("hasClass", hasClass);
  setGlobal("headerQuinaryStyles", headerQuinaryStyles);
  setGlobal("headerStyles", headerStyles);
  setGlobal("iconsClasses", iconsClasses);
  setGlobal("iconSizesClases", iconSizesClases);
  setGlobal("inlineMarginLeftStyles", inlineMarginLeftStyles);
  setGlobal("inlineMarginLeftWrapQuinaryStyles", inlineMarginLeftWrapQuinaryStyles);
  setGlobal("isDarkTheme", isDarkTheme);
  setGlobal("smallDarkerGrayBoxWithHeightStyles", smallDarkerGrayBoxWithHeightStyles);
  setGlobal("smallDarkGrayBoxWithHeightStyles", smallDarkGrayBoxWithHeightStyles);
  setGlobal("smallLightGrayBoxWithHeightStyles", smallLightGrayBoxWithHeightStyles);
  setGlobal("titleIndentation1xStyles", titleIndentation1xStyles);
  setGlobal("titleIndentation2xStyles", titleIndentation2xStyles);
  setGlobal("titleIndentation3xStyles", titleIndentation3xStyles);
  setGlobal("titleIndentation4xStyles", titleIndentation4xStyles);
  setGlobal("titleStyles", titleStyles);
  setGlobal("wrapperQuinaryStyles", wrapperQuinaryStyles);
}

export default addGlobalHelpers;
