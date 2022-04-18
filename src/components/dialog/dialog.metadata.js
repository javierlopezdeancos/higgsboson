const data = {
  title: "Dialog",
  default: [
    {
      title: "dialog --big",
      ids: {
        dialog: ["dialog-big"],
        triggerButton: ["open-dialog-btn-big"],
        closeButton: ["close-dialog-btn-big"],
        okButton: ["ok-dialog-btn-big"],
      },
      styles: {
        header: headerStyles,
        article: articleStyles,
        subHeaderH4: subHeaderStyles,
      },
      classes: {
        dialog: ["hggs-dialog", "hggs-dialog--big"],
        label: ["hggs-label"],
        triggerButton: [
          "hggs-button",
          "hggs-button--primary",
          "hggs-button--big",
        ],
      },
      label: {
        triggerButton: "Big",
      },
    },
    {
      title: "dialog --medium",
      ids: {
        dialog: ["dialog-medium"],
        triggerButton: ["open-dialog-btn-medium"],
        closeButton: ["close-dialog-btn-medium"],
        okButton: ["ok-dialog-btn-medium"],
      },
      styles: {
        header: headerStyles,
        article: articleStyles,
        subHeaderH4: subHeaderStyles,
      },
      classes: {
        dialog: ["hggs-dialog", "hggs-dialog--medium"],
        label: ["hggs-label"],
        triggerButton: [
          "hggs-button",
          "hggs-button--primary",
          "hggs-button--medium",
        ],
      },
      label: {
        triggerButton: "Medium",
      },
    },
    {
      title: "dialog --small",
      ids: {
        dialog: ["dialog-small"],
        triggerButton: ["open-dialog-btn-small"],
        closeButton: ["close-dialog-btn-small"],
        okButton: ["ok-dialog-btn-small"],
      },
      styles: {
        header: headerStyles,
        article: articleStyles,
        subHeaderH4: subHeaderStyles,
      },
      classes: {
        dialog: ["hggs-dialog", "hggs-dialog--small"],
        label: ["hggs-label"],
        triggerButton: [
          "hggs-button",
          "hggs-button--primary",
          "hggs-button--small",
        ],
      },
      label: {
        triggerButton: "Small",
      },
    },
  ],
};
