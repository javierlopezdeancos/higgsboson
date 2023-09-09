import setGlobalDataModel from "./setGlobalDataModel.mjs";
import loadThemeStyles from "./loadThemeStyles.mjs";
import renderTemplateIntoBodyDomNode from "./renderTemplateIntoBodyDomNode.mjs";

async function renderComponent(props) {
  if (!props?.model || !props?.configuration) {
    throw new Error("Try to render component without model or configuration");
  }

  setGlobalDataModel(props.model);
  renderTemplateIntoBodyDomNode(props.model);
  loadThemeStyles(props.configuration);
}

export default renderComponent;
