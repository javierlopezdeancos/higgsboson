const iconsClasses = [
  ["hggs-icon", "hggs-icon--edit"],
  ["hggs-icon", "hggs-icon--hamburger-menu"],
  ["hggs-icon", "hggs-icon--log-out"],
  ["hggs-icon", "hggs-icon--question"],
  ["hggs-icon", "hggs-icon--user"],
  ["hggs-icon", "hggs-icon--close"],
  ["hggs-icon", "hggs-icon--plus"],
];

const headerStyles = ["margin-bottom: 20px"];

const headerWithSubtitleStyles = ["margin-bottom: 0"];

const headerWithSubtitleQuinaryStyles = ["margin-bottom: 0", "color: white"];

const headerQuinaryStyles = ["margin-bottom: 20px", "color: white"];

const subHeaderStyles = [
  "margin-top: 0",
  "margin-bottom: 20px",
  "color: #565656",
];

const subHeaderQuinaryStyles = [
  "margin-top: 0",
  "margin-bottom: 20px",
  "color: white",
];

const articleStyles = ["margin-bottom: 30px", "width: 100%"];

const articleQuinaryStyles = [
  "margin-bottom: 30px",
  "width: 100%",
  "background: black",
  "padding: 0 10px 0 10px",
];

const buttonStyles = ["margin-right: 20px"];

const data = {
  title: "Buttons",
  default: [
    {
      title: "button",
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
      classes: {
        button: ["hggs-button"],
      },
    },
    {
      title: "button --big",
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--big"],
      },
    },
    {
      title: "button --medium",
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--medium"],
      },
    },
    {
      title: "button --small",
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--small"],
      },
    },
    {
      title: "button --outline",
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--outline"],
      },
    },
    {
      title: "button --outline --medium",
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--outline", "hggs-button--medium"],
      },
    },
    {
      title: "button --outline --small",
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--outline", "hggs-button--small"],
      },
    },
    {
      title: "button --primary",
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--primary"],
      },
    },
    {
      title: "button --primary --big",
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--primary", "hggs-button--big"],
      },
    },
    {
      title: "button --primary --medium",
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--primary", "hggs-button--medium"],
      },
    },
    {
      title: "button --primary --small",
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--primary", "hggs-button--small"],
      },
    },
    {
      title: "button --primary --outline",
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--primary", "hggs-button--outline"],
      },
    },
    {
      title: "button --primary --outline --medium",
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
      classes: {
        button: [
          "hggs-button",
          "hggs-button--primary",
          "hggs-button--outline",
          "hggs-button--medium",
        ],
      },
    },
    {
      title: "button --primary --outline --small",
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
      classes: {
        button: [
          "hggs-button",
          "hggs-button--primary",
          "hggs-button--outline",
          "hggs-button--small",
        ],
      },
    },
    {
      title: "button --secondary",
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--secondary"],
      },
    },
    {
      title: "button --secondary --big",
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--secondary", "hggs-button--big"],
      },
    },
    {
      title: "button --secondary --medium",
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
      classes: {
        button: [
          "hggs-button",
          "hggs-button--secondary",
          "hggs-button--medium",
        ],
      },
    },
    {
      title: "button --secondary --small",
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--secondary", "hggs-button--small"],
      },
    },
    {
      title: "button --secondary --outline",
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
      classes: {
        button: [
          "hggs-button",
          "hggs-button--secondary",
          "hggs-button--outline",
        ],
      },
    },
    {
      title: "button --secondary --outline --medium",
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
      classes: {
        button: [
          "hggs-button",
          "hggs-button--secondary",
          "hggs-button--outline",
          "hggs-button--medium",
        ],
      },
    },
    {
      title: "button --secondary --outline --small",
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
      classes: {
        button: [
          "hggs-button",
          "hggs-button--secondary",
          "hggs-button--outline",
          "hggs-button--small",
        ],
      },
    },
    {
      title: "button --tertiary",
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--tertiary"],
      },
    },
    {
      title: "button --tertiary --big",
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--tertiary", "hggs-button--big"],
      },
    },
    {
      title: "button --tertiary --medium",
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--tertiary", "hggs-button--medium"],
      },
    },
    {
      title: "button --tertiary --small",
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--tertiary", "hggs-button--small"],
      },
    },
    {
      title: "button --tertiary --outline",
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
      classes: {
        button: [
          "hggs-button",
          "hggs-button--tertiary",
          "hggs-button--outline",
        ],
      },
    },
    {
      title: "button --tertiary --outline --medium",
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
      classes: {
        button: [
          "hggs-button",
          "hggs-button--tertiary",
          "hggs-button--outline",
          "hggs-button--medium",
        ],
      },
    },
    {
      title: "button --tertiary --outline --small",
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
      classes: {
        button: [
          "hggs-button",
          "hggs-button--tertiary",
          "hggs-button--outline",
          "hggs-button--small",
        ],
      },
    },
    {
      title: "button --quaternary",
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--quaternary"],
      },
    },
    {
      title: "button --quaternary --big",
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--quaternary", "hggs-button--big"],
      },
    },
    {
      title: "button --quaternary --medium",
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
      classes: {
        button: [
          "hggs-button",
          "hggs-button--quaternary",
          "hggs-button--medium",
        ],
      },
    },
    {
      title: "button --quaternary --small",
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
      classes: {
        button: [
          "hggs-button",
          "hggs-button--quaternary",
          "hggs-button--small",
        ],
      },
    },
    {
      title: "button --quaternary --outline",
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
      classes: {
        button: [
          "hggs-button",
          "hggs-button--quaternary",
          "hggs-button--outline",
        ],
      },
    },
    {
      title: "button --quaternary --outline --medium",
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
      classes: {
        button: [
          "hggs-button",
          "hggs-button--quaternary",
          "hggs-button--outline",
          "hggs-button--medium",
        ],
      },
    },
    {
      title: "button --quaternary --outline --small",
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
      classes: {
        button: [
          "hggs-button",
          "hggs-button--quaternary",
          "hggs-button--outline",
          "hggs-button--small",
        ],
      },
    },
    {
      title: "button --quinary",
      styles: {
        header: headerQuinaryStyles,
        article: [
          "margin-bottom: 30px",
          "width: 100%",
          "background: black",
          "padding: 0 10px 0 10px",
        ],
      },
      classes: {
        button: ["hggs-button", "hggs-button--quinary"],
      },
    },
    {
      title: "button --quinary --big",
      styles: {
        header: headerQuinaryStyles,
        article: articleQuinaryStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--quinary", "hggs-button--big"],
      },
    },
    {
      title: "button --quinary --medium",
      styles: {
        header: headerQuinaryStyles,
        article: articleQuinaryStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--quinary", "hggs-button--medium"],
      },
    },
    {
      title: "button --quinary --small",
      styles: {
        header: headerQuinaryStyles,
        article: articleQuinaryStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--quinary", "hggs-button--small"],
      },
    },
    {
      title: "button --quinary --outline",
      styles: {
        header: headerQuinaryStyles,
        article: articleQuinaryStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--quinary", "hggs-button--outline"],
      },
    },
    {
      title: "button --quinary --outline --medium",
      styles: {
        header: headerQuinaryStyles,
        article: articleQuinaryStyles,
      },
      classes: {
        button: [
          "hggs-button",
          "hggs-button--quinary",
          "hggs-button--outline",
          "hggs-button--medium",
        ],
      },
    },
    {
      title: "button --quinary --outline --small",
      styles: {
        header: headerQuinaryStyles,
        article: articleQuinaryStyles,
      },
      classes: {
        button: [
          "hggs-button",
          "hggs-button--quinary",
          "hggs-button--outline",
          "hggs-button--small",
        ],
      },
    },
    {
      title: "button --senary",
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--senary"],
      },
    },
    {
      title: "button --senary --big",
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--senary", "hggs-button--big"],
      },
    },
    {
      title: "button --senary --medium",
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--senary", "hggs-button--medium"],
      },
    },
    {
      title: "button --senary --small",
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--senary", "hggs-button--small"],
      },
    },
    {
      title: "button --senary --outline",
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--senary", "hggs-button--outline"],
      },
    },
    {
      title: "button --senary --outline --medium",
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
      classes: {
        button: [
          "hggs-button",
          "hggs-button--senary",
          "hggs-button--outline",
          "hggs-button--medium",
        ],
      },
    },
    {
      title: "button --senary --outline --small",
      styles: {
        header: headerStyles,
        article: articleStyles,
      },
      classes: {
        button: [
          "hggs-button",
          "hggs-button--senary",
          "hggs-button--outline",
          "hggs-button--small",
        ],
      },
    },
  ],
  icons: [
    {
      title: "button --icon",
      styles: {
        article: articleStyles,
        header: headerStyles,
        button: buttonStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--icon"],
        span: iconsClasses,
      },
    },
    {
      title: "button --icon --primary",
      styles: {
        article: articleStyles,
        header: headerStyles,
        button: buttonStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--icon", "hggs-button--primary"],
        span: iconsClasses,
      },
    },
    {
      title: "button --icon --secondary",
      styles: {
        article: articleStyles,
        header: headerStyles,
        button: buttonStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--icon", "hggs-button--secondary"],
        span: iconsClasses,
      },
    },
    {
      title: "button --icon --tertiary",
      styles: {
        article: articleStyles,
        header: headerStyles,
        button: buttonStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--icon", "hggs-button--tertiary"],
        span: iconsClasses,
      },
    },
    {
      title: "button --icon --quaternary",
      styles: {
        article: articleStyles,
        header: headerStyles,
        button: buttonStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--icon", "hggs-button--quaternary"],
        span: iconsClasses,
      },
    },
    {
      title: "button --icon --quinary",
      styles: {
        article: articleQuinaryStyles,
        header: headerQuinaryStyles,
        button: buttonStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--icon", "hggs-button--quinary"],
        span: iconsClasses,
      },
    },
    {
      title: "button --icon --senary",
      styles: {
        article: articleStyles,
        header: headerStyles,
        button: buttonStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--icon", "hggs-button--senary"],
        span: iconsClasses,
      },
    },
  ],
  iconsWithLabel: [
    {
      title: "button --icon",
      subtitle: "icon-wrapper",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        button: buttonStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--icon"],
        span: iconsClasses,
      },
    },
    {
      title: "button --primary  --icon",
      subtitle: "icon-wrapper",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        button: buttonStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--primary", "hggs-button--icon"],
        span: iconsClasses,
      },
    },
    {
      title: "button --secondary  --icon",
      subtitle: "icon-wrapper",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        button: buttonStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--secondary", "hggs-button--icon"],
        span: iconsClasses,
      },
    },
    {
      title: "button --tertiary  --icon",
      subtitle: "icon-wrapper",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        button: buttonStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--tertiary", "hggs-button--icon"],
        span: iconsClasses,
      },
    },
    {
      title: "button --quaternary  --icon",
      subtitle: "icon-wrapper",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        button: buttonStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--quaternary", "hggs-button--icon"],
        span: iconsClasses,
      },
    },
    {
      title: "button --quinary  --icon",
      subtitle: "icon-wrapper",
      styles: {
        article: articleQuinaryStyles,
        header: headerWithSubtitleQuinaryStyles,
        subheader: subHeaderQuinaryStyles,
        button: buttonStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--quinary", "hggs-button--icon"],
        span: iconsClasses,
      },
    },
    {
      title: "button --senary  --icon",
      subtitle: "icon-wrapper",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        button: buttonStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--senary", "hggs-button--icon"],
        span: iconsClasses,
      },
    },
  ],
  squareIcons: [
    {
      title: "button --square --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        button: buttonStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--square"],
        span: iconsClasses,
      },
      extraClasses: {
        button: ["hggs-button--small", "hggs-button--micro"],
      },
    },
    {
      title: "button --square --primary --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        button: buttonStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--square hggs-button--primary"],
        span: iconsClasses,
      },
      extraClasses: {
        button: ["hggs-button--small", "hggs-button--micro"],
      },
    },
    {
      title: "button --square  --secondary --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        button: buttonStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--square hggs-button--secondary"],
        span: iconsClasses,
      },
      extraClasses: {
        button: ["hggs-button--small", "hggs-button--micro"],
      },
    },
    {
      title: "button --square  --tertiary --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        button: buttonStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--square hggs-button--tertiary"],
        span: iconsClasses,
      },
      extraClasses: {
        button: ["hggs-button--small", "hggs-button--micro"],
      },
    },
    {
      title: "button --square  --quaternary --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        button: buttonStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--square hggs-button--quaternary"],
        span: iconsClasses,
      },
      extraClasses: {
        button: ["hggs-button--small", "hggs-button--micro"],
      },
    },
    {
      title: "button --square  --quinary --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleQuinaryStyles,
        header: headerWithSubtitleQuinaryStyles,
        subheader: subHeaderQuinaryStyles,
        button: buttonStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--square hggs-button--quinary"],
        span: iconsClasses,
      },
      extraClasses: {
        button: ["hggs-button--small", "hggs-button--micro"],
      },
    },
    {
      title: "button --square  --senary --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        button: buttonStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--square hggs-button--senary"],
        span: iconsClasses,
      },
      extraClasses: {
        button: ["hggs-button--small", "hggs-button--micro"],
      },
    },
    {
      title: "button --square --outline --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        button: buttonStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--square hggs-button--outline"],
        span: iconsClasses,
      },
      extraClasses: {
        button: ["hggs-button--small", "hggs-button--micro"],
      },
    },
    {
      title: "button --square s--primary --outline --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        button: buttonStyles,
      },
      classes: {
        button: [
          "hggs-button",
          "hggs-button--square hggs-button--outline hggs-button--primary",
        ],
        span: iconsClasses,
      },
      extraClasses: {
        button: ["hggs-button--small", "hggs-button--micro"],
      },
    },
    {
      title: "button --square  --secondary --outline --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        button: buttonStyles,
      },
      classes: {
        button: [
          "hggs-button",
          "hggs-button--square hggs-button--outline hggs-button--secondary",
        ],
        span: iconsClasses,
      },
      extraClasses: {
        button: ["hggs-button--small", "hggs-button--micro"],
      },
    },
    {
      title: "button --square --outline --tertiary --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        button: buttonStyles,
      },
      classes: {
        button: [
          "hggs-button",
          "hggs-button--square hggs-button--outline hggs-button--tertiary",
        ],
        span: iconsClasses,
      },
      extraClasses: {
        button: ["hggs-button--small", "hggs-button--micro"],
      },
    },
    {
      title: "button --square  --quaternary --outline --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        button: buttonStyles,
      },
      classes: {
        button: [
          "hggs-button",
          "hggs-button--square hggs-button--outline hggs-button--quaternary",
        ],
        span: iconsClasses,
      },
      extraClasses: {
        button: ["hggs-button--small", "hggs-button--micro"],
      },
    },
    {
      title: "button --square  --quinary --outline --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleQuinaryStyles,
        header: headerWithSubtitleQuinaryStyles,
        subheader: subHeaderQuinaryStyles,
        button: buttonStyles,
      },
      classes: {
        button: [
          "hggs-button",
          "hggs-button--square hggs-button--outline hggs-button--quinary",
        ],
        span: iconsClasses,
      },
      extraClasses: {
        button: ["hggs-button--small", "hggs-button--micro"],
      },
    },
    {
      title: "button --square  --senary ---outline -{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        button: buttonStyles,
      },
      classes: {
        button: [
          "hggs-button",
          "hggs-button--square hggs-button--outline hggs-button--senary",
        ],
        span: iconsClasses,
      },
      extraClasses: {
        button: ["hggs-button--small", "hggs-button--micro"],
      },
    },
  ],
  circleIcons: [
    {
      title: "button --circle --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        button: buttonStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--circle"],
        span: iconsClasses,
      },
      extraClasses: {
        button: ["hggs-button--small", "hggs-button--micro"],
      },
    },
    {
      title: "button --circle --primary --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        button: buttonStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--circle hggs-button--primary"],
        span: iconsClasses,
      },
      extraClasses: {
        button: ["hggs-button--small", "hggs-button--micro"],
      },
    },
    {
      title: "button --circle  --secondary --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        button: buttonStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--circle hggs-button--secondary"],
        span: iconsClasses,
      },
      extraClasses: {
        button: ["hggs-button--small", "hggs-button--micro"],
      },
    },
    {
      title: "button --circle  --tertiary --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        button: buttonStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--circle hggs-button--tertiary"],
        span: iconsClasses,
      },
      extraClasses: {
        button: ["hggs-button--small", "hggs-button--micro"],
      },
    },
    {
      title: "button --circle  --quaternary --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        button: buttonStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--circle hggs-button--quaternary"],
        span: iconsClasses,
      },
      extraClasses: {
        button: ["hggs-button--small", "hggs-button--micro"],
      },
    },
    {
      title: "button --circle  --quinary --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleQuinaryStyles,
        header: headerWithSubtitleQuinaryStyles,
        subheader: subHeaderQuinaryStyles,
        button: buttonStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--circle hggs-button--quinary"],
        span: iconsClasses,
      },
      extraClasses: {
        button: ["hggs-button--small", "hggs-button--micro"],
      },
    },
    {
      title: "button --circle  --senary --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        button: buttonStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--circle hggs-button--senary"],
        span: iconsClasses,
      },
      extraClasses: {
        button: ["hggs-button--small", "hggs-button--micro"],
      },
    },
    {
      title: "button --circle --outline --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        button: buttonStyles,
      },
      classes: {
        button: ["hggs-button", "hggs-button--circle hggs-button--outline"],
        span: iconsClasses,
      },
      extraClasses: {
        button: ["hggs-button--small", "hggs-button--micro"],
      },
    },
    {
      title: "button --circle s--primary --outline --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        button: buttonStyles,
      },
      classes: {
        button: [
          "hggs-button",
          "hggs-button--circle hggs-button--outline hggs-button--primary",
        ],
        span: iconsClasses,
      },
      extraClasses: {
        button: ["hggs-button--small", "hggs-button--micro"],
      },
    },
    {
      title: "button --circle  --secondary --outline --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        button: buttonStyles,
      },
      classes: {
        button: [
          "hggs-button",
          "hggs-button--circle hggs-button--outline hggs-button--secondary",
        ],
        span: iconsClasses,
      },
      extraClasses: {
        button: ["hggs-button--small", "hggs-button--micro"],
      },
    },
    {
      title: "button --circle --outline --tertiary --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        button: buttonStyles,
      },
      classes: {
        button: [
          "hggs-button",
          "hggs-button--circle hggs-button--outline hggs-button--tertiary",
        ],
        span: iconsClasses,
      },
      extraClasses: {
        button: ["hggs-button--small", "hggs-button--micro"],
      },
    },
    {
      title: "button --circle  --quaternary --outline --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        button: buttonStyles,
      },
      classes: {
        button: [
          "hggs-button",
          "hggs-button--circle hggs-button--outline hggs-button--quaternary",
        ],
        span: iconsClasses,
      },
      extraClasses: {
        button: ["hggs-button--small", "hggs-button--micro"],
      },
    },
    {
      title: "button --circle  --quinary --outline --{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleQuinaryStyles,
        header: headerWithSubtitleQuinaryStyles,
        subheader: subHeaderQuinaryStyles,
        button: buttonStyles,
      },
      classes: {
        button: [
          "hggs-button",
          "hggs-button--circle hggs-button--outline hggs-button--quinary",
        ],
        span: iconsClasses,
      },
      extraClasses: {
        button: ["hggs-button--small", "hggs-button--micro"],
      },
    },
    {
      title: "button --circle  --senary ---outline -{size}",
      subtitle: "icon --{type-of-icon}",
      styles: {
        article: articleStyles,
        header: headerWithSubtitleStyles,
        subheader: subHeaderStyles,
        button: buttonStyles,
      },
      classes: {
        button: [
          "hggs-button",
          "hggs-button--circle hggs-button--outline hggs-button--senary",
        ],
        span: iconsClasses,
      },
      extraClasses: {
        button: ["hggs-button--small", "hggs-button--micro"],
      },
    },
  ],
};
