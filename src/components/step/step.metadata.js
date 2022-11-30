const data = {
  title: "Step.",
  default: [
    {
      title: "1. Default Step.",
      styles: {
        header: headerStyles,
        article: [...articleStyles],
      },
      classes: {
        step: ["hggs-step"],
        side: ["hggs-step-side"],
        main: ["hggs-step-main"],
        title: ["hggs-step-title"],
        description: ["hggs-step-description"],
      },
    },
  ],
  small: [
    {
      title: "2. Small Step.",
      styles: {
        header: headerStyles,
        article: [...articleStyles],
      },
      classes: {
        step: ["hggs-step", "hggs-step--small"],
        side: ["hggs-step-side"],
        main: ["hggs-step-main"],
        title: ["hggs-step-title"],
        description: ["hggs-step-description"],
      },
    },
    {
      title: "2.1 Small Step without description.",
      styles: {
        header: headerStyles,
        article: [...articleStyles],
      },
      classes: {
        step: ["hggs-step", "hggs-step--small", "hggs-step--no-description"],
        side: ["hggs-step-side"],
        main: ["hggs-step-main"],
        title: ["hggs-step-title"],
        description: ["hggs-step-description"],
      },
    },
  ],
  dot: [
    {
      title: "3. Dot Step.",
      styles: {
        header: headerStyles,
        article: [...articleStyles],
      },
      classes: {
        step: ["hggs-step", "hggs-step--dot"],
        side: ["hggs-step-side"],
        main: ["hggs-step-main"],
        title: ["hggs-step-title"],
        description: ["hggs-step-description"],
      },
    },
    {
      title: "3.1 Dot Step without description.",
      styles: {
        header: headerStyles,
        article: [...articleStyles],
      },
      classes: {
        step: ["hggs-step", "hggs-step--dot", "hggs-step--no-description"],
        side: ["hggs-step-side"],
        main: ["hggs-step-main"],
        title: ["hggs-step-title"],
        description: ["hggs-step-description"],
      },
    },
  ],
  completed: [
    {
      title: "4. Complete Step.",
      styles: {
        header: headerStyles,
        article: [...articleStyles],
      },
      classes: {
        step: ["hggs-step", "hggs-step--complete"],
        side: ["hggs-step-side"],
        icon: ["hggs-icon", "hggs-icon--check", "hggs-icon--primary"],
        main: ["hggs-step-main"],
        title: ["hggs-step-title"],
        description: ["hggs-step-description"],
      },
    },
    {
      title: "4.1 Small Complete Step.",
      styles: {
        header: headerStyles,
        article: [...articleStyles],
      },
      classes: {
        step: ["hggs-step", "hggs-step--small", "hggs-step--complete"],
        side: ["hggs-step-side"],
        icon: [
          "hggs-icon",
          "hggs-icon--check",
          "hggs-icon--primary",
          "hggs-icon--small",
        ],
        main: ["hggs-step-main"],
        title: ["hggs-step-title"],
        description: ["hggs-step-description"],
      },
    },
    {
      title: "4.2 Small Complete Step without description.",
      styles: {
        header: headerStyles,
        article: [...articleStyles],
      },
      classes: {
        step: [
          "hggs-step",
          "hggs-step--small",
          "hggs-step--complete",
          "hggs-step--no-description",
        ],
        side: ["hggs-step-side"],
        icon: [
          "hggs-icon",
          "hggs-icon--check",
          "hggs-icon--primary",
          "hggs-icon--small",
        ],
        main: ["hggs-step-main"],
        title: ["hggs-step-title"],
        description: ["hggs-step-description"],
      },
    },
    {
      title: "4.3 Dot Complete Step.",
      styles: {
        header: headerStyles,
        article: [...articleStyles],
      },
      classes: {
        step: ["hggs-step", "hggs-step--dot", "hggs-step--complete"],
        side: ["hggs-step-side"],
        main: ["hggs-step-main"],
        title: ["hggs-step-title"],
        description: ["hggs-step-description"],
      },
    },
    {
      title: "4.4 Dot Complete Step without description.",
      styles: {
        header: headerStyles,
        article: [...articleStyles],
      },
      classes: {
        step: [
          "hggs-step",
          "hggs-step--dot",
          "hggs-step--no-description",
          "hggs-step--complete",
        ],
        side: ["hggs-step-side"],
        main: ["hggs-step-main"],
        title: ["hggs-step-title"],
        description: ["hggs-step-description"],
      },
    },
  ],
  error: [
    {
      title: "5. Error Step.",
      styles: {
        header: headerStyles,
        article: [...articleStyles],
      },
      classes: {
        step: ["hggs-step", "hggs-step--error"],
        side: ["hggs-step-side"],
        icon: ["hggs-icon", "hggs-icon--close", "hggs-icon--quinary"],
        main: ["hggs-step-main"],
        title: ["hggs-step-title"],
        description: ["hggs-step-description"],
      },
    },
    {
      title: "5.1 Small Error Step.",
      styles: {
        header: headerStyles,
        article: [...articleStyles],
      },
      classes: {
        step: ["hggs-step", "hggs-step--small", "hggs-step--error"],
        side: ["hggs-step-side"],
        icon: [
          "hggs-icon",
          "hggs-icon--close",
          "hggs-icon--quinary",
          "hggs-icon--small",
        ],
        main: ["hggs-step-main"],
        title: ["hggs-step-title"],
        description: ["hggs-step-description"],
      },
    },
    {
      title: "5.2 Small Error Step without description.",
      styles: {
        header: headerStyles,
        article: [...articleStyles],
      },
      classes: {
        step: [
          "hggs-step",
          "hggs-step--small",
          "hggs-step--error",
          "hggs-step--no-description",
        ],
        side: ["hggs-step-side"],
        icon: [
          "hggs-icon",
          "hggs-icon--close",
          "hggs-icon--quinary",
          "hggs-icon--small",
        ],
        main: ["hggs-step-main"],
        title: ["hggs-step-title"],
        description: ["hggs-step-description"],
      },
    },
    {
      title: "5.3 Dot Error Step.",
      styles: {
        header: headerStyles,
        article: [...articleStyles],
      },
      classes: {
        step: ["hggs-step", "hggs-step--dot", "hggs-step--error"],
        side: ["hggs-step-side"],
        main: ["hggs-step-main"],
        title: ["hggs-step-title"],
        description: ["hggs-step-description"],
      },
    },
    {
      title: "5.4 Dot Error Step without description.",
      styles: {
        header: headerStyles,
        article: [...articleStyles],
      },
      classes: {
        step: [
          "hggs-step",
          "hggs-step--dot",
          "hggs-step--no-description",
          "hggs-step--error",
        ],
        side: ["hggs-step-side"],
        main: ["hggs-step-main"],
        title: ["hggs-step-title"],
        description: ["hggs-step-description"],
      },
    },
  ],
  waiting: [
    {
      title: "6. Waiting Step.",
      styles: {
        header: headerStyles,
        article: [...articleStyles],
      },
      classes: {
        step: ["hggs-step", "hggs-step--waiting"],
        side: ["hggs-step-side"],
        main: ["hggs-step-main"],
        title: ["hggs-step-title"],
        description: ["hggs-step-description"],
      },
    },
    {
      title: "6.1 Small Waiting Step.",
      styles: {
        header: headerStyles,
        article: [...articleStyles],
      },
      classes: {
        step: ["hggs-step", "hggs-step--small", "hggs-step--waiting"],
        side: ["hggs-step-side"],
        main: ["hggs-step-main"],
        title: ["hggs-step-title"],
        description: ["hggs-step-description"],
      },
    },
    {
      title: "6.2 Small Waiting Step without description.",
      styles: {
        header: headerStyles,
        article: [...articleStyles],
      },
      classes: {
        step: [
          "hggs-step",
          "hggs-step--small",
          "hggs-step--waiting",
          "hggs-step--no-description",
        ],
        side: ["hggs-step-side"],
        main: ["hggs-step-main"],
        title: ["hggs-step-title"],
        description: ["hggs-step-description"],
      },
    },
    {
      title: "6.3 Dot Waiting Step.",
      styles: {
        header: headerStyles,
        article: [...articleStyles],
      },
      classes: {
        step: ["hggs-step", "hggs-step--dot", "hggs-step--waiting"],
        side: ["hggs-step-side"],
        main: ["hggs-step-main"],
        title: ["hggs-step-title"],
        description: ["hggs-step-description"],
      },
    },
    {
      title: "6.4 Dot Waiting Step without description.",
      styles: {
        header: headerStyles,
        article: [...articleStyles],
      },
      classes: {
        step: [
          "hggs-step",
          "hggs-step--dot",
          "hggs-step--no-description",
          "hggs-step--waiting",
        ],
        side: ["hggs-step-side"],
        main: ["hggs-step-main"],
        title: ["hggs-step-title"],
        description: ["hggs-step-description"],
      },
    },
  ],
};
