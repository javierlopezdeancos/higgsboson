const boxStyles = ["height: 300%"];

const data = {
  title: "Box",
  default: [
    {
      title: "box",
      styles: {
        header: headerStyles,
        article: articleStyles,
        box: boxStyles,
      },
      classes: {
        box: ["hggs-box"],
      },
    },
    {
      title: "box",
      subtitles: [
        {
          title: "box-header",
          subtitle: "box-title",
        },
        "box-body",
      ],
      styles: {
        header: headerWithSubtitleStyles,
        subHeaderH4: subHeaderStyles,
        subHeaderH4WithH5Child: subHeaderWithChildStyles,
        subHeaderH5: subHeaderChildWithParentWithSiblingStyles,
        article: articleStyles,
        box: boxStyles,
      },
      classes: {
        box: ["hggs-box"],
        boxHeader: ["hggs-box-header"],
        boxTitle: ["hggs-box-title"],
        boxBody: ["hggs-box-body"],
      },
    },
  ],
  primary: [
    {
      title: "box --primary",
      styles: {
        header: headerStyles,
        article: articleStyles,
        box: boxStyles,
      },
      classes: {
        box: ["hggs-box", "hggs-box--primary"],
      },
    },
    {
      title: "box --primary",
      subtitles: [
        {
          title: "box-header",
          subtitle: "box-title",
        },
        "box-body",
      ],
      styles: {
        header: headerWithSubtitleStyles,
        subHeaderH4WithH5Child: subHeaderWithChildStyles,
        subHeaderH5: subHeaderChildWithParentWithSiblingStyles,
        subHeaderH4: subHeaderStyles,
        article: articleStyles,
        box: boxStyles,
      },
      classes: {
        box: ["hggs-box", "hggs-box--primary"],
        boxHeader: ["hggs-box-header"],
        boxTitle: ["hggs-box-title"],
        boxBody: ["hggs-box-body"],
      },
    },
  ],
};
