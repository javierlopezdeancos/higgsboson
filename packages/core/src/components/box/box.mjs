export const boxStyles = [""];

const data = {
  title: "Box",
  default: [
    {
      titles: {
        box: "hggs-box",
      },
      styles: {
        header: headerStyles,
        article: articleStyles,
        box: boxStyles,
        titles: {
          box: titleStyles,
        },
      },
      classes: {
        box: ["hggs-box"],
      },
    },
    {
      titles: {
        box: "hggs-box",
        header: "hggs-box-header",
        title: "hggs-box-title hggs-h4",
        body: "hggs-box-body",
      },
      title: "hggs-box",
      styles: {
        article: articleStyles,
        header: headerStyles,
        box: boxStyles,
        titles: {
          box: titleStyles,
          header: titleIndentation1xStyles,
          title: titleIndentation2xStyles,
          body: titleIndentation1xStyles,
        },
      },
      classes: {
        box: ["hggs-box"],
        boxHeader: ["hggs-box-header"],
        boxTitle: ["hggs-box-title", "hggs-h4"],
        boxBody: ["hggs-box-body"],
      },
    },
    {
      titles: {
        box: "hggs-box hggs-box--rounded",
        header: "hggs-box-header",
        title: "hggs-box-title hggs-h4",
        body: "hggs-box-body",
      },
      styles: {
        article: articleStyles,
        header: headerStyles,
        box: boxStyles,
        titles: {
          box: titleStyles,
          header: titleIndentation1xStyles,
          title: titleIndentation2xStyles,
          body: titleIndentation1xStyles,
        },
      },
      classes: {
        box: ["hggs-box", "hggs-box--rounded"],
        boxHeader: ["hggs-box-header"],
        boxTitle: ["hggs-box-title", "hggs-h4"],
        boxBody: ["hggs-box-body"],
      },
    },
  ],
  primary: [
    {
      titles: {
        box: "hggs-box hggs-box--primary",
      },
      styles: {
        header: headerStyles,
        article: articleStyles,
        box: boxStyles,
        titles: {
          box: titleStyles,
        },
      },
      classes: {
        box: ["hggs-box", "hggs-box--primary"],
      },
    },
    {
      titles: {
        box: "hggs-box hggs-box--primary",
        header: "hggs-box-header",
        title: "hggs-box-title hggs-h4",
        body: "hggs-box-body",
      },
      styles: {
        header: headerStyles,
        article: articleStyles,
        box: boxStyles,
        titles: {
          box: titleStyles,
          header: titleIndentation1xStyles,
          title: titleIndentation2xStyles,
          body: titleIndentation1xStyles,
        },
      },
      classes: {
        box: ["hggs-box", "hggs-box--primary"],
        boxHeader: ["hggs-box-header"],
        boxTitle: ["hggs-box-title", "hggs-h4"],
        boxBody: ["hggs-box-body"],
      },
    },
    {
      titles: {
        box: "hggs-box hggs-box--primary hggs-box--rounded",
        header: "hggs-box-header",
        title: "hggs-box-title hggs-h4",
        body: "hggs-box-body",
      },
      styles: {
        header: headerStyles,
        article: articleStyles,
        box: boxStyles,
        box: boxStyles,
        titles: {
          box: titleStyles,
          header: titleIndentation1xStyles,
          title: titleIndentation2xStyles,
          body: titleIndentation1xStyles,
        },
      },
      classes: {
        box: ["hggs-box", "hggs-box--primary", "hggs-box--rounded"],
        boxHeader: ["hggs-box-header"],
        boxTitle: ["hggs-box-title", "hggs-h4"],
        boxBody: ["hggs-box-body"],
      },
    },
  ],
};

export default data;
