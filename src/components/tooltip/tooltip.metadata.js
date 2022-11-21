const data = {
  title: "Tooltip",
  default: [
    {
      title: "tooltip --up",
      styles: {
        header: headerStyles,
        article: [...articleStyles],
        tooltip: ["margin-left: 0"],
      },
      classes: {
        tooltip: ["hggs-tooltip", "hggs-tooltip--up"],
      },
    },
    {
      title: "tooltip --right",
      styles: {
        header: headerStyles,
        article: [...articleStyles],
        tooltip: ["margin-left: 0"],
      },
      classes: {
        tooltip: ["hggs-tooltip", "hggs-tooltip--right"],
      },
    },
    {
      title: "tooltip --down",
      styles: {
        header: headerStyles,
        article: [...articleStyles],
        tooltip: ["margin-left: 0"],
      },
      classes: {
        tooltip: ["hggs-tooltip", "hggs-tooltip--down"],
      },
    },
    {
      title: "tooltip --left",
      styles: {
        header: headerStyles,
        article: [...articleStyles, "margin-bottom: 50px"],
        tooltip: ["margin-left: 20%"],
      },
      classes: {
        tooltip: ["hggs-tooltip", "hggs-tooltip--left"],
      },
    },
  ],
};
