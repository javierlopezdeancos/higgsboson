function loadThemeStyle(higgsbosonConfiguration) {
  const cssFileHref = `${higgsbosonConfiguration?.outputPath}${higgsbosonConfiguration?.outputFilename}.css`;

  return new Promise(function (resolve, reject) {
    let link = document.createElement("link");
    link.href = cssFileHref;
    link.rel = "stylesheet";

    link.onload = () => resolve(link);
    link.onerror = () => reject(new Error(`Style load error for ${src}`));

    document.head.append(link);
  });
}

export default loadThemeStyle;
