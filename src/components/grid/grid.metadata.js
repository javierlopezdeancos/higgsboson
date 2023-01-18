const sectionStyles = ["width: 100%", "padding: 30px", "margin-bottom: 20px", "background: rgba(100,100,100,0.2)"];

const data = {
  title: "Grid",
  default: [
    {
      titles: {
        grid: "hggs-grid",
        cell: "hggs-cell hggs-cell--4of12",
      },
      styles: {
        header: headerStyles,
        article: articleStyles,
        section: sectionStyles,
        cell: smallLightGrayBoxWithHeightStyles,
        titles: {
          grid: titleStyles,
          cell: titleIndentation1xStyles,
        },
      },
      classes: {
        grid: ["hggs-grid"],
        cell: ["hggs-cell", "hggs-cell--4of12"],
      },
    },
    {
      titles: {
        grid: "hggs-grid hggs-grid--center",
        cell: "hggs-cell hggs-cell--6of12",
      },
      styles: {
        header: headerStyles,
        article: articleStyles,
        section: sectionStyles,
        cell: smallLightGrayBoxWithHeightStyles,
        titles: {
          grid: titleStyles,
          cell: titleIndentation1xStyles,
        },
      },
      classes: {
        grid: ["hggs-grid hggs-grid--center"],
        cell: ["hggs-cell", "hggs-cell--6of12"],
      },
    },
    {
      titles: {
        grid: "hggs-grid hggs-grid--center",
        cellOne: "hggs-cell hggs-cell--4of12",
        cellTwo: "hggs-cell hggs-cell--2of12",
      },
      styles: {
        header: headerStyles,
        article: articleStyles,
        section: sectionStyles,
        cell: smallLightGrayBoxWithHeightStyles,
        titles: {
          grid: titleStyles,
          cell: titleIndentation1xStyles,
        },
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
      titles: {
        grid: "hggs-grid hggs-grid--center",
        cellOne: "hggs-cell hggs-cell--4of12",
        cellTwo: "hggs-cell hggs-cell--2of12",
        cellThree: "hggs-cell hggs-cell--4of12",
      },
      styles: {
        header: headerStyles,
        article: articleStyles,
        section: sectionStyles,
        cell: smallLightGrayBoxWithHeightStyles,
        titles: {
          grid: titleStyles,
          cell: titleIndentation1xStyles,
        },
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
      titles: {
        grid: "hggs-grid hggs-grid--right",
        cellOne: "hggs-cell hggs-cell--4of12",
        cellTwo: "hggs-cell hggs-cell--2of12",
      },
      styles: {
        header: headerStyles,
        article: articleStyles,
        section: sectionStyles,
        cell: smallLightGrayBoxWithHeightStyles,
        titles: {
          grid: titleStyles,
          cell: titleIndentation1xStyles,
        },
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
      titles: {
        grid: "hggs-grid hggs-grid--left",
        cellOne: "hggs-cell hggs-cell--4of12",
        cellTwo: "hggs-cell hggs-cell--2of12",
      },
      styles: {
        header: headerStyles,
        article: articleStyles,
        section: sectionStyles,
        cell: smallLightGrayBoxWithHeightStyles,
        titles: {
          grid: titleStyles,
          cell: titleIndentation1xStyles,
        },
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
      titles: {
        grid: "hggs-grid hggs-grid--between",
        cellOne: "hggs-cell hggs-cell--4of12",
        cellTwo: "hggs-cell hggs-cell--2of12",
      },
      styles: {
        header: headerStyles,
        article: articleStyles,
        section: sectionStyles,
        cell: smallLightGrayBoxWithHeightStyles,
        titles: {
          grid: titleStyles,
          cell: titleIndentation1xStyles,
        },
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
      titles: {
        grid: "hggs-grid",
        cellOne: "hggs-cell hggs-cell--6of12",
        cellTwo: "hggs-cell hggs-cell--2of12",
        cellThree: "hggs-cell hggs-cell--4of12",
        cellFour: "hggs-cell hggs-cell--4of12",
        cellFive: "hggs-cell hggs-cell--3of12",
        cellSix: "hggs-cell hggs-cell--5of12",
      },
      styles: {
        header: headerStyles,
        article: articleStyles,
        section: sectionStyles,
        cell: smallLightGrayBoxWithHeightStyles,
        titles: {
          grid: titleStyles,
          cell: titleIndentation1xStyles,
        },
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
