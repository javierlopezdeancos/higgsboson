export const articleStyles = ["width: 100%", "margin-bottom: 30px"];

export const getArticleQuinaryStyles = (isDarkTheme) => {
  return [
    "margin-bottom: 30px",
    "width: 100%",
    `background: ${isDarkTheme && isDarkTheme() ? "rgba(100,100,100,0.8)" : "black"}`,
    "padding: 0 10px 20px 10px",
  ];
};

export const headerStyles = ["margin-bottom: 20px"];

export const headerQuinaryStyles = [
  "margin-bottom: 20px",
  "color: var(--hggs-color-background, var(--hggs-color-background-default))",
];

export const titleStyles = ["margin-top: 0", "margin-bottom: 0"];

export const titleIndentation1xStyles = ["margin-top: 0", "margin-bottom: 0", "margin-left: 20px;"];

export const titleIndentation2xStyles = ["margin-top: 0", "margin-bottom: 0", "margin-left: 40px;"];

export const titleIndentation3xStyles = ["margin-top: 0", "margin-bottom: 0", "margin-left: 60px;"];

export const titleIndentation4xStyles = ["margin-top: 0", "margin-bottom: 0", "margin-left: 80px;"];

export const bigGrayBoxStyles = [
  "width: 100%",
  "padding: 30px 30px 30px 30px",
  "margin-bottom: 20px",
  "background: rgba(100,100,100,0.2)",
];

export const bigGrayBoxWithHeightStyles = [
  "width: 100%",
  "height: 600px",
  "padding: 30px 30px 30px 30px",
  "margin-bottom: 20px",
  "background: rgba(100,100,100,0.2)",
];

export const smallLightGrayBoxWithHeightStyles = ["height: 60px", "background: rgba(100,100,100,0.8)"];

export const smallDarkGrayBoxWithHeightStyles = ["height: 60px", "background: rgba(100,100,100,0.6)"];

export const smallDarkerGrayBoxWithHeightStyles = ["height: 60px", "background: rgba(100,100,100,0.4)"];

export const grayBoxStyles = [
  "background: rgba(100,100,100,0.2)",
  "font-size: 40px",
  "min-width: 200px",
  "text-align: center",
  "font-family: sans-serif",
  "padding: 40px",
];

export const inlineMarginLeftStyles = ["margin-left: 10px", "margin-bottom: 10px"];

export const getInlineMarginLeftWrapQuinaryStyles = (isDarkTheme) => [
  "margin-left: 10px",
  "margin-bottom: 10px",
  `background: ${isDarkTheme && isDarkTheme() ? "rgba(100,100,100,0.8)" : "black"}`,
  "padding: 10px",
];

export const getWrapperQuinaryStyles = (isDarkTheme) => [
  "display: inline-block",
  `background: ${isDarkTheme && isDarkTheme() ? "rgba(100,100,100,0.8)" : "black"}`,
  "padding: 10px",
];
