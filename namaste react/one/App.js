import React from "react";
import ReactDOM from "react-dom/client"

const heading1 = React.createElement("h1", { id: "hello", key: "h1" }, "Hello world");
const heading2 = React.createElement("h1", { id: "hello2", key: "h2" }, "Hello again");

const container = React.createElement("div", {
  id: "container",
  style: { backgroundColor: "red" }
}, [heading1, heading2]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
