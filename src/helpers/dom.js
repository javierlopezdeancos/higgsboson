const getStyles = (styles) =>
  _.reduce(
    styles,
    (acc, s) => {
      if (!acc) {
        return s;
      }

      return acc + "; " + s;
    },
    ""
  );

const getClasses = (classes) =>
  _.reduce(
    classes,
    (acc, c) => {
      if (!acc) {
        return c;
      }

      return acc + " " + c;
    },
    ""
  );

const getClassesIf = (condition, className, classes) =>
  condition ? classes + " " + className : classes;

const isDarkTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches;
