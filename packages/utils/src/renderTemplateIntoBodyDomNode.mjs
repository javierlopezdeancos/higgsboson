function renderTemplateIntoBodyDomNode(model) {
  const template = document.querySelector("#template");
  const templateHTML = _.template(template.innerHTML);
  const text = templateHTML(model);
  const bodyNode = document.querySelector("#body");

  bodyNode.innerHTML = text;
}

export default renderTemplateIntoBodyDomNode;
