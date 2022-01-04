const template = document.querySelector("#template");
const templateHTML = _.template(template.innerHTML);
const text = templateHTML(data);
const bodyNode = document.querySelector("#body");

bodyNode.innerHTML = text;
