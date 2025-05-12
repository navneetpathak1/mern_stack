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

// ! jsx
const heading4 = (
  <h1 key="n"> Hello world : </h1>
)

// ! React Component
// 1
const HeaderComponent = () => {
  return (
    <div>
      <h1>heading1</h1>
      <h2>heading2</h2>
    </div>
  )
}
// 2 both are same

var xyz = 10;
const HeaderComponent2 = () => (
    <div  style={{ backgroundColor: "red" }}>
      {xyz}
      {heading1}
      {heading2}
      {heading3}
      {heading4}
      <HeaderComponent key="hc1"/>
      <h1>heading1</h1>
      <h2>heading2</h2>
    </div>
  );

// const container = React.createElement("div", {
//   id: "container",
//   style: { backgroundColor: "red" }
// }, [<HeaderComponent2 key="hc2"/>]);


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent2 key="hc2"/>)

