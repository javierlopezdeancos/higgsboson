const data = {
  title: "Labels",
  default: [
    {
      title: "label",
      classes: {
        label: ["hggs-label"],
      },
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
    },
    {
      title: "label --focus",
      classes: {
        label: ["hggs-label", "hggs-label--focus"],
      },
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
    },
    {
      title: "label [disabled] --disabled",
      classes: {
        label: ["hggs-label", "hggs-label--disabled"],
      },
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
      attributes: {
        label: {
          disabled: true,
        },
      },
    },
  ],
};
