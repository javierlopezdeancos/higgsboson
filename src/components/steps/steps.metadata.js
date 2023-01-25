const data = {
  title: "Steps",
  default: [
    {
      titles: {
        steps: "hggs-steps",
        step: {
          step: "hggs-step",
          side: "hggs-step-side",
          main: "hggs-step-main",
          title: "hggs-step-title",
          description: "hggs-step-description",
        },
      },
      styles: {
        header: headerStyles,
        article: [...articleStyles],
        titles: {
          steps: titleStyles,
          step: titleStyles,
          side: titleIndentation1xStyles,
          main: titleIndentation1xStyles,
          title: titleIndentation2xStyles,
          description: titleIndentation3xStyles,
        },
      },
      classes: {
        steps: ["hggs-steps"],
        items: [
          {
            step: ["hggs-step"],
            side: ["hggs-step-side"],
            main: ["hggs-step-main"],
            top: ["hggs-step-main-top"],
            title: ["hggs-step-title"],
            description: ["hggs-step-description"],
          },
          {
            step: ["hggs-step"],
            side: ["hggs-step-side"],
            main: ["hggs-step-main"],
            title: ["hggs-step-title"],
            description: ["hggs-step-description"],
          },
          {
            step: ["hggs-step"],
            side: ["hggs-step-side"],
            main: ["hggs-step-main"],
            title: ["hggs-step-title"],
            description: ["hggs-step-description"],
          },
        ],
      },
    },
  ],
};
