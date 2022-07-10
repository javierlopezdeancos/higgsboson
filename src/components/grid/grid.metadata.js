const sectionStyles = [
  "width: 100%",
  "padding: 30px",
  "margin-bottom: 20px",
  "background: rgba(100,100,100,0.2)",
];

const data = {
  title: "Grid",
  default: [
    {
      title: "grid",
      subtitle: "cell --4of12",
      styles: {
        header: headerWithSubtitleStyles,
        article: articleStyles,
        subHeaderH4: subHeaderStyles,
        section: sectionStyles,
      },
      classes: {
        grid: ["hggs-grid"],
        cell: ["hggs-cell", "hggs-cell--4of12"],
      },
    },
    {
      title: "grid --center",
      subtitle: "cell --6of12",
      styles: {
        header: headerWithSubtitleStyles,
        article: articleStyles,
        subHeaderH4: subHeaderStyles,
        section: sectionStyles,
      },
      classes: {
        grid: ["hggs-grid hggs-grid--center"],
        cell: ["hggs-cell", "hggs-cell--6of12"],
      },
    },
    {
      title: "grid --center",
      subtitle: "cell --4of12 + cell --2of12",
      styles: {
        header: headerWithSubtitleStyles,
        article: articleStyles,
        subHeaderH4: subHeaderStyles,
        section: sectionStyles,
      },
      classes: {
        grid: ["hggs-grid hggs-grid--center"],
        cells: [
          ["hggs-cell", "hggs-cell--4of12"],
          ["hggs-cell", "hggs-cell--2of12"],
        ],
      },
    },
    {
      title: "grid --center",
      subtitle: "cell --4of12 + cell --2of12 + cell --4of12",
      styles: {
        header: headerWithSubtitleStyles,
        article: articleStyles,
        subHeaderH4: subHeaderStyles,
        section: sectionStyles,
      },
      classes: {
        grid: ["hggs-grid hggs-grid--center"],
        cells: [
          ["hggs-cell", "hggs-cell--4of12"],
          ["hggs-cell", "hggs-cell--2of12"],
          ["hggs-cell", "hggs-cell--4of12"],
        ],
      },
    },
    {
      title: "grid --right",
      subtitle: "cell --4of12 + cell --2of12",
      styles: {
        header: headerWithSubtitleStyles,
        article: articleStyles,
        subHeaderH4: subHeaderStyles,
        section: sectionStyles,
      },
      classes: {
        grid: ["hggs-grid hggs-grid--right"],
        cells: [
          ["hggs-cell", "hggs-cell--4of12"],
          ["hggs-cell", "hggs-cell--2of12"],
        ],
      },
    },
    {
      title: "grid --left",
      subtitle: "cell --4of12 + cell --2of12",
      styles: {
        header: headerWithSubtitleStyles,
        article: articleStyles,
        subHeaderH4: subHeaderStyles,
        section: sectionStyles,
      },
      classes: {
        grid: ["hggs-grid hggs-grid--left"],
        cells: [
          ["hggs-cell", "hggs-cell--4of12"],
          ["hggs-cell", "hggs-cell--2of12"],
        ],
      },
    },
    {
      title: "grid --between",
      subtitle: "cell --4of12 + cell --2of12",
      styles: {
        header: headerWithSubtitleStyles,
        article: articleStyles,
        subHeaderH4: subHeaderStyles,
        section: sectionStyles,
      },
      classes: {
        grid: ["hggs-grid hggs-grid--between"],
        cells: [
          ["hggs-cell", "hggs-cell--4of12"],
          ["hggs-cell", "hggs-cell--2of12"],
        ],
      },
    },
    {
      title: "grid",
      subtitle:
        "cell --6of12 + cell --2of12 + cell --4of12 + cell --4of12 + cell --3of12 + cell --5of12 ",
      styles: {
        header: headerWithSubtitleStyles,
        article: articleStyles,
        subHeaderH4: subHeaderStyles,
        section: sectionStyles,
      },
      classes: {
        grid: ["hggs-grid"],
        cells: [
          ["hggs-cell", "hggs-cell--6of12"],
          ["hggs-cell", "hggs-cell--2of12"],
          ["hggs-cell", "hggs-cell--4of12"],
          ["hggs-cell", "hggs-cell--4of12"],
          ["hggs-cell", "hggs-cell--3of12"],
          ["hggs-cell", "hggs-cell--5of12"],
        ],
      },
    },
  ],
};
