const data = {
  title: "Inputs",
  inputs: [
    {
      title: "input --big",
      classes: {
        input: ["hggs-input", "hggs-input--big"],
      },
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
    },
    {
      title: "input",
      classes: {
        input: ["hggs-input"],
      },
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
    },
    {
      title: "input --small",
      classes: {
        input: ["hggs-input", "hggs-input--small"],
      },
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
    },
    {
      title: "input [disabled] --disabled",
      classes: {
        input: ["hggs-input"],
      },
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
      attributes: {
        input: {
          disabled: true,
        },
      },
    },
    {
      title: "input [error] --error",
      classes: {
        input: ["hggs-input"],
      },
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
      attributes: {
        input: {
          error: true,
        },
      },
    },
  ],
};
