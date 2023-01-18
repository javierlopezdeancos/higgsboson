const data = {
  title: "Table",
  default: [
    {
      titles: {
        wrapper: "hggs-table-wrapper",
        table: "hggs-table",
        thead: "hggs-table-head",
        headCell: "hggs-table-cell--head",
        tbody: "hggs-table-body",
        cell: "hggs-table-cell",
      },
      styles: {
        header: headerStyles,
        article: articleStyles,
        titles: {
          wrapper: titleStyles,
          table: titleIndentation1xStyles,
          thead: titleIndentation2xStyles,
          headCell: titleIndentation3xStyles,
          tbody: titleIndentation2xStyles,
          cell: titleIndentation3xStyles,
        },
      },
      classes: {
        wrapper: ["hggs-table-wrapper"],
        table: ["hggs-table"],
        thead: ["hggs-table-head"],
        headCell: ["hggs-table-cell--head"],
        tbody: ["hggs-table-body"],
        capitalize: "hggs-table-cell--capitalize",
        cell: ["hggs-table-cell"],
        bold: ["hggs-table-cell--bold"],
        preparation: ["hggs-tag", "hggs-tag--primary", "hggs-tag--subtle", "hggs-tag--rounded", "hggs-tag--small"],
        pending: ["hggs-tag", "hggs-tag--tertiary", "hggs-tag--subtle", "hggs-tag--rounded", "hggs-tag--small"],
        complete: ["hggs-tag", "hggs-tag--senary", "hggs-tag--subtle", "hggs-tag--rounded", "hggs-tag--small"],
      },
      data: {
        headers: [
          {
            label: "Name",
            isCapitalized: false,
          },
          {
            label: "id",
            isCapitalized: true,
          },
          {
            label: "Country",
            isCapitalized: false,
          },
          {
            label: "Phase",
            isCapitalized: false,
          },
          {
            label: "Days Left",
            isCapitalized: false,
          },
          {
            label: "Progress",
            isCapitalized: false,
          },
          {
            label: "Due Date",
            isCapitalized: false,
          },
        ],
        rows: [
          [
            {
              label: "GRIF_114_0 VAL CS11720",
              isBold: true,
            },
            {
              label: "124536845130",
              isBold: false,
            },
            {
              label: "usa",
              isBold: true,
              isCapitalized: true,
            },
            {
              label: "Preparation",
              state: "preparation",
            },
            {
              label: "10",
            },
            {
              label: "20%",
            },
            {
              label: "01.12.2021",
            },
          ],
          [
            {
              label: "GRIF_114_0 VAL CS11721",
              isBold: true,
            },
            {
              label: "124536845131",
              isBold: false,
            },
            {
              label: "Germany",
              isBold: true,
              isCapitalized: false,
            },
            {
              label: "Pending",
              state: "pending",
            },
            {
              label: "2",
            },
            {
              label: "80%",
            },
            {
              label: "02.12.2021",
            },
          ],
          [
            {
              label: "GRIF_114_0 VAL CS11722",
              isBold: true,
            },
            {
              label: "124536845132",
              isBold: false,
            },
            {
              label: "Spain",
              isBold: true,
              isCapitalized: false,
            },
            {
              label: "Complete",
              state: "complete",
            },
            {
              label: "4",
            },
            {
              label: "60%",
            },
            {
              label: "03.12.2021",
            },
          ],
          [
            {
              label: "GRIF_114_0 VAL CS11723",
              isBold: true,
            },
            {
              label: "124536845133",
              isBold: false,
            },
            {
              label: "usa",
              isBold: true,
              isCapitalized: true,
            },
            {
              label: "Complete",
              state: "complete",
            },
            {
              label: "0",
            },
            {
              label: "30%",
            },
            {
              label: "04.12.2021",
            },
          ],
          [
            {
              label: "GRIF_114_0 VAL CS11724",
              isBold: true,
            },
            {
              label: "124536845134",
              isBold: false,
            },
            {
              label: "Spain",
              isBold: true,
              isCapitalized: false,
            },
            {
              label: "Pending",
              state: "pending",
            },
            {
              label: "8",
            },
            {
              label: "20%",
            },
            {
              label: "05.12.2021",
            },
          ],
        ],
      },
    },
  ],
};
