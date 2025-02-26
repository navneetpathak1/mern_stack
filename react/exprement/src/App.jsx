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


// ! wrapper component (children concept in react)

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
  // useEffect(function(){
  //   setInterval(()=>{
  //     fetch("https://sun-server.100xdevs.com/todos")
  //   .then(async (res)=>{
  //     const json=await res.json();
  //     setTodos(json.Todos);
  //   })
  //   },10000)

  // },[200])
  // return <>

  // <div>
  //   {todos.length}
  // {todos.map((todo) => (
  //       <Todo
  //         key={todo.id}
  //         title={todo.title}
  //         description={todo.description}
  //       />
  // ))}    
  // </div>
    

  // </>

// }
// function Todo({title,description}){
//   return <div>
//     {title}
//     {description}
//   </div>
// }

// export default App;

//! common hooks in react

// ! useState => it lets you describe the state of your application

// import React, { useState } from "react";

// function App() {
//   const [count,setCount]=useState(0);
//   function increment(){
//     setCount(count+1)
//   }
// return <>

//   <button onClick={increment}>Counter {count}</button>


//   </>

// }

// export default App;


//! useEffect => to use side effects`1

// import React, { useEffect, useState } from "react";

// function App() { 
//   const [todos,setTodo]=useState([]);

//   useEffect(function(){ //! the code run only one time when the app will run 
//     setInterval(()=>{
//       fetch("https://sun-server.100xdevs.com/todos")
//     .then(async (res)=>{
//       const json=await res.json();
//       setTodos(json.Todos);
//     })
//     },10000)

//   },[]) //! dependency array =>state var as input and any time state var change the code will re-run
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

// export default App;


// ! when id change  only then  todo change


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
//   const [count, setCount] = useState(0);
  
//   function increment() {
//     setCount(count + 1);
//   }

//   return (
//     <>
//       <Todo id={1} />
//     </>
//   );
// }

// function Todo({ id }) {
//   const [todo, setTodo] = useState(null); // Initialize with null or an empty object
  
//   useEffect(() => {
//     axios
//       .get("https://sum-server.100xdevs.com/todo?id=" + id)
//       .then(function (response) {
//         setTodo(response.data.todos);
//       })
//       .catch((error) => {
//         console.error("Error fetching todo:", error);
//       });
//   }, [id]); // Add id as a dependency

//   return (
//     <div>
//       {todo ? (
//         <>
//           <h3>{todo.title}</h3>
//           <p>{todo.description}</p>
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default App;


// ! according to button todo change

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
//   const [count, setCount] = useState(0);
  
//   function increment() {
//     setCount(count + 1);
//   }
//   function decr() {
//     if (count > 0) {
//       setCount(count - 1);
//     }
//   }
//   return (
//     <>
//       <button onClick={increment}>+</button>
//       <button onClick={decr}>-</button>
//       <p>Current Count: {count}</p>
//       <Todo id={count} />
//     </>
//   );
// }

// function Todo({ id }) {
//   const [todo, setTodo] = useState(null); // Initialize with null or an empty object
  
//   useEffect(() => {
//     axios
//       .get("https://sum-server.100xdevs.com/todo?id=" + id)
//       .then(function (response) {
//         setTodo(response.data.todos);
//       })
//       .catch((error) => {
//         console.error("Error fetching todo:", error);
//       });
//   }, [id]); // Add id as a dependency

//   return (
//     <div>
//       {todo ? (
//         <>
//           <h3>{todo.title}</h3>
//           <p>{todo.description}</p>
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default App;


// ! click on the button then id become the that clicked button number 


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
//   const [count, setCount] = useState(1);
//   function update(no){
//     setCount(no);
//   }
  
//   return (
//     <>
//       <button onClick={() => update(1)}>1</button>
//       <button onClick={() => update(2)}>2</button>
//       <button onClick={() => update(3)}>3</button>
      
//       <Todo id={count} />
//     </>
//   );
// }

// function Todo({ id }) {
//   const [todo, setTodo] = useState(null); // Initialize with null or an empty object
  
//   useEffect(() => {
//     axios
//       .get(`https://sum-server.100xdevs.com/todo?id=${id}`)
//       .then(function (response) {
//         setTodo(response.data.todos);
//       })
//       .catch((error) => {
//         console.error("Error fetching todo:", error);
//       });
//   }, [id]); // Add id as a dependency

//   return (
//     <div>
//       {todo ? (
//         <>
//           <h3>{todo.title}</h3>
//           <p>{todo.description}</p>
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default App;


// ! useMemo 
// ! memoization-> remembering some output given an input not computing it again

// import React, { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const [inputVal, setInputVal] = useState(1);

//   function increment() {
//     setCount(count + 1);
//   }
//   let counter = 0;
//   for (let i = 1; i <= inputVal; i++) {
//     counter += i;
//   }

//   return (
//     <>
//       <input
//         type="number"
//         value={inputVal}
//         onChange={(e) => setInputVal((e.target.value))} 
//       />
//       <p>
//         Sum from 1 to {inputVal} is {counter}
//       </p>
//       <br />
//       <button onClick={increment}>Counter {count}</button>
//     </>
//   );
// }

// export default App;


// ! using useEffect

// import React, { useEffect, useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const [inputVal, setInputVal] = useState(1);
//   const [finalVal,setFinal] = useState(0); //! two rerender
//   function increment() {
//     setCount(count + 1);
//   }
//   useEffect(()=>{
//     let counter = 0;
//     for (let i = 1; i <= inputVal; i++) {
//       counter += i;
//     }
//     setFinal(counter);
//   },[inputVal])

//   return (
//     <>
//       <input
//         type="number"
//         value={inputVal}
//         onChange={(e) => setInputVal((e.target.value))} 
//       />
//       <p>
//         Sum from 1 to {inputVal} is {finalVal}
//       </p>
//       <br />
//       <button onClick={increment}>Counter {count}</button>
//     </>
//   );
// }

// export default App;


// ! useMemo

// import React, { useMemo, useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const [inputVal, setInputVal] = useState(1);
  
  // function increment() {
  //      setCount(count + 1);
  //  }

//   let counter=useMemo(()=>{
//     let ans=0;
//     for(let i=0;i<inputVal;i++){
//       ans+=i;
//     }
//     return ans;

//   },[inputVal])


//   return (
//     <>
//       <input
//         type="number"
//         value={inputVal}
//         onChange={(e) => setInputVal((e.target.value))} 
//       />
//       <p>
//         Sum from 1 to {inputVal} is {counter}
//       </p>
//       <br />
//       <button onClick={increment}>Counter {count}</button>
//     </>
//   );
// }

// export default App;


// ! useCallback

// ! useCallback => used to memoize functions, which can helps in optimizing the performance of application
// ! especially in cases involving child components that rely on reference equality to prevent unnecessary renders

//! reference equality


  // import React, { memo, useCallback, useMemo, useState } from "react";

  // function App() {
  //   const [count, setCount] = useState(0);

    // function inputFunction(){
    //   console.log("hi there")
    // } //! this will also rerender because react can not determine that input is changing or not

  //   const inputFunction= useCallback(()=>{
  //     console.log("hi there");
  //   },[]) //! now react can determine that no change means no re rendering
    
  //   return (
  //     <>
  //     <ButtonComponent inputFunction={inputFunction}/>
  //       <button onClick={()=>{
  //         setCount(count+1)
  //       }}>Counter {count}</button>

  //     </>
  //   );
  // }
  
  // const ButtonComponent = memo(({inputFunction})=>{
  //   console.log("child render");

  //   return <div>
  //     <button>button clicked</button>
  //   </div>
  // })


  // export default App;
  

// ! custom hooks=>  you can write your own hooks. only condition is it should start with "use"

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function useTodos() {
//   const [Todos,seTodos] = useState([]);

//   useEffect(()=>{
//     axios
//       .get("https://sum-server.100xdevs.com/todo?id=" + id)
//       .then(function (response) {
//         setTodo(response.data.todos);
//       })
//   },[])
// }

// function App() {
//   const todos=useTodos();

//   return (
//     <>
//       {todos}
//     </>
//   );
// }



// export default App;

// ! reconciliation => finding the what should dom lock like using the given state

// ! useRef =>  access dom element access
  // document.getElementById

// import React, { useEffect, useRef, useState } from "react";  


// function App() {
//   const [incomeTax, setIncomeTax] = useState(2000);

//   const divRef=useRef();

//   useEffect(()=>{
//     setTimeout(()=>{
//       divRef.Current.innerHTML ="10"
//     },5000)
//   },[])


//   return (
//     <>
//       hi there your income tax returns are <div ref={divRef}>{incomeTax}</div>
//     </>
//   );
// }
// export default App;

// ! Routing => 
  // ! jargon
// ! 1. single page application=> react is a single page application
// ! 2. client side bundle 
// ! 3. client side routing

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Dashboard } from "./components/Dashboard";
// import { Landing } from "./components/landing";


// function App() {

//   return (
//     <>
//       <h3>hi this is top bar</h3>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/dashboard" element={<Dashboard/>}></Route>
//           <Route path="/" element={<Landing/>}></Route>
//         </Routes>  
//       </BrowserRouter>

//     </>
//   );
// }
// export default App;


// !


// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Dashboard } from "./components/Dashboard";
// import { Landing } from "./components/landing";


// function App() {

//   return (
//     <>  
//     <div>
//       <div>
//         <button onClick={()=>{
//           window.location.href='/'
//         }}>Landing page</button>

//         <button onClick={()=>{
//           window.location.href='/dashboard'
//         }}>Dashboard page</button>
//       </div>
//     </div>
//       <h3>hi this is top bar</h3>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/dashboard" element={<Dashboard/>}></Route>
//           <Route path="/" element={<Landing/>}></Route>
//         </Routes>  
//       </BrowserRouter>

//     </>
//   );
// }
// export default App;

// ! useNavigate hook

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Dashboard } from "./components/Dashboard";
// import { Landing } from "./components/landing";

// function App() {
//   return (
//     <>  
//       <div>
//         <h3>hi this is top bar</h3>
//         <BrowserRouter>
//           <Appbar />
//           <Routes>
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/" element={<Landing />} />
//           </Routes>  
//         </BrowserRouter>
//       </div>
//     </>
//   );
// }

// function Appbar() {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <div>
//         <button onClick={() => navigate('/')}>Landing page</button>
//         <button onClick={() => navigate('/dashboard')}>Dashboard page</button>
//       </div>
//       <h3>hi this is top bar</h3>
//     </div>
//   );
// }

// export default App;

// ! lazy loading => complete bundle of code come back when you enter the website.
// ! Sometime a person come only in landing page

// ! suspense API=>When using React.lazy,
// ! you must wrap the lazy-loaded components in a Suspense component to handle the loading state.

// import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
// import { lazy, Suspense } from "react";

// const Dashboard = lazy(() => import("./components/Dashboard")); // Ensure default export in Dashboard
// const Landing = lazy(() => import("./components/landing"));

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Appbar />
//         <div>
//           <h3>Hi, this is the top bar</h3>
//           <Suspense fallback={<div>Loading...</div>}>
//             <Routes>
//               <Route path="/dashboard" element={<Dashboard />} />
//               <Route path="/" element={<Landing />} />
//             </Routes>
//           </Suspense>
//         </div>
//       </BrowserRouter>
//     </>
//   );
// }

// function Appbar() {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <div>
//         <button onClick={() => navigate("/")}>Landing Page</button>
//         <button onClick={() => navigate("/dashboard")}>Dashboard Page</button>
//       </div>
//     </div>
//   );
// }

// export default App;


// ! prop drilling => props pass through the components tree, very hard to maintain and
// ! highly verbose make code highly unreadable

// import { useState } from "react";

// function App() {
//   const [count,setCount] = useState(0);
//   return (
//     <>  
//       <Count count={count} setCount={setCount}></Count>
//     </>
//   );
// }

// function Count({count ,setCount}) {
//  return <div>
//   {count}
//   <Button count={count} setCount={setCount}></Button>
//  </div>
// }

// function Button({count , setCount}) {

//   function increment(){
//     setCount(count+1);
//   }
//   function decrement(){
//     if(count>0) setCount(count-1);
//   }
//   return <div>
//     <button onClick={increment}>incr</button>
//     <button onClick={decrement}>dcr</button>
//   </div>
// }
// export default App;


// ! context API=> it lets you solve prop drilling
// ! teleport data form one node to another
// ! it lets you keep all state logic outside the core react component

// !wrap anyone that wants to use the teleported value inside a provider


// import React, { createContext, useContext, useState } from "react";

// // Create the context
// export const CountContext = createContext();

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>  
//       <CountContext.Provider value={count}>
//         <Count setCount={setCount} />
//       </CountContext.Provider>
//     </>
//   );
// }

// function Count({ setCount }) {
//   return (
//     <div>
//       <CountRender />
//       <Button setCount={setCount} />
//     </div>
//   );
// }

// function CountRender() {
//   const count = useContext(CountContext);
//   return <div>{count}</div>;
// }

// function Button({ setCount }) {
//   const count = useContext(CountContext);

//   function increment() {
//     setCount(count + 1);
//   }

//   function decrement() {
//     if (count > 0) setCount(count - 1);
//   }

//   return (
//     <div>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   );
// }

// export default App;

// ! problem with context-> doesn't fix re-rendering, only fixes prop drilling

// ! state management=>cleaner way to store the state of your app. its lets you teleport state.
// ! and better solution of unnecessary re-rendering


// ! Recoil: state management library for react.it has concept of atom to store the state.


// ! an atom can be defined outside the component and it can teleported to any component
// ! Atom: smallest unit of state.
// ! atom is similar to useState
// 1. RecoilRoot: rap inside it 
// 2. atom
// 3. useRecoilState : it gives the state and initial value
// 4. useSetRecoilValue: only value
// 5. useSetRecoilState: only state not value
// 6. selector: solve rerender

// ! npm i recoil

// import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
// import { countAtom } from "./store/count";



// function App() {

//   return (
//     <>  
//     <RecoilRoot>
//       <Count />
//     </RecoilRoot>
//     </>
//   );
// }

// function Count() {
//   return (
//     <div>
//       <CountRender />
//       <Button />
//     </div>
//   );
// }

// function CountRender() {
//   const count=useRecoilValue(countAtom);
//   return <div>{count}</div>;
// }

// function Button() {
   // ! button also re-render
// const [count,setCount]=useRecoilState(countAtom)
// console.log("re-render");
//   return (
//     <div>
//       <button onClick={()=>{
//         setCount(count+1)
//       }}>Increment</button>
//       <button onClick={()=>{
//         setCount(count-1)
//       }}>Decrement</button>
//     </div>
//   );
// }

// export default App;

// ! useSetRecoilState=>does not re-render more


// import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
// import { countAtom } from "./store/count";

// function App() {

//   return (
//     <>  
//     <RecoilRoot>
//       <Count />
//     </RecoilRoot>
//     </>
//   );
// }

// function Count() {
//   return (
//     <div>
//       <CountRender />
//       <Button />
//     </div>
//   );
// }

// function CountRender() {
//   const count=useRecoilValue(countAtom);
//   return <div>{count}</div>;
// }

// function Button() {
// const setCount=useSetRecoilState(countAtom)
//   return (
//     <div>
//       <button onClick={()=>{
//         setCount(count=>count+1)
//       }}>Increment</button>
//       <button onClick={()=>{
//         setCount(count=>count-1)
//       }}>Decrement</button>
//     </div>
//   );
// }

// export default App;

// ! check count is even

// import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
// import { countAtom } from "./store/count";

// function App() {

//   return (
//     <>  
//     <RecoilRoot>
//       <Count />
//     </RecoilRoot>
//     </>
//   );
// }

// function Count() {
//   return (
//     <div>
//       <CountRender />
//       <Button />
//     </div>
//   );
// }

// function CountRender() {
//   const count=useRecoilValue(countAtom);
//   return <div>{count}
//     <EvenVal></EvenVal>
//   </div>;
// }
// function EvenVal(){
//   const count=useRecoilValue(countAtom);
//   if(count%2==0)
//   return <div>it is even</div>
// }
// function Button() {
// const setCount=useSetRecoilState(countAtom)
//   return (
//     <div>
//       <button onClick={()=>{
//         setCount(count=>count+1)
//       }}>Increment</button>
//       <button onClick={()=>{
//         setCount(count=>count-1)
//       }}>Decrement</button>
      
//     </div>
//   );
// }

// export default App;

// ! Selector=>

//! A selector represents a piece of derived state.
//! You can think of derived state as the output of passing state to a pure function
//! that derives a new value from the said state.
//! Derived state is a powerful concept because it lets us build dynamic data that depends on other data.



// import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
// import { countAtom, evenSelector } from "./store/count";

// function App() {

//   return (
//     <>  
//     <RecoilRoot>
//       <Count />
//     </RecoilRoot>
//     </>
//   );
// }

// function Count() {
//   return (
//     <div>
//       <CountRender />
//       <Button />
//     </div>
//   );
// }

// function CountRender() {
//   const count=useRecoilValue(countAtom);
//   return <div>{count}
//     <EvenVal></EvenVal>
//   </div>;
// }
// function EvenVal(){
//   const isEven=useRecoilValue(evenSelector);
//   return <div>
//     {isEven ? "it is even" : null}
//   </div>
// }
// function Button() {
// const setCount=useSetRecoilState(countAtom)
//   return (
//     <div>
//       <button onClick={()=>{
//         setCount(count=>count+1)
//       }}>Increment</button>
//       <button onClick={()=>{
//         setCount(count=>count-1)
//       }}>Decrement</button>
      
//     </div>
//   );
// }

// export default App;

// ! Recoil Deep dive

// ! LinkedIn App bar(hardcode values)

// import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
// import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalMessCount } from "./atoms";
// import { useMemo } from "react";

// function App() {
//  return <RecoilRoot>
//   <MainApp></MainApp>
//  </RecoilRoot>
// }

// function MainApp(){
//   const networkCount= useRecoilValue(networkAtom);
//   const jobsCount = useRecoilValue(jobsAtom);
//   const messageCount = useRecoilValue(messagingAtom);
//   const [notificationCount,setNotificationCount] = useRecoilState(notificationAtom);

//   //  const totalCount = networkCount+jobsCount+messageCount+notificationCount;
 
//   // ! useMemo

//   // const totalCount = useMemo(()=>{
//   //   return networkCount + jobsCount + messageCount + notificationCount;
//   // },[networkCount, jobsCount, messageCount, notificationCount])

//   // ! selector
  
//   const totalCount = useRecoilValue(totalMessCount);

//   return (
//     <>  
//           <button>Home</button>

//           <button>My Network {networkCount >= 100 ? "99+" : networkCount }</button>
//           <button>Jobs {jobsCount}</button>
//           <button>Messaging {messageCount}</button>
//           <button>Notification {notificationCount}</button>

//           <button onClick={()=>{
//             setNotificationCount(notificationCount+1)
//           }}>Me {totalCount}</button>
//     </>
//   );
// }


// export default App;

// ! Asynchronous data queries

// import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
// import { notifications, totalMessCount } from "./atoms";

// function App() {
//  return <RecoilRoot>
//   <MainApp></MainApp>
//  </RecoilRoot>
// }

// function MainApp(){
//   const networkCount = useRecoilValue(notifications);
//   const totalCount=useRecoilState(totalMessCount)

//   return (
//     <>  
//           <button>Home</button>

//           <button>My Network {networkCount >= 100 ? "99+" : networkCount.network }</button>
//           <button>Jobs {networkCount.jobs}</button>
//           <button>Messaging {networkCount.message}</button>
//           <button>Notification {networkCount.notifications}</button>

//           <button onClick={()=>{
//             setNotificationCount(networkCount.notifications+1)
//           }}>Me {totalCount}</button>
//     </>
//   );
// }


// export default App;


// ! atomFamily => sometimes you need more than one atom for your use case



// import { RecoilRoot, useRecoilValue } from "recoil";
// import { todosAtomFamily } from "./atomss";



// function App() {
//  return <RecoilRoot>
//     <Todo id={1}></Todo>
//     <Todo id={2}></Todo>
//     <Todo id={1}></Todo>
//     <Todo id={2}></Todo>

//   </RecoilRoot>
// }

// function Todo({ id }) {
//   const todo = useRecoilValue(todosAtomFamily(id));
  
//   if (!todo) {
//       return <div>Todo not found!</div>;
//   }

//   return (
//       <div>
//           <h3>{todo.title}</h3>
//           <p>{todo.description}</p>
//       </div>
//   );
// }

// export default App;


// ! selectorFamily


// import { RecoilRoot, useRecoilValue } from "recoil";
// import { todosAtomFamily } from "./atomss";



// function App() {
//  return <RecoilRoot>
//     <Todo id={1}></Todo>
//     <Todo id={2}></Todo>
//     <Todo id={1}></Todo>
//     <Todo id={2}></Todo>

//   </RecoilRoot>
// }

// function Todo({ id }) {
//   const todo = useRecoilValue(todosAtomFamily(id));
  
//   if (!todo) {
//       return <div>Todo not found!</div>;
//   }

//   return (
//       <div>
//           <h3>{todo.title}</h3>
//           <p>{todo.description}</p>
//       </div>
//   );
// }

// export default App;


// ! useRecoilStateLoadable, useRecoilValueLoadable => what happens when the values aren't loaded immediately
// ! how can we show loader on screen when that happens rather than an empty state


import { RecoilRoot, useRecoilStateLoadable, useRecoilValue } from "recoil";

function App() {
 return <RecoilRoot>
    <Todo id={1}></Todo>
    <Todo id={2}></Todo>
    <Todo id={1}></Todo>
    <Todo id={2}></Todo>

  </RecoilRoot>
}

function Todo({ id }) {
  const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));
  
  if (!todo) {
      return <div>Todo not found!</div>;
  }

  return (
      <div>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
      </div>
  );
}

export default App;

