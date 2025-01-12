// ! create a react app that takes a title as prop and renders it inside a div the top level app component
// ! renders 2 header

// function App() {
//   return (
//      <div>
//         <Header title="Navneet" />
//         <Header title="Pathak" />
//      </div>
//   )
// }

// function Header({title}) {
//   return <div>
//     {title}
//   </div>
// }

// export default App


// !  update the last app to allow user to update the title of the first header with a new title  

// import { Fragment, useState } from "react"

// function App() {
//    ! if parent rerender all the children rerender
//   const [title,setTitle] = useState("My name is Navneet");

//   function updateTitle(){
//     setTitle("my name is  "+ Math.random());
//   }
//   return (
//      <Fragment>
//         <button onClick={updateTitle} > If you click on this button the first name will be change</button>
//         <Header title={title}></Header>  
//         <Header title="Pathak" />
//         <Header title="Harkirat" />
//         <Header title="Pathak" />
//         <Header title="Piyush" />
//      </Fragment>
//   )
// }

// function Header({title}) {
//   return <div>
//     {title}
//   </div>
// }

// export default App


// ! how can you fix

// import {  useState } from "react"

// function App() {
//   return (
//      <div>
//         <HeaderButton/>
//         <Header title="my name is navneet"></Header>
//         <Header title="my name is harkirat"></Header>

//      </div>
//   )
// }

// function HeaderButton(){
//   const [title,setTitle]=useState("my name is navneet");
//   function changeTitle(){
//     setTitle("my name is "+Math.random());
//   }
//   return <div>
//     <button onClick={changeTitle}>chick me to change the title</button>
//     <Header title={title}></Header>

//   </div>
// }

// function Header({title}){
//   return <div>
//     {title}
//   </div>
// }

// export default App


// ! React.memo (memoization)
// ! is its props are unchanged then skip rerendering

// import React from "react";
// import { Fragment, useState } from "react"

// function App() {
//   const [title,setTitle] = useState("My name is Navneet");

//   function updateTitle(){
//     setTitle("my name is  "+ Math.random());
//   }
//   return (
//      <Fragment>
//         <button onClick={updateTitle} >click me to change title </button>
//         <Header title={title}></Header>
//         <Header title={title}></Header> 
//         <Header title="Pathak" />
//         <Header title="Harkirat" />
//         <Header title="Pathak" />
//         <Header title="Piyush" />
//      </Fragment>
//   )
// }

// const Header=React.memo(function Header({title}) {
//   return <div>
//     {title}
//   </div>
// })

// export default App

// ! create a todo app

// import React, { useState } from "react";

// function App() {
//   const [todos, setTodo] = useState([
//     {
//       id: 1,
//       title: "go to gym",
//       description: "go to gym today",
//     },
//     {
//       id: 2,
//       title: "go to gym",
//       description: "go to gym today",
//     },
//     {
//       id: 3,
//       title: "go to gym",
//       description: "go to gym today",
//     },
//   ]);

//   function addTodo() {
//     setTodo([
//       ...todos,
//       {
//         id: todos.length + 1,
//         title: `Task ${todos.length + 1}`,
//         description: `Description ${todos.length + 1}`,
//       },
//     ]);
//   }

//   return (
//     <div>
//       <button onClick={addTodo}>Add Todo</button>
      // {todos.map((todo) => (
      //   <Todo
      //     key={todo.id}
      //     title={todo.title}
      //     description={todo.description}
      //   />
      // ))}
//     </div>
//   );
// }

// function Todo({ title, description }) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <h3>{description}</h3>
//     </div>
//   );
// }

// export default App;



// ! keys  ==> unique key for every elements

// import React, { useState } from "react"

// function App(){
// const [todos,createTodo]=useState([{
//   id: 1,
//   title:"go to gym",
//   description:"gym"
// },{
//   id: 2,
//   title:"go to gym",
//   description:"gym"
// },{
//   id: 3,
//   title:"go to gym",
//   description:"gym"
// }]);
// function addTodo() {
//   createTodo([
//     ...todos, 
//     {
//       id: todos.length + 1,
//       title: `task ${todos.length + 1}`,
//       description: `task ${todos.length + 1}`,
//     },
//   ]);
// }
//   return <div>
//     <button onClick={addTodo} >Add todo</button>
//     {todos.map((todo) => (
//         <Todo
//           key={todo.id} //! key is important
//           title={todo.title}
//           description={todo.description}
//         />
//       ))}
//   </div>
// }
// function Todo({ title,description}){
//   return <div>
//     <h1>{title}</h1>
//     <h3>{description}</h3>
//   </div>
// }

// export default App;


// ! wrapper component

// function App() {
  
//   return <>
  
//      <CardWrapper><TextComponent /></CardWrapper>
  
//      <br />
  
//      <CardWrapper><Texts /></CardWrapper>
  
//      <br />
  
//      <MainWrapper><CardWrapper><Texts /></CardWrapper></MainWrapper>
  
//   </>

// }

// function CardWrapper({ children }) {
  
   // ! writing the single card for multiple card

//   return <div style={{ border: "2px solid black", padding:20 }}>{children}</div>;

// }

// function MainWrapper({ children }){

//   return <div style={{ border: "2px solid black", padding:20 }}>{children}</div>;

// }

// function Texts() {
//   return <div>hello bro</div>
// }

// function TextComponent() {
//   return <div>hi there</div>;
// }

// export default App;

// ! two jargons
// 1. side effects
// 2. hooks

// ! side effects: setTimeout, fetch, setInterval, document.getElementById("").innerHTML+""


// ! In React, **side effects** are anything that affects something outside of a component,
//!  or interacts with the "outside world," rather than just calculating and rendering the UI. Examples include:  

//! - Fetching data from an API.  
// !- Updating the browser title.  
// !- Subscribing to or cleaning up event listeners.  

// ! React uses the **useEffect** hook to handle these side effects. It ensures that these effects are 
//! executed at the right time (like after rendering) and cleaned up when necessary.

// ! hooks ==> start with use are called hooks
//! hook into the react state 


// import React, { useEffect } from "react";

// function App() {
  
//   useEffect(function(){
//     alert("hi there")
//   },[])
//   return <>
//   <div>hello</div>
    

//   </>

// }

// export default App;


// ! useEffect

// import React, { useEffect, useState } from "react";

// function App() {
//   const [todos,setTodo]=useState([]);
//   useEffect(function(){
//     setInterval(()=>{
//       fetch("https://sun-server.100xdevs.com/todos")
//     .then(async (res)=>{
//       const json=await res.json();
//       setTodos(json.Todos);
//     })
//     },10000)

//   },[200])
//   return <>

//   <div>
//     {todos.length}
//   {todos.map((todo) => (
//         <Todo
//           key={todo.id}
//           title={todo.title}
//           description={todo.description}
//         />
//   ))}    
//   </div>
    

//   </>

// }
// function Todo({title,description}){
//   return <div>
//     {title}
//     {description}
//   </div>
// }

// export default App;

//! common hooks in react


import React, { useEffect } from "react";

function App() {
  
  useEffect(function(){
    alert("hi there")
  },[])
  return <>

  <div>hello</div>
    

  </>

}

export default App;
