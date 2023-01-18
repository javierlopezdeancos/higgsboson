const data = {
  title: "Radio",
  default: [
    {
      titles: {
        radios: "hggs-radios",
        radio: "hggs-radio",
        input: 'input[type="radio"]',
        label: "hggs-label",
      },
      styles: {
        header: headerStyles,
        article: articleStyles,
        titles: {
          radios: titleStyles,
          radio: titleIndentation1xStyles,
          input: titleIndentation2xStyles,
          label: titleIndentation2xStyles,
        },
      },
      classes: {
        radios: ["hggs-radios"],
        radio: ["hggs-radio"],
        label: ["hggs-label"],
      },
      options: [
        {
          id: "radio1",
          label: "Option 1",
        },
        {
          id: "radio2",
          label: "Option 2",
        },
      ],
    },
  ],
};
