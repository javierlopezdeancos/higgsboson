const darkTheme = isDarkTheme && isDarkTheme(); // we need inject the dom script before

const articleStyles = ["width: 100%", "margin-bottom: 30px"];

const articleQuinaryStyles = [
  "margin-bottom: 30px",
  "width: 100%",
  `background: ${darkTheme ? "rgba(100,100,100,0.8)" : "black"}`,
  "padding: 0 10px 20px 10px",
];

const headerStyles = ["margin-bottom: 20px"];

const headerQuinaryStyles = [
  "margin-bottom: 20px",
  "color: var(--hggs-color-background, var(--hggs-color-background-default))",
];

const titleStyles = ["margin-top: 0", "margin-bottom: 0"];

const titleIndentation1xStyles = ["margin-top: 0", "margin-bottom: 0", "margin-left: 20px;"];

const titleIndentation2xStyles = ["margin-top: 0", "margin-bottom: 0", "margin-left: 40px;"];

const titleIndentation3xStyles = ["margin-top: 0", "margin-bottom: 0", "margin-left: 60px;"];

const titleIndentation4xStyles = ["margin-top: 0", "margin-bottom: 0", "margin-left: 80px;"];

const bigGrayBoxStyles = [
  "width: 100%",
  "padding: 30px 30px 30px 30px",
  "margin-bottom: 20px",
  "background: rgba(100,100,100,0.2)",
];

const bigGrayBoxWithHeightStyles = [
  "width: 100%",
  "height: 600px",
  "padding: 30px 30px 30px 30px",
  "margin-bottom: 20px",
  "background: rgba(100,100,100,0.2)",
];

const smallLightGrayBoxWithHeightStyles = ["height: 60px", "background: rgba(100,100,100,0.8)"];

const smallDarkGrayBoxWithHeightStyles = ["height: 60px", "background: rgba(100,100,100,0.6)"];

const smallDarkerGrayBoxWithHeightStyles = ["height: 60px", "background: rgba(100,100,100,0.4)"];

const grayBoxStyles = [
  "background: rgba(100,100,100,0.2)",
  "font-size: 40px",
  "min-width: 200px",
  "text-align: center",
  "font-family: sans-serif",
  "padding: 40px",
];

const inlineMarginLeftStyles = ["margin-left: 10px", "margin-bottom: 10px"];

const inlineMarginLeftWrapQuinaryStyles = [
  "margin-left: 10px",
  "margin-bottom: 10px",
  `background: ${darkTheme ? "rgba(100,100,100,0.8)" : "black"}`,
  "padding: 10px",
];

const wrapperQuinaryStyles = [
  "display: inline-block",
  `background: ${darkTheme ? "rgba(100,100,100,0.8)" : "black"}`,
  "padding: 10px",
];
