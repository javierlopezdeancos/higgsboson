const data = {
  title: "Labels",
  default: [
    {
      titles: {
        label: "hggs-label",
      },
      classes: {
        label: ["hggs-label"],
      },
      styles: {
        header: headerStyles,
        article: articleStyles,
        titles: {
          label: titleStyles,
        },
      },
    },
    {
      titles: {
        label: "hggs-label hggs-label--focus",
      },
      classes: {
        label: ["hggs-label", "hggs-label--focus"],
      },
      styles: {
        header: headerStyles,
        article: articleStyles,
        titles: {
          label: titleStyles,
        },
      },
    },
    {
      titles: {
        label: "hggs-label hggs-label--disabled",
      },
      classes: {
        label: ["hggs-label", "hggs-label--disabled"],
      },
      styles: {
        header: headerStyles,
        article: articleStyles,
        titles: {
          label: titleStyles,
        },
      },
      attributes: {
        label: {
          disabled: true,
        },
      },
    },
  ],
};
