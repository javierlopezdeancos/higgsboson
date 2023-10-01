async function getConfiguration(higgsbosonFilePath = "./") {
  try {
    return await fetch(`${higgsbosonFilePath}higgsboson.json`).then((res) => res.json());
  } catch (e) {
    console.error("There is an error trying to get the higgsboson.json file");
    throw new Error(e);
  }
}

export default getConfiguration;
