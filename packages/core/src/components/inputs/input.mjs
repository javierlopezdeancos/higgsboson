const data = {
  title: "Inputs",
  inputs: [
    {
      titles: {
        input: "hggs-input hggs-input--big",
      },
      classes: {
        input: ["hggs-input", "hggs-input--big"],
      },
      styles: {
        header: headerStyles,
        article: articleStyles,
        titles: {
          input: titleStyles,
        },
      },
    },
    {
      titles: {
        input: "hggs-input",
      },
      classes: {
        input: ["hggs-input"],
      },
      styles: {
        header: headerStyles,
        article: articleStyles,
        titles: {
          input: titleStyles,
        },
      },
    },
    {
      titles: {
        input: "hggs-input hggs-input--small",
      },
      classes: {
        input: ["hggs-input", "hggs-input--small"],
      },
      styles: {
        header: headerStyles,
        article: articleStyles,
        titles: {
          input: titleStyles,
        },
      },
    },
    {
      titles: {
        input: "hggs-input[disabled] hggs-input--disabled",
      },
      classes: {
        input: ["hggs-input", "hggs-input--disabled"],
      },
      styles: {
        header: headerStyles,
        article: articleStyles,
        titles: {
          input: titleStyles,
        },
      },
      attributes: {
        input: {
          disabled: true,
        },
      },
    },
    {
      titles: {
        input: "hggs-input[error] hggs-input--error",
      },
      classes: {
        input: ["hggs-input", "hggs-input--error"],
      },
      styles: {
        header: headerStyles,
        article: articleStyles,
        titles: {
          input: titleStyles,
        },
      },
      attributes: {
        input: {
          error: true,
        },
      },
    },
  ],
};

export default data;
