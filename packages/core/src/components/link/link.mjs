const data = {
  title: "Link",
  default: [
    {
      titles: {
        link: "hggs-link",
      },
      styles: {
        header: headerStyles,
        article: articleStyles,
        titles: {
          link: titleStyles,
        },
      },
      classes: {
        link: ["hggs-link"],
      },
      label: "default",
    },
    {
      titles: {
        link: "hggs-link hggs-link--hover",
      },
      styles: {
        header: headerStyles,
        article: articleStyles,
        titles: {
          link: titleStyles,
        },
      },
      classes: {
        link: ["hggs-link", "hggs-link--hover"],
      },
      label: "default",
    },
  ],
};

export default data;
