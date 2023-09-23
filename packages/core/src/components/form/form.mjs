const data = {
  title: "Forms",
  twoInputs: [
    {
      titles: {
        form: "hggs-form",
        input: "hggs-input",
        input: "hggs-input",
      },
      styles: {
        article: articleStyles,
        header: headerStyles,
        titles: {
          form: titleStyles,
          inputOne: titleIndentation1xStyles,
          inputTwo: titleIndentation1xStyles,
        },
      },
      classes: {
        form: ["hggs-form"],
        input: ["hggs-input"],
      },
    },
  ],
  twoFields: [
    {
      titles: {
        form: "hggs-form",
        field: "hggs-field",
        label: "hggs-label",
        input: "hggs-input",
      },
      styles: {
        article: articleStyles,
        header: headerStyles,
        titles: {
          form: titleStyles,
          field: titleIndentation1xStyles,
          label: titleIndentation2xStyles,
          input: titleIndentation2xStyles,
        },
      },
      classes: {
        form: ["hggs-form"],
        field: ["hggs-field"],
        label: ["hggs-label"],
        input: ["hggs-input"],
      },
    },
  ],
};

export default data;
