import React from "react";
import ReactDOM from "react-dom/client"
import { createElement } from "react";

const heading1 = React.createElement("h1", { id: "hello", key: "h1" }, "Hello world");
const heading2 = React.createElement("h1", { id: "hello2", key: "h2" }, "Hello again");

const heading3 = createElement("ul" , {key:"ul"}, [
  createElement("li" ,{key:"li"}, "Home"),
  createElement("li" ,{key:"li2"}, "Details"),
  createElement("li" ,{key:"li3"}, "Contacts"),
])

const heading4 = (
  <h1 key="n"> Hello world : </h1>
)

const container = React.createElement("div", {
  id: "container",
  style: { backgroundColor: "red" }
}, [heading1, heading2, heading3, heading4]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
