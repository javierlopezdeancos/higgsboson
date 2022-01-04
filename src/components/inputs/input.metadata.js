const data = {
  title: "Inputs",
  inputs: [
    {
      title: "input --big",
      classes: {
        input: ["hggs-input", "hggs-input--big"],
      },
    },
    {
      title: "input",
      classes: {
        input: ["hggs-input"],
      },
    },
    {
      title: "input --small",
      classes: {
        input: ["hggs-input", "hggs-input--small"],
      },
    },
    {
      title: "input [disabled] --disabled",
      classes: {
        input: ["hggs-input"],
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
      attributes: {
        input: {
          error: true,
        },
      },
    },
  ],
};
