const iconStyles = ["margin-right: 10px", "margin-bottom: 10px"];

const iconLabeledStyles = ["margin-right: 20px", "margin-bottom: 10px"];

const data = {
  title: "Icons",
  default: [
    {
      title: "icon --{type-of-icon} --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        header: headerStyles,
        headerWithSubtitle: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        article: articleStyles,
        icon: iconStyles,
        iconLabeled: iconLabeledStyles,
      },
      classes: {
        icon: {
          base: iconsClasses,
          sizes: iconSizesClases,
        },
      },
    },
    {
      title: "icon --primary --{type-of-icon} --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        header: headerStyles,
        headerWithSubtitle: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        article: articleStyles,
        icon: iconStyles,
        iconLabeled: iconLabeledStyles,
      },
      classes: {
        icon: {
          base: iconsClasses,
          sizes: iconSizesClases,
          modifier: "hggs-icon--primary",
        },
      },
    },
    {
      title: "icon --secondary --{type-of-icon} --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        header: headerStyles,
        headerWithSubtitle: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        article: articleStyles,
        icon: iconStyles,
        iconLabeled: iconLabeledStyles,
      },
      classes: {
        icon: {
          base: iconsClasses,
          sizes: iconSizesClases,
          modifier: "hggs-icon--secondary",
        },
      },
    },
    {
      title: "icon --tertiary --{type-of-icon} --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        header: headerStyles,
        headerWithSubtitle: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        article: articleStyles,
        icon: iconStyles,
        iconLabeled: iconLabeledStyles,
      },
      classes: {
        icon: {
          base: iconsClasses,
          sizes: iconSizesClases,
          modifier: "hggs-icon--tertiary",
        },
      },
    },
    {
      title: "icon --quaternary --{type-of-icon} --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        header: headerStyles,
        headerWithSubtitle: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        article: articleStyles,
        icon: iconStyles,
        iconLabeled: iconLabeledStyles,
      },
      classes: {
        icon: {
          base: iconsClasses,
          sizes: iconSizesClases,
          modifier: "hggs-icon--quaternary",
        },
      },
    },
    {
      title: "icon --quinary --{type-of-icon} --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        header: headerQuinaryStyles,
        subheader: subHeaderQuinaryStyles,
        headerWithSubtitle: headerWithSubtitleQuinaryStyles,
        article: articleQuinaryStyles,
        icon: iconStyles,
        iconLabeled: iconLabeledStyles,
      },
      classes: {
        icon: {
          base: iconsClasses,
          sizes: iconSizesClases,
          modifier: "hggs-icon--quinary",
        },
      },
    },
    {
      title: "icon --senary --{type-of-icon} --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        header: headerStyles,
        headerWithSubtitle: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        article: articleStyles,
        icon: iconStyles,
        iconLabeled: iconLabeledStyles,
      },
      classes: {
        icon: {
          base: iconsClasses,
          sizes: iconSizesClases,
          modifier: "hggs-icon--senary",
        },
      },
    },
  ],
  circleIcons: [
    {
      title: "icon-wrapper --circle",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        circleIcon: iconStyles,
      },
      classes: {
        wrapper: ["hggs-icon-wrapper", "hggs-icon--circle"],
        span: iconsClasses,
      },
      extraClasses: {
        sizes: iconSizesClases,
      },
    },
    {
      title: "icon-wrapper --circle --primary --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        circleIcon: iconStyles,
      },
      classes: {
        wrapper: [
          "hggs-icon-wrapper",
          "hggs-icon--circle",
          "hggs-icon--primary",
        ],
        span: iconsClasses,
      },
      extraClasses: {
        sizes: iconSizesClases,
      },
    },
    {
      title: "icon-wrapper --circle --secondary --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        circleIcon: iconStyles,
      },
      classes: {
        wrapper: [
          "hggs-icon-wrapper",
          "hggs-icon--circle",
          "hggs-icon--secondary",
        ],
        span: iconsClasses,
      },
      extraClasses: {
        sizes: iconSizesClases,
      },
    },
    {
      title: "icon-wrapper --circle  --tertiary --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        circleIcon: iconStyles,
      },
      classes: {
        wrapper: [
          "hggs-icon-wrapper",
          "hggs-icon--circle",
          "hggs-icon--tertiary",
        ],
        span: iconsClasses,
      },
      extraClasses: {
        sizes: iconSizesClases,
      },
    },
    {
      title: "icon-wrapper --circle --quaternary --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        circleIcon: iconStyles,
      },
      classes: {
        wrapper: [
          "hggs-icon-wrapper",
          "hggs-icon--circle",
          "hggs-icon--quaternary",
        ],
        span: iconsClasses,
      },
      extraClasses: {
        sizes: iconSizesClases,
      },
    },
    {
      title: "icon-wrapper --circle --quinary --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleQuinaryStyles,
        header: headerWithSubtitleQuinaryStyles,
        subheader: subHeaderQuinaryStyles,
        circleIcon: iconStyles,
      },
      classes: {
        wrapper: [
          "hggs-icon-wrapper",
          "hggs-icon--circle",
          "hggs-icon--quinary",
        ],
        span: iconsClasses,
      },
      extraClasses: {
        sizes: iconSizesClases,
      },
    },
    {
      title: "icon-wrapper --circle --senary --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        circleIcon: iconStyles,
      },
      classes: {
        wrapper: [
          "hggs-icon-wrapper",
          "hggs-icon--circle",
          "hggs-icon--senary",
        ],
        span: iconsClasses,
      },
      extraClasses: {
        sizes: iconSizesClases,
      },
    },
    {
      title: "icon-wrapper --circle --outline --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        circleIcon: iconStyles,
      },
      classes: {
        wrapper: [
          "hggs-icon-wrapper",
          "hggs-icon--circle",
          "hggs-icon--outline",
        ],
        span: iconsClasses,
      },
      extraClasses: {
        sizes: iconSizesClases,
      },
    },
    {
      title: "icon-wrapper --circle --primary --outline --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        circleIcon: iconStyles,
      },
      classes: {
        wrapper: [
          "hggs-icon-wrapper",
          "hggs-icon--circle",
          "hggs-icon--outline",
          "hggs-icon--primary",
        ],
        span: iconsClasses,
      },
      extraClasses: {
        sizes: iconSizesClases,
      },
    },
    {
      title: "icon-wrapper --circle --secondary --outline --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        circleIcon: iconStyles,
      },
      classes: {
        wrapper: [
          "hggs-icon-wrapper",
          "hggs-icon--circle",
          "hggs-icon--outline",
          "hggs-icon--secondary",
        ],
        span: iconsClasses,
      },
      extraClasses: {
        sizes: iconSizesClases,
      },
    },
    {
      title: "icon-wrapper --circle --outline --tertiary --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        circleIcon: iconStyles,
      },
      classes: {
        wrapper: [
          "hggs-icon-wrapper",
          "hggs-icon--circle",
          "hggs-icon--outline",
          "hggs-icon--tertiary",
        ],
        span: iconsClasses,
      },
      extraClasses: {
        sizes: iconSizesClases,
      },
    },
    {
      title: "icon-wrapper --circle --quaternary --outline --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        circleIcon: iconStyles,
      },
      classes: {
        wrapper: [
          "hggs-icon-wrapper",
          "hggs-icon--circle",
          "hggs-icon--outline",
          "hggs-icon--quaternary",
        ],
        span: iconsClasses,
      },
      extraClasses: {
        sizes: iconSizesClases,
      },
    },
    {
      title: "icon-wrapper --circle --quinary --outline --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleQuinaryStyles,
        header: headerWithSubtitleQuinaryStyles,
        subheader: subHeaderQuinaryStyles,
        circleIcon: iconStyles,
      },
      classes: {
        wrapper: [
          "hggs-icon-wrapper",
          "hggs-icon--circle",
          "hggs-icon--outline",
          "hggs-icon--quinary",
        ],
        span: iconsClasses,
      },
      extraClasses: {
        sizes: iconSizesClases,
      },
    },
    {
      title: "icon-wrapper --circle --senary --outline --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        circleIcon: iconStyles,
      },
      classes: {
        wrapper: [
          "hggs-icon-wrapper",
          "hggs-icon--circle",
          "hggs-icon--outline",
          "hggs-icon--senary",
        ],
        span: iconsClasses,
      },
      extraClasses: {
        sizes: iconSizesClases,
      },
    },
  ],
  squareIcons: [
    {
      title: "icon-wrapper --square",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        squareIcon: iconStyles,
      },
      classes: {
        wrapper: ["hggs-icon-wrapper", "hggs-icon--square"],
        span: iconsClasses,
      },
      extraClasses: {
        sizes: iconSizesClases,
      },
    },
    {
      title: "icon-wrapper --square --primary --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        squareIcon: iconStyles,
      },
      classes: {
        wrapper: [
          "hggs-icon-wrapper",
          "hggs-icon--square",
          "hggs-icon--primary",
        ],
        span: iconsClasses,
      },
      extraClasses: {
        sizes: iconSizesClases,
      },
    },
    {
      title: "icon-wrapper --square --secondary --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        squareIcon: iconStyles,
      },
      classes: {
        wrapper: [
          "hggs-icon-wrapper",
          "hggs-icon--square",
          "hggs-icon--secondary",
        ],
        span: iconsClasses,
      },
      extraClasses: {
        sizes: iconSizesClases,
      },
    },
    {
      title: "icon-wrapper --square  --tertiary --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        squareIcon: iconStyles,
      },
      classes: {
        wrapper: [
          "hggs-icon-wrapper",
          "hggs-icon--square",
          "hggs-icon--tertiary",
        ],
        span: iconsClasses,
      },
      extraClasses: {
        sizes: iconSizesClases,
      },
    },
    {
      title: "icon-wrapper --square --quaternary --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        squareIcon: iconStyles,
      },
      classes: {
        wrapper: [
          "hggs-icon-wrapper",
          "hggs-icon--square",
          "hggs-icon--quaternary",
        ],
        span: iconsClasses,
      },
      extraClasses: {
        sizes: iconSizesClases,
      },
    },
    {
      title: "icon-wrapper --square --quinary --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleQuinaryStyles,
        header: headerWithSubtitleQuinaryStyles,
        subheader: subHeaderQuinaryStyles,
        squareIcon: iconStyles,
      },
      classes: {
        wrapper: [
          "hggs-icon-wrapper",
          "hggs-icon--square",
          "hggs-icon--quinary",
        ],
        span: iconsClasses,
      },
      extraClasses: {
        sizes: iconSizesClases,
      },
    },
    {
      title: "icon-wrapper --square  --senary --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        squareIcon: iconStyles,
      },
      classes: {
        wrapper: [
          "hggs-icon-wrapper",
          "hggs-icon--square",
          "hggs-icon--senary",
        ],
        span: iconsClasses,
      },
      extraClasses: {
        sizes: iconSizesClases,
      },
    },
    {
      title: "icon-wrapper --square --outline --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        squareIcon: iconStyles,
      },
      classes: {
        wrapper: [
          "hggs-icon-wrapper",
          "hggs-icon--square",
          "hggs-icon--outline",
        ],
        span: iconsClasses,
      },
      extraClasses: {
        sizes: iconSizesClases,
      },
    },
    {
      title: "icon-wrapper --square --primary --outline --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        squareIcon: iconStyles,
      },
      classes: {
        wrapper: [
          "hggs-icon-wrapper",
          "hggs-icon--square",
          "hggs-icon--outline",
          "hggs-icon--primary",
        ],
        span: iconsClasses,
      },
      extraClasses: {
        sizes: iconSizesClases,
      },
    },
    {
      title: "icon-wrapper --square  --secondary --outline --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        squareIcon: iconStyles,
      },
      classes: {
        wrapper: [
          "hggs-icon-wrapper",
          "hggs-icon--square",
          "hggs-icon--outline",
          "hggs-icon--secondary",
        ],
        span: iconsClasses,
      },
      extraClasses: {
        sizes: iconSizesClases,
      },
    },
    {
      title: "icon-wrapper --square --outline --tertiary --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        squareIcon: iconStyles,
      },
      classes: {
        wrapper: [
          "hggs-icon-wrapper",
          "hggs-icon--square",
          "hggs-icon--outline",
          "hggs-icon--tertiary",
        ],
        span: iconsClasses,
      },
      extraClasses: {
        sizes: iconSizesClases,
      },
    },
    {
      title: "icon-wrapper --square --quaternary --outline --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        squareIcon: iconStyles,
      },
      classes: {
        wrapper: [
          "hggs-icon-wrapper",
          "hggs-icon--square",
          "hggs-icon--outline",
          "hggs-icon--quaternary",
        ],
        span: iconsClasses,
      },
      extraClasses: {
        sizes: iconSizesClases,
      },
    },
    {
      title: "icon-wrapper --square --quinary --outline --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleQuinaryStyles,
        header: headerWithSubtitleQuinaryStyles,
        subheader: subHeaderQuinaryStyles,
        squareIcon: iconStyles,
      },
      classes: {
        wrapper: [
          "hggs-icon-wrapper",
          "hggs-icon--square",
          "hggs-icon--outline",
          "hggs-icon--quinary",
        ],
        span: iconsClasses,
      },
      extraClasses: {
        sizes: iconSizesClases,
      },
    },
    {
      title: "icon-wrapper --square --senary --outline --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        squareIcon: iconStyles,
      },
      classes: {
        wrapper: [
          "hggs-icon-wrapper",
          "hggs-icon--square",
          "hggs-icon--outline",
          "hggs-icon--senary",
        ],
        span: iconsClasses,
      },
      extraClasses: {
        sizes: iconSizesClases,
      },
    },
  ],
};
