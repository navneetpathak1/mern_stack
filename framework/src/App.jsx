// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';
// import { json } from 'body-parser';
// !    https://sum-server.100xdevs.com/todos?id=1
// !    https://sum-server.100xdevs.com/todos
// !    https://sum-server.100xdevs.com/notification

// const { useEffect } = require("react");



// const { useMemo } = require("react");

// JSX
// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <CustomButton count={count} setCount={setCount} />
//       {/* <CustomButton count={count+1} setCount={setCount} />
//       <CustomButton count={count-1} setCount={setCount} />
//       <CustomButton count={count*1000} setCount={setCount} /> */}
//     </div>
//   );
// }

// // Components
// function CustomButton({ count, setCount }) {
//   function onClickHandler() {
//     setCount(count + 1);
//   }

//   return (
//     <button onClick={onClickHandler}>
//       counter {count}
//     </button>
//   );
// }
// import { useState } from 'react';

// function App() {
//   const [todos, setTodos] = useState([
//     {
//       title: "go to gym",
//       description: "go to gym from 8-9",
//       complete: false
//     },
//     {
//       title: "study dsa",
//       description: "study dsa from 4-5",
//       complete: true
//     }
//   ]);

//   return (
//     <div>
//       {todos.map((todo, index) => (
//          <Todo key={index} title={todo.title} description={todo.description} />
//         // <Todo title={todos[0].title} description={description} />
//       ))}
//     </div>
//   );
// }

// // Components
// function Todo({ title, description }) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <h2>{description}</h2>
//     </div>
//   );
// }

// export default App;


// ! create a header component that takes props as components and renders it inside a div
// ! the top level app should render two header  

// import { useState } from 'react';

// function App(){
//   return (
//     <div>
//       <Header title="navneet1"></Header>
//       <Header title="navneet2"></Header>
//     </div>
//   );
// }
// // ! object destructuring
// function Header({title}){ 
//   return <div>
//   {title}
//   </div>
// }

// export default App;


// ! update the last app to allow user to update the title of the first header with a new title 

// import { useState } from 'react';

// function App(){

//   const [title, setTitle]= useState("my name is navneet");

//   function updateChanges(){
//     setTitle("my name is "+ Math.random());
//   }
//   return (
//     <div>
//       <button onClick={updateChanges}>update the title</button>
//       <Header title={title}></Header>
//       <Header title="navneet2"></Header>
      
//     </div>
//   );
// }


// // ! object destructuring
// function Header({title}){ 
//   return <div>
//   {title}
//   </div>
// }

// export default App;



// ! to make website more optimal / less re-rendering

// import React, {Fragment} from 'react'
// import { useState } from 'react';

// function App(){

 
//   return (
//     <div>
//     <HeaderWithButton/>
//       <Header title="navneet2"></Header>
//       <Header title="navneet3"></Header>
//       <Header title="navneet4"></Header>
      
//     </div>
//   );
// }
// function HeaderWithButton(){


//   const [title, setTitle]= useState("my name is navneet");

//   function updateChanges(){
//     setTitle("my name is "+ Math.random());

//   }
//   return (
//     <div>
//       <button onClick={updateChanges}>update the title</button>
//       <Header title={title}></Header>
//       </div>
//   )
// }

// // ! object destructuring
// function Header({title}){ 
//   return <div>
//   {title}
//   </div>
// }

// export default App;


//!React.memo=>skip re-rendering or (if parent re-renders then child is renders unless u wrap child into memo)

// import React, {Fragment} from 'react'
// import { useState } from 'react';

// function App(){

//   const [title, setTitle]= useState("my name is navneet");

//   function updateChanges(){
//     setTitle("my name is "+ Math.random());
//   }
//   return (
//     <div>
//       <button onClick={updateChanges}>update the title</button>
//       <Header title={title}></Header>
//       <Header title="navneet2"></Header>
//       <Header title="navneet2"></Header>
      
//     </div>
//   );
// }


// const Header=React.memo(function Header({title}){
//   return <div>
//   {title}
//   </div>
// })

// export default App;

// ! keys in react


// import React, { useState, Fragment } from 'react';

// function App() {
//   const [todos, setTodos] = useState([
//     {
//       id: 1,
//       title: "go to gym",
//       description: "go to gym 5-9"
//     },
//     {
//       id: 2,
//       title: "go to gym",
//       description: "go to gym 5-9"
//     },
//     {
//       id: 3,
//       title: "go to gym",
//       description: "go to gym 5-9"
//     }
//   ]);

//   function AddTodo() {
//     setTodos([
//       ...todos,
//       {
//         id: todos.length + 1,
//         title: `New todo ${Math.random()}`,
//         description: `Description ${Math.random()}`,
//       }
//     ]);
//   }

//   return (
//     <Fragment>
//       <button onClick={AddTodo}>Add a todo</button>
      // {todos.map(todo => (
//<Todo key={todo.id} title={todo.title} description={todo.description} />
 //! you need a key  unique identifier 
//       ))}
//     </Fragment>
//   );
// }

// function Todo({ title, description }) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <h2>{description}</h2>
//     </div>
//   );
// }

// export default App;


// ! wrapper components

// import React, { useState, Fragment } from 'react';

// function App() {
 
//   return (
//     <div>
//      < CardWrapper innerComponent={<TextComponents/>} />
//      < CardWrapper innerComponent={<TextComponents2/>} />
//     </div>
//   );
// }
// function TextComponents(){
//   return <div>
//     hi there
//   </div>
// }
// function TextComponents2(){
//   return <div>
//     hi there
//   </div>
// }
// function CardWrapper({innerComponent}) {
//   return <div style={{border: "2px solid black"}}>
//     {innerComponent}
//   </div>
// }

// export default App;

// ! another way

// import React, { useState, Fragment } from 'react';

// function App() {
 
//   return (
//     <div>
//      < CardWrapper>
//      hi there
//      </ CardWrapper >
//     </div>
//   );
// }

// function CardWrapper({children}) {
//   return <div style={{border: "2px solid black"}}>
//     {children}
//   </div>
// }

// export default App;


// ! HOOKS


// ! useEffect

// import React, { useEffect } from 'react';

// function App() {
//   useEffect(() => {
//     alert("hi");
//   }, []);
// ! in  dependency array [] you define when should the callback fn run
//   return (
//     <div>
//       hi there
//     </div>
//   );
// }

// export default App;

// ! 


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     axios.get("https://sum-server.100xdevs.com/todos")
//       .then(function (response) {
//         setTodos(response.data.todos);
//       })
//       .catch(function (error) {
//         console.error("There was an error fetching the todos!", error);
//       });
//   }, []);

//   return (
//     <div>
//       {todos.map(todo => (
//         <Todo key={todo.id} title={todo.title} description={todo.description} />
//       ))}
//     </div>
//   );
// }

// function Todo({ title, description }) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       {description}
//     </div>
//   );
// }

// export default App;



// ! useMemo

// ! create an app that does two things: incr counter by 1 and user put i/p in an i/p box show sum from  1-n

// const { useMemo } = require("react");

// import { useState } from 'react';

// function App(){
//   const [counter,setCount]=useState(0);
//   const [inputValue, setInputValue]=useState(1);

//   let count=0;
//   for(let i=0;i<=inputValue;i++){
//     count=count+i;
//   }
//   return (
//     <div>
//       <input onClick={function(e){
//         setInputValue(e.target.value);
//       }} placeholder='find sum from 1 to n' />
//       <br />

//       sum from 1 to {inputValue} is {count}

//       <br />
//       <br />

//       <button onClick={()=>{
//         setCount(counter+1)}
//         }>counter is ({counter})</button>
//     </div>
//   );
// }


// export default App;

// ! using useEffect

// import React, { useEffect, useState } from 'react';

// function App(){
//   const [counter,setCount]=useState(0);
//   const [inputValue, setInputValue]=useState(1);
//   const [finalValue,setFinalValue]=useState(0);
//   useEffect(()=>{
//     let count=0;
//   for(let i=0;i<=inputValue;i++){
//     count=count+i;
//   }
//   setFinalValue(count)
// } , [inputValue])
  
//   return (
//     <div>
//       <input onClick={function(e){
//         setInputValue(e.target.value);
//       }} placeholder='find sum from 1 to n' />
//       <br />

//       sum from 1 to {inputValue} is {finalValue}

//       <br />
//       <br />

//       <button onClick={()=>{
//         setCount(counter+1)}
//         }>counter is ({counter})</button>
//     </div>
//   );
// }


// export default App;

// ! using  useMemo


// import React, { useMemo, useState } from 'react';

// function App(){
//   const [counter,setCount]=useState(0);
//   const [inputValue, setInputValue]=useState(1);
  
//    let count=useMemo(()=>{
//     let count=0;
//   for(let i=0;i<=inputValue;i++){
//     count=count+i;
//   }
//   return count
// } , [inputValue])
  
//   return (
//     <div>
//       <input onClick={function(e){
//         setInputValue(e.target.value);
//       }} placeholder='find sum from 1 to n' />
//       <br />

//       sum from 1 to {inputValue} is {count}

//       <br />
//       <br />

//       <button onClick={()=>{
//         setCount(counter+1)}
//         }>counter is ({counter})</button>
//     </div>
//   );
// }


// export default App;

//! useCallback

// import React, { memo, useState } from 'react';

// function App(){

//   const [counter,setCount]=useState(0);
  
  
//   function logSomething(){
//     console.log("child is created");
  
//   }
  
//   return (
//     <div>
//       <Child inputFun={logSomething} />
//       <button onClick={()=>{
//         setCount(counter+1)}
//         }>counter is ({counter})</button>
//     </div>
//   );
// }
//   const Child=memo(({inputFun})=>{
//     console.log("child  render");

//     return <div> 
//       <button onClick={inputFun}>button is clicked</button>
//     </div>
//   })




// export default App;

// !
// import React, { memo, useCallback, useState } from 'react';

// function App(){

//   const [counter,setCount]=useState(0);

  
//   const logSomething=useCallback(()=>{
//     console.log("child is created");
  
//   },[])
  
//   return (
//     <div>
//       <Child inputFun={logSomething} />
//       <button onClick={()=>{
//         setCount(counter+1)}
//         }>counter is ({counter})</button>
//     </div>
//   );
// }
//   const Child=memo(({inputFun})=>{
//     console.log("child  render");

//     return <div> 
//       <button onClick={inputFun}>button is clicked</button>
//     </div>
//   })
// export default App;

//! custom hooks=> custom your own hooks, it should start with use

// import { useState } from "react"
// function useTodo(){
//   const [todo,setTodo]=useState();
//   // some logic

//   return todo
// }
// function App(){
//   const todo=useTodo();
//   return <div>
//     {todo}
//   </div>
// }
// export default App;

//! useRef

// import { useEffect, useState, useRef } from "react";

// function App() {
//   const [incomeTax, setIncomeTax] = useState(2000);
//   const divRef = useRef();

//   useEffect(() => {
//     setTimeout(() => {
//       console.log(divRef.current);
//       divRef.current.innerHTML = "10";
//     }, 5000);
//   }, []);

//   return (
//     <div>
//       Hi there, your income tax returns are <div ref={divRef}>{incomeTax}</div>
//     </div>
//   );
// }

// export default App;

// ! routing, prop drilling, context API
// ! routing
// ! npm install react-router-dom


// import {BrowserRouter , Routes, Route} from 'react-router-dom'
// import { DashBoard } from "./components/Dashboard";
// import { Landing } from "./components/Landing";
// function App() {

//   return (
//     <div>

//       <div >
//         <button onClick={()=>{
//           window.location.href="/"
//         }}> Landing page</button>

//         <button onClick={()=>{
//           window.location.href="/dashboard"
//         }}> dashboard page</button>

//       </div>
//         <BrowserRouter>
//           <Routes>
//             <Route path="/dashboard" element={<DashBoard />}></Route>
//             <Route path="/" element={<Landing />}></Route>
//           </Routes>
//         </BrowserRouter>
//     </div>
//   );
// }


// export default App;

//! write way of doing it
// import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
// import { DashBoard } from './components/Dashboard';
// import { Landing } from './components/Landing';

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <AppBar />
//         <Routes>
//           <Route path="/dashboard" element={<DashBoard />} />
//           <Route path="/" element={<Landing />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// function AppBar() {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <button onClick={() => navigate('/')}>Landing page</button>
//       <button onClick={() => navigate('/dashboard')}>Dashboard page</button>
//     </div>
//   );
// }

// export default App;

//! Lazy routing


// import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
// import React, { Suspense, lazy } from 'react';

// const DashBoard = lazy(() => import('./components/Dashboard'));
// const Landing = lazy(() => import('./components/Landing'));

// ! suspense api
// function App() {

//   return (
//     <div>
//       <BrowserRouter>
//         <AppBar />
//         <Suspense fallback={<div>Loading...</div>}>
//           <Routes>
//             <Route path="/dashboard" element={<DashBoard />} />
//             <Route path="/" element={<Landing />} />
//           </Routes>
//         </Suspense>
//       </BrowserRouter>
//     </div>
//   );
// }

// function AppBar() {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <button onClick={() => navigate('/')}>Landing page</button>
//       <button onClick={() => navigate('/dashboard')}>Dashboard page</button>
//     </div>
//   );
// }

// export default App;

// ! prop drilling
// ! count increase and decrease
// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <Count count={count} />
//       <Button count={count} setCount={setCount}></Button>
//     </div>
//   );
// }

// function Count({ count }) {
//   return (
//     <div>
//       {count}
//     </div>
//   );
// }

// function Button({ count, setCount }) {
//   return (
//     <div>
//       <button onClick={() => {
//         setCount(count + 1);
//       }}>Increase</button>
//       <button onClick={() => {
//         setCount(count - 1);
//       }}>Decrease</button>
//     </div>
//   );
// }

// export default App;


//! context api
// help to solve prop drilling
// ! without api
// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <Count count={count} setCount={setCount} />
      
//     </div>
//   );
// }
// function Count({ count , setCount}) {
//   return (
//     <div>
//       <CounterRendering count={count} />
//       <Button count={count} setCount={setCount}></Button>
//     </div>
//   );
// }
// function CounterRendering({ count }) {
//   return (
//     <div>
//       {count}
//     </div>
//   );
// }

// function Button({ count, setCount }) {
//   return (
//     <div>
//       <button onClick={() => {
//         setCount(count + 1);
//       }}>Increase</button>
//       <button onClick={() => {
//         setCount(count - 1);
//       }}>Decrease</button>
//     </div>
//   );
// }

// export default App;


// ! with api

// ! wrap anyone who wants to use the teleported value inside a provider

// import { useContext, useState } from "react";
// import { CountContext } from "./context";

// function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <CountContext.Provider value={{ count, setCount }}>
//         <Count />
//       </CountContext.Provider>
//     </div>
//   );
// }

// function Count() {
//   return (
//     <div>
//       <CounterRendering />
//       <Button />
//     </div>
//   );
// }

// function CounterRendering() {
//   const { count } = useContext(CountContext);
//   return (
//     <div>
//       {count}
//     </div>
//   );
// }

// function Button() {
//   const { count, setCount } = useContext(CountContext);
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <button onClick={() => setCount(count - 1)}>Decrease</button>
//     </div>
//   );
// }

// export default App;


// import { useContext, useState } from "react";
// import { CountContext } from "./context";

// function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <CountContext.Provider value={ count }>
//         <Count setCount={setCount} />
//       </CountContext.Provider>
//     </div>
//   );
// }

// function Count({setCount}) {
//   return (
//     <div>
//       <CounterRendering />
//       <Button setCount={setCount}/>
//     </div>
//   );
// }

// function CounterRendering() {
//   const count = useContext(CountContext);
//   return (
//     <div>
//       {count}
//     </div>
//   );
// }

// function Button({setCount}) {
//       const count = useContext(CountContext);
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <button onClick={() => setCount(count - 1)}>Decrease</button>
//     </div>
//   );
// }

// export default App;



// ! state managements
// lets you rid prop drilling and re-rendering more preforming

//! state management using recoil
// npm install recoil

// import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
// import { countAtom } from "./store/atoms/count";

// function App() {
 
//   return (
//     <div>
//      <RecoilRoot>
//       <Count  />
//      </RecoilRoot>
//     </div>
//   );
// }

// function Count() {
//   return (
//     <div>
//       <CounterRendering />
//       <Button />
//     </div>
//   );
// }

// function CounterRendering() {
//   const count = useRecoilValue(countAtom);
//   return (
//     <div>
//       {count}
      
//     </div>
//   );
// }
// function EvenCountRenderer(){
//       const count=useRecoilValue(countAtom)
//       return <div>
//             {(count%2==0)? "it is even": null}
//       </div>
// }
// function Button() {
//       const setCount =useSetRecoilState(countAtom);
//       console.log("button re-rendering")
//   return (
//       <div>
//       <button onClick={() => setCount( count=>count + 1)}>Increase</button>
//       <button onClick={() => setCount(count=>count - 1)}>Decrease</button>
//       <EvenCountRenderer></EvenCountRenderer>
//     </div>
//   );
// }

// export default App;

// ! Selectors

// import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
// import { countAtom, evenSelector } from "./store/atoms/count";

// function App() {
 
//   return (
//     <div>
//      <RecoilRoot>
//       <Count  />
//      </RecoilRoot>
//     </div>
//   );
// }

// function Count() {
//   return (
//     <div>
//       <CounterRendering />
//       <Button />
//     </div>
//   );
// }

// function CounterRendering() {
//   const count = useRecoilValue(countAtom);
//   return (
//     <div>
//       {count}
      
//     </div>
//   );
// }
// function EvenCountRenderer(){
//       const isEven=useRecoilValue(evenSelector)
//       return <div>
//             {(isEven%2==0)? "it is even": "it is odd"}
//       </div>
// }
// function Button() {
//       const setCount =useSetRecoilState(countAtom);
//       console.log("button re-rendering")
//   return (
//       <div>
//       <button onClick={() => setCount( count=>count + 1)}>Increase</button>
//       <button onClick={() => setCount(count=>count - 1)}>Decrease</button>
//       <EvenCountRenderer></EvenCountRenderer>
//     </div>
//   );
// }

// export default App;

//! using recoil in deeper

// import React, { useMemo } from 'react';
// import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
// import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from '../atoms';

// function App() {
//   return (
//     <RecoilRoot>
//       <MainMap />
//     </RecoilRoot>
//   );
// }

// function MainMap() {
//   const networkNotificationCount = useRecoilValue(networkAtom);
//   const jobsAtomCount = useRecoilValue(jobsAtom);
//   const notificationAtomCount = useRecoilValue(notificationAtom);
//   const [messagingAtomCount, setMessagingCount] = useRecoilState(messagingAtom);

//   const totalNotification= useRecoilValue(totalNotificationSelector)

  
//    return (
//     <div>
//       <button>Home page</button>
//       <button>Network page {(networkNotificationCount >= 99) ? "99+" : networkNotificationCount}</button>
//       <button>Jobs {jobsAtomCount}</button>
//       <button>Messaging {messagingAtomCount}</button>
//       <button>Notification {notificationAtomCount}</button>
//       <button onClick={()=>{
//             setMessagingCount(c=>c+1);
//       }}>Me {totalNotification}</button>
//     </div>
//   );
// }

// export default App;


//! Asynchronous data queries


// import React, { useMemo } from 'react';
// import { atomFamily, RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
// import { notificationAtom, totalNotificationSelector } from '../atoms'; // Adjust this import as per your actual path
// import { useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   return (
//     <RecoilRoot>
//       <MainMap />
//     </RecoilRoot>
//   );
// }

// function MainMap() {
//   const [networkCount, setNetworkCount] = useRecoilState(notificationAtom);
//   const totalNotification = useRecoilValue(totalNotificationSelector);

//   useEffect(() => {
//     axios.get("https://sum-server.100xdevs.com/notification")
//       .then(res => {
//         setNetworkCount(res.data);
//       })
//       .catch(err => {
//         console.error("Error fetching notifications:", err);
//       });
//   }, [setNetworkCount]);

//   return (
//     <div>
//       <button>Home page</button>
//       <button>Network page {(networkCount.networkAtom >= 99) ? "99+" : networkCount.networkAtom}</button>
//       <button>Jobs {networkCount.jobAtom}</button>
//       <button>Messaging {networkCount.messageAtom}</button>
//       <button>Notification {networkCount.notificationAtom}</button>
//       <button>Me {totalNotification}</button>
//     </div>
//   );
// }

// export default App;

//!  Atom family


// import { useRecoilValue } from 'recoil';
// import { todoAtomFamily } from '../atoms';
// import { RecoilRoot } from 'recoil';

// function App() {
//       return (
//         <RecoilRoot>
//           <Todo id={1} />
//           <Todo id={2} />
//         </RecoilRoot>
//       );
//     }
// function Todo ({ id }) {
//       const todo = useRecoilValue(todoAtomFamily(id));
    
//       return (
//         <div>
//           <b>
//             {todo.title} <br />
//             {todo.description}
//           </b>
//         </div>
//       );
//     }
// export default App;

//! selectorFamily


// import { useRecoilState } from 'recoil';
// import { todoAtomFamily } from '../atoms';
// import { RecoilRoot } from 'recoil';

// function App() {
//       return (
//         <RecoilRoot>
//           <Todo id={1} />
//           <Todo id={2} />
//         </RecoilRoot>
//       );
//     }
// function Todo ({ id }) {
//       const todo = useRecoilState(todoAtomFamily(id));
    
//       return (
//         <div>
//           <b>
//             {todo.title} <br />
//             {todo.description}
//           </b>
//         </div>
//       );
//     }
// export default App;
