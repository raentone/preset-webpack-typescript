import { createElement } from "react";
import { render } from "react-dom";
import Component from "./example-component";

const component = createElement(Component);
console.log(component);

render(component, document.getElementById("app-root"));

