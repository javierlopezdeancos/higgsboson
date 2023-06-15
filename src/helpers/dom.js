const getIds = (ids) =>
  _.reduce(
    ids,
    (acc, id) => {
      if (!acc) {
        return id;
      }

      return acc + " " + id;
    },
    ""
  );

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

const getClassesIf = (condition, className, classes) => (condition ? classes + " " + className : classes);

const hasClass = (className, classNames) => classNames.includes(className);

const isDarkTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
