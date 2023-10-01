export function getIds(ids) {
  return _.reduce(
    ids,
    (acc, id) => {
      if (!acc) {
        return id;
      }

      return acc + " " + id;
    },
    ""
  );
}

export function getStyles(styles) {
  return _.reduce(
    styles,
    (acc, s) => {
      if (!acc) {
        return s;
      }

      return acc + "; " + s;
    },
    ""
  );
}

export function getClasses(classes) {
  return _.reduce(
    classes,
    (acc, c) => {
      if (!acc) {
        return c;
      }

      return acc + " " + c;
    },
    ""
  );
}

export function getClassesIf(condition, className, classes) {
  return condition ? classes + " " + className : classes;
}

export function hasClass(className, classNames) {
  return classNames.includes(className);
}

export function isDarkTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}
