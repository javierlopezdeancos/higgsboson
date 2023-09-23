const data = {
  title: "Fields",
  default: [
    {
      titles: {
        field: "hggs-field",
        label: "hggs-label",
        input: "hggs-input",
      },
      styles: {
        title: {
          field: titleStyles,
          label: titleIndentation1xStyles,
          input: titleIndentation1xStyles,
        },
        article: articleStyles,
        header: headerStyles,
      },
      classes: {
        field: ["hggs-field"],
        label: ["hggs-label"],
        input: ["hggs-input"],
      },
    },
    {
      titles: {
        field: "hggs-field hggs-field--required",
        label: "hggs-label",
        input: "hggs-input",
      },
      styles: {
        title: {
          field: titleStyles,
          label: titleIndentation1xStyles,
          input: titleIndentation1xStyles,
        },
        article: articleStyles,
        header: headerStyles,
      },
      classes: {
        field: ["hggs-field", "hggs-field--required"],
        label: ["hggs-label"],
        input: ["hggs-input"],
      },
    },
    {
      titles: {
        field: "hggs-field",
        label: "hggs-label hggs-label--focus",
        input: "hggs-input hggs-input--focus",
      },
      styles: {
        title: {
          field: titleStyles,
          label: titleIndentation1xStyles,
          input: titleIndentation1xStyles,
        },
        article: articleStyles,
        header: headerStyles,
      },
      classes: {
        field: ["hggs-field"],
        label: ["hggs-label", "hggs-label--focus"],
        input: ["hggs-input", "hggs-input--focus"],
      },
    },
    {
      titles: {
        field: "hggs-field",
        label: "hggs-label hggs-label--disabled",
        input: "hggs-input hggs-input--disabled",
      },
      styles: {
        title: {
          field: titleStyles,
          label: titleIndentation1xStyles,
          input: titleIndentation1xStyles,
        },
        article: articleStyles,
        header: headerStyles,
      },
      classes: {
        field: ["hggs-field"],
        label: ["hggs-label", "hggs-label--disabled"],
        input: ["hggs-input", "hggs-input--disabled"],
      },
    },
    {
      titles: {
        field: "hggs-field",
        label: "hggs-label hggs-label--error",
        input: "hggs-input hggs-input--error",
      },
      styles: {
        title: {
          field: titleStyles,
          label: titleIndentation1xStyles,
          input: titleIndentation1xStyles,
        },
        article: articleStyles,
        header: headerStyles,
      },
      classes: {
        field: ["hggs-field"],
        label: ["hggs-label", "hggs-label--error"],
        input: ["hggs-input", "hggs-input--error"],
      },
    },
  ],
};

export default data;
