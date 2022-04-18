const data = {
  title: "Checkbox",
  default: [
    {
      title: "checkbox",
      subtitle: "label",
      styles: {
        header: headerWithSubtitleStyles,
        article: articleStyles,
        subHeaderH4: subHeaderStyles,
      },
      classes: {
        wrapper: ["hggs-checkbox"],
        label: ["hggs-label"],
      },
    },
  ],
  list: [
    {
      title: "checkboxes",
      subtitles: [
        {
          title: "checkbox",
          subtitle: "label",
        },
      ],
      styles: {
        header: headerWithSubtitleStyles,
        subHeaderH4: subHeaderWithChildStyles,
        subHeaderH4WithH5Child: subHeaderWithChildStyles,
        subHeaderH5: subHeaderChildStyles,
        article: articleStyles,
      },
      classes: {
        list: "hggs-checkboxes",
        wrapper: ["hggs-checkbox"],
        label: ["hggs-label"],
      },
    },
  ],
};
