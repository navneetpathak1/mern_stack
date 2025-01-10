// function findSum(a,b)
// {
//     return a+b;
// }
// let value=findSum(1,2)
// console.log("value is "+value);
// function findLine(){
//     console.log("i can");
// }
// for(let i=0;i<2;i++)
// {
// setInterval(findLine,i*1000);
// setTimeout(findLine,i*1000);
// i++;
// }
// function findSumo(n){
//     let ans=0;
//     for(let i=0;i<n;i++)
//     {
//         ans +=i;
//     }
//     return ans;
// }
// function findSumoTill100(){
//     console.log(findSumo(100));
// }
// console.log("hello world");
// function  sqr(a)
// {
//     return a*a;
// }
// function  cub(a)
// {
//     return a*a*a;
// }
// function sumOfSqr(a,b,fn)
// {
//     return fn(a) + fn(b);
// }
// let sum=1;
// console.log("the sqr is  "+sumOfSqr(1,2,cub));
// function additionOfTwo(n)
// {
//     return n+n;
// }
// function additionOfTwo(n)
// {
//     return n+n+n;
// }
// function sumOfSomething(n,fn)
// {
//   return fn(n); 
// }
// sum= sumOfSomething(5,additionOfTwo);
// console.log("sum is : "+sum);
// const fs = Require("fs");
// const data="hello node.js";

const { response } = require("express")


//!-----> call back function  


// function mySettimeOut(fn,duration)
// {
//     setTimeout(fn, duration);
// }
// mySettimeOut(function(){
//     console.log("log the first things");
//     mySettimeOut(function(){
//         console.log("log the second things");

//     },1000)
// },2000)

//! ----> using promises

// const d = new Date();
// const a=d.getMonth();
// const b=d.getTime();
// console.log("current month is "+ a);
// console.log("current time is "+b );


// function mySettimeOut(duration){
//     const p=new Promise(function (resolve){

//         setTimeout(function(){
//             resolve();
//         }, duration();
//         } );
//     return p;
// }

// //call
// const ans=mySettimeOut(1000);
// ans.then(function(){
//     console.log("timeout is done");
// });
// const express= require("express");

// const app = express()
// const port = 3000

// app.get('/', function (req, res) {
//   let a=0;
//   console.log("request has been reached ");
//   for(let i=0; i<100;i++){
//     a=a+1;
//   }
//   res.send('Hello World!')
// })

// app.listen(port)

// const express = require('express')
// const app = express()
// const port = 3000
// // app.get('/',function(req,res){
// //     res.send("hello world");
// //     res.json({name:"John Doe",age:25});
// // })

// app.get('/', (req, res) => {
//   res.send('<b> Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
// const express = require('express')
// const app = express()
// const port = 3088

// app.get('/', (req, res) => {
//   res.send('<b> <ok fine <b>')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
// const express = require('express')
// const app = express()
// const port = 3088

// app.get('/conversations', (req, res) => {
   
//     res.send("ok fine");
//     // res.send({
//     //     mag:"2+2=4"
//     // })
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
// const express = require('express')
// 
// const app = express()
// const bodyParser = require( 'body-parser' )
// c

// app.get('/', (req, res) => {
//   res.json({ message: "Hello world!"})
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
// const express = require('express')
// const app = express()

// const port = 5001

// app.set("view engin","ejs")

// //to use file
// const useRouter = require('./router/users');

// // app.get("/user", (,res)=>
// // {
// //     // res.send("hello");
// //     // res.render("index",{"name":"John Doe"});
// // })
// //app.listen(5001);

// app.get('/users', useRouter);

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
// module.exports=router;
// const ans=(a,b)=>{
//     return a+b;
// }
// const sum=ans(1,2);
// console.log(ans);


//!  ====> map

// const input = [1,2,3,4];
// const newArray=[];
// for(let i=0;i<input.length;i++)
// {
//  newArray.push(input[i]*2);
// }
// console.log(newArray);
// other solution
// function transform(i){
//   return i*2/3;
// }
// const ans=input.map(transform)
// console.log(ans);

// =====> filtering
//find even number

// const input = [1,2,3,4];
// const neva =[];
// for(let i=0;i<input.length;i++)
// {
//   if(input[i] %2==0)
//   {
//     neva.push(input[i]);
//   }
// }
// console.log(neva);

// now from filter
// const input = [1,2,3,4,5,6];
// const ans = input.filter( (n)=>{
//   if(n%2==0){
//     return true;
//   }
//   else 
//   {
//     return false;
//   }
// });
// console.log(ans);



//! creating http server


// const express = require('express');
// const app = express();
// function cal(n)
// {
//     let  sum=0;
//     for(let i=0;i<n;i++)
//     {
//         ans=ans+i;
//     }
//     return ans;
// }
// app.get( '/', (req, res) =>{
//     const n=req.query.n;
//     const ans=cal(n);
//     res.send(ans);
// });
// app.listen(8080);

//  ====> middlewares

// const express = require('express');
// const app =express();

// app.get('/health',function(req,res){
//     const kidneyIdm = req.query.kidneyIdm;
//     const username = req.headers.username;
//     const pass= req.headers.pass;
//     if(username!="admin" && pass !="admin"){
//        if(kidneyIdm ==1 || kidneyIdm ==2){
//         res.json({
//             meg : "your kidney id fine0"
//         });
//        }
//     
//     res.status(400).json({
//         meg: "something up with your input"

//     })
// });
// app.listen(3000); 

//! =======>real middlewares

// const express = require("express");
// const app= express();

// function checkKidney(req,res,next){
//     if(){
//         res.status(408).json({
//             meg: "your kidney is fine";
//         })
//     }
//     else{
//         next();
//     }
// }


// next is very important

// app.get('/health', checkHeart, function(req,res){
//     res.send("your hearth is fine");
// })
// app.get('/kidney',checkKidney,function(req,res){
//     res.send("fine");
// })
// app.get('/checkHealth',checkHeart,checkKidney,function(req,res){
//     res.send("your pro in health");
// })


//! zod Schema validation

// const express=require(express);
// const zod=require('zod');
// const app= express();

// const schema=  zod.array(zod.number());


//! ======> authentication


// const express =require("express");
// const app=express();
// const jvt=require("jsonwebtoken");
// const  jwtPass="123456";
// //  jwt require a password usually this is a secrete
// const All_User=[
//     {
//         username:"navneet@gmail.com",
//         password:"123",
//         name: "avnet pata",
//     },
//     {
//         username:"ankit@gmail.com",
//         password:"123321",
//         name: "knit pata", 
//     },
//     {
//         username:"neha@gmail.com",
//         password:"123456",
//         name: "neva pata",
//     },
// ];
// function userExist(username,password){
// // find the user is exist or not
//     const userExists=false;
//     for(let i=0;i<All_User.length;i++){
//         if(All_User[i].username==username && All_User[i].password==password){
//             userExists=true;
//         }
//     }
//     return  userExists;
// }
// app.post("/signIn",function(req,res){
//     const username=req.body.username;
//     const password=req.body.password;
//     if(!userExist(username,password)){
//         return res.status(403).json({
//             msg:"user does not exist",
//         });
//     }
//     var token=jwt.sign({username: username}, jwtPass );
//     return res.json({
//         token,
//     });
// });
// app.get("/user",function(req,res){
//     const token=req.body.authorization;
//    try{
//     const decoded =jwt.verify(token,jwtPass);
//     const username=decoded.username;
//    }
//    catch(err){
//     return res.status(403).json({
//         msg: "invalid token",
//     });

//    }
// });


// ======> start  react

// const UserSchema= new mongoose.Schema({
//     email: String,
//     password: String,
//     purchasedCourses: {
//         type: mongoose.Schema.type.Object,
//         ref: "course"
//     }
// });
// const CourseSchema=new mongoose.Schema({
//     title: String,
//     price: 5999 
// })

// const user=mongoose.node('user',UserSchema);
// const course= mongoose.node('course',CourseSchema);
// user.create({
//     username: req.body.username,
//     password: req.body.password
// });



// 


// function cal(n){
//     let ans=0;
//     for(let i=0;i<n;i++){
//         ans=ans+i;
//     }
//     return ans;
// }
// console.log(cal(10));


//! complete express =====>

    // req =request
    // res =response


// const express = require('express');
// const app = express();

// function cal(n) {
//     let ans = 0;
//     for (let i = 0; i < n; i++) {
//         ans = ans + i;
//     }
//     return ans;
// }

// app.get('/', function(req, res) {
//     const n = Number(req.query.n);
//     if (isNaN(n)) {
//         res.status(400).send('Invalid number');
//     } else {
//         const ans = cal(n);
//         res.send(ans.toString());  // Convert the result to a string
//     }
// });

// app.listen(3000, function() {
//     console.log('The port is running on 3000');
// });

// const { name } = require("ejs");
// const express=require("express");
// const app=express();


// 


// app.use(express.json());



// 


// var users =[{
//     name:"Avnet",
//     kidneys: [{
//         healthy:true
//     },{
//         healthy:false
//     }]
// }]

// app.get('/',function(req,res){
//     const userKidney=users[0].kidneys;
//     console.log(userKidney);
//     const kidneyLength=userKidney.length;
//     const numberOfHealthy=0;
//     for(let i=0;i<userKidney;i++){
//         if(userKidney[i]==true){
//             numberOfHealthy=numberOfHealthy+1;
//         }
//     }
//     const numberOfUnhealthy=kidneyLength-numberOfHealthy;
//     res.json({
//         kidneyLength,
//         numberOfHealthy,
//         numberOfUnhealthy
//     })
// })



// app.post('/',function(req,res){

//     const isHealthy=req.body.isHealthy;
//     users[0].kidneys.push[{
//         healthy:isHealthy
//     }]
//     res.json({
//         meg:"done"
//     })
// })
//  app.put('/',function(req,res){
//     for(let i=0;i<users[0].kidneys.length;i++){
//         users[0].kidneys[i].healthy=true;
//     }
//     res.json({})
//  })



//  app.delete('/',function(req,res){

// // if no kidney 404
//     const unHealthy=false;

//     for(let i=0;i<users[0].kidneys.length;i++)
//         {
//             if(!users[0].kidneys[i].healthy){
//                 unHealthy=true
//             }
//         }
//         if(unHealthy){
//     const newKidneys=[];
//     for(let i=0;i<users[0].kidneys.length;i++)
//         {
//             if(users[0].kidneys[i].healthy){
//                 newKidneys.push({
//                     healthy: true
//                 })
//             }
//         }
//     users[0].kidneys=newKidneys ;
//     res.json({
//         meg:"done"
//     })
// }
//     else{
//         res.status(411).json({
//             meg: "you have no bad kidney"
//         })
//     }
// })


// app.listen(3000,function(){
//     console.log("the port is running on 3000");
// });


//! ====> middleware


// const express =require("express");
// const app = express();

// app.get('/health-checkup',function(req,res){
    
//     const userName=req.query.userName;
//     const password=req.query.password;
//     const kidneyId=req.query.kidneyId;


//     if(userName!="Avnet" || password !="pass"){
//         res.status(404).json({
//             meg: "user doesn't exist"
//         })
//         return;
//         // this return is called early returning
//     }
//     if(kidneyId!=1 || kidneyId !=2){
//         res.status(411).json({
//             meg: "wrong input"
//         })
//         return;
//         // this return is called early returning
    //    this return don't sent control to next operation just return 
//     }
//     res.json({
//         meg: "fine"
//     })
// })
// // const PORT=3001;
// app.listen(3001,function(){
//     console.log("RUNNING");
// })


// what if we have multiple users then we have to write our code agin and agin this is not follow our
// DRY PRINCIPLE (DON'T repeat yourself).


// const express =require("express");

// const app = express();


// function useMiddleware(req,res,next){
//     if(username!="Avnet" && password!="pass"){
//         res.status(404).json({
//             meg: "not exist"
//         });
//     }else {
//         next();
//         // control reach to next.

//     }
 
// }

// // 



// function kidneyMiddleware(req,res,next){
//     if(kidneyId!=1 && kidneyId != 2){
//         res.status(411).json({
//             meg: "incorrect input"
//         })
//     }
//     else{
//         next();
//     }
// }


// app.get('/kidney-checkup', useMiddleware,kidneyMiddleware,function(req,res){


//     res.send("your kidney is okk");

// })

// app.get('/heart',userMiddleware,function(req,res){

//     res.send("you are fine");
// })


// app.listen(3001,function(){
//     console.log("RUNNING");
// })


//! ====>  input validation 
// app.use comes before all routs

// const express=require("express");
// const app= express();

// app.use(express.json());

// app.post('/',function(req,res){
//     // kidney={1,2}
//     const kidney=req.body.kidney;
//     const kidneyLength=kidney.length;


//     res.send("your kidneys length is:" + kidneyLength );
// });

// // global catch
// let errorCount=0;
// app.use(function(err,req,res,next){

//     errorCount++;

//     res.status(500).send("an internal server error occurs");
// })



// app.listen(3003,function(){
//     console.log("running");
// });


// how can you do better input validation 

//! zod
//schema validation  


// const express=require("express");
// const zod=require("zod");
// const app=express();

// this is what my input look like

// const schema=zod.array(zod.number());

// app.use(express.json());

// app.post('/',function(){
//     const kidney=req.body.kidney;

//     // schema.parse or schema.safeParse this return true or false base on input that is send by user
//     const response = schema.safeParse(kidney);
//     if(!response.success){
//         res.status(411).json({
//             meg: "input is invalid"
//         })
//     }else{
//     res.send({
//         response
//         })
//     }
// });

// const port=2000;


// app.listen(port, ()=>{
//     console.log(`your server is running on port ${port}`);
// })


//!  more in zod

// const express=require("express");
// const zod=require("zod");
// const app=express();


// // email: string=> email
// // password: at-least 8 character
// // country: ind or usa 

// const schema=zod.object({
//     email: zod.string.email(),
//     password: zod.string.min(8),
//     country: zod.literal("ind").or(zod.literal("us")),
//     kidney: zod.array(zod.number())
// })

// app.post('/',function(){
//      const kidney=req.body.kidney;
    
//        // schema.parse or schema.safeParse this return true or false base on input that is send by user
//         const response = schema.safeParse(kidney);
//         if(!response.success){
//             res.status(411).json({
//                 meg: "input is invalid"
//             })
//         }else{
//         res.send({
//             response
//             })
//         }
//     })

// const port=2000;


// app.listen(port, ()=>{
//     console.log(`your server is running on port ${port}`);
// })


// const zod=require("zod");

// function validateInput(obj){
//     const schema=zod.object({
//         email: zod.string().email(),
//         password: zod.string().min(8)
//     })
//     const response=schema.safeParse(obj);

//     console.log(response);
// }
// validateInput({

//     email: "navneetpathak1909@gmail.com",
//     password: "helloHowAreYou"

// });



// authentication

// if you login some website it access you to login if you are write person and it send back 
// you some gibberish string and store some ware
// we called this authentication

// fetch=> how can you send http request from real website
// authentication=> login with website 
// databases

//! fetch api

// javascript run time
// index.html page

//! authentication

// ! json web token

// const express=require("express");
// const jwt= require("jsonwebtoken");

// const jwtPassword="12345";

// const app=express();

// const All_User=[
//     {
//         userName: "navneetpathak@gmail.com",
//         password: "123",
//         name: "navneet pathak",
//     },
//     {
//         userName: "pathak@gmail.com",
//         password: "1234321",
//         name: "pathak navneet",
//     },
//     {
//         userName: "navneet@gmail.com",
//         password: "12349",
//         name: "navneet",
//     }

// ]
// function userExists(username,password){
//     const userExists=false;
//     for(let i=0;i<All_User.length;i++){
//         if(All_User[i].userName==username && All_User[i].password==password) userExists==true;
//     }
//     return userExists;
// }

// app.post('/userLogin',function(req,res){ 
//     const username=req.body.userName;
//     const password=req.body.password;
//     if(!userExists(username,password)){
//         res.status(411).json({
//             meg: "user not exits"
//         })
//     }
//     var token=jwt.sign({userName: username},jwtPassword);
//     return res.json({
//         token,
//     })

// })

// app.get('/user',function(req,res){
//     const token=req.header.authorization;
//     try{
//         const decoded=jwt.verify(token,jwtPassword);
//         const username=decoded.username;

//     }catch(err){
//         return res.status(403).json({
//              meg: "not exist"
//         })
            
//     }

// })


// const port=2000;


// app.listen(port, ()=>{
//     console.log(`your server is running on port ${port}`);
// })



// ! Database
// graph dbs
// vector dbs
// sql dbs
// NoSql dbs

// ! mongoose

// const mongoose=require("mongoose");
// mongoose.connect("mongodb+srv://navneetpathak2005:QVt4IMhSP88aqUoJ@cluster0.p5mus8e.mongodb.net/")

// const User=mongoose.model('User',{
//     name:String,
//     email:String,
//     password:String

// });
// const user=new User({
//     name:"Navneet Pathak",
//     email:"navneetpathak1909@gmail.com",
//     password:"12345"
// })

// user.save();


 // ! use mongoose in http server

// const express = require("express");
// const jwt = require("jsonwebtoken");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");

// const app = express();
// app.use(express.json());
// // app.use(bodyParser.json());

// mongoose.connect("mongodb+srv://navneetpathak2005:bDI4oG2SgxTQb398@cluster0.hil9p9c.mongodb.net/");

// const User = mongoose.model('User', {
//     name: String,
//     email: String,
//     password: String
// });

// app.post('/signIn', async function(req, res){ 
//     const { userName, userMail, userPass } = req.body;

//     try {
//         const checkUserExists = await User.findOne({ email: userMail });
//         if (checkUserExists) {
//             return res.status(400).send("Username already exists");
//         }

//         const user = new User({
//             name: userName,
//             email: userMail,
//             password: userPass
//         });

//         await user.save();

      
//     }catch (error) {
//         res.status(500).send("Internal server error");
//     }

// });

// app.listen(3001, () => {
//     console.log("Server is running on port 3000");
// });


// ! jwt
//  creating the token

// const jwt= require("jsonwebtoken");


// const value=({
//     name:"navneet",
//     accNum:12344
// });


// const token=jwt.sign(value,"secret");
// console.log(token);

// const verifying=jwt.verify(token,"secret");
// console.log(verifying)


//! DOM (Document object Model)

// javaScript makes the html page active and dynamic via the DOM

// IN DOM.HTML PAGE

// ! MongoDB 
// ! CRUD (create read update delete)
// ! MONGOOSE


// const express=require("express");
// const mongoose=require("mongoose");

// const app=express();

// app.use(express.json());

// mongoose.connect("mongodb+srv://navneetpathak2005:QVt4IMhSP88aqUoJ@cluster0.p5mus8e.mongodb.net/");

// const UserSchema=new mongoose.Schema({
//     email: String,
//     password:String,
//     purchaseCourses:[{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Course'
//     }]
// });

// const CourseSchema=new mongoose.Schema({
//     title: String,
//     price: 9999
// });
// const User=mongoose.model('User',UserSchema);
// const Course=mongoose.model('user',CourseSchema);

// app.post('/',function(req,res){

// })

// User.create({
//     username: req.body.username,
//     password:req.body.password
// })
// next in assignment week 3

// ! REACT
// ! DOM
// todos.html 
// todo.html
// updateTodoAccToState.html
// virtual DOM (what element are 1. added, deleted, updated)

// !
// react
// react dom
// react native

//! npm create vite@latest
// vite: is a framework that gives you basic veiler code for what ever you want- react svelte etc. 

// countButton.html
// App.jsx

// jsx is a javaScript file, inside  which you can write js with xml

// ! fetch and axios

// fetch


// function main(){
//     fetch("https://sum-server.100xdevs.com/todos")
//     .then(async (response)=>{
//          const json=  await response.json();
//           console.log(json.todos.length);
//     })
// }

// async function main(){
//     const response= await fetch("https://sum-server.100xdevs.com/todos")
//          const json=  await response.json()
//          console.log(json.todos.length);
// }
//  main();

// axios

// const axios=require("axios");

// async function main(){
//     const response= await axios.get("https://sum-server.100xdevs.com/todos")
//          console.log("hello"+json.todos.length);
// }
// main();

// const axios = require("axios");

// async function main() {
//     try {
//         const response = await axios.get("https://sum-server.100xdevs.com/todos");
//         console.log("hello " + response.data.todos.length);
//     } catch (error) {
//         console.error("Error fetching todos:", error);
//     }
// }

// main();


// const axios = require("axios");

// async function main() {
//     try {
//         const response = await axios.get("https://sum-server.100xdevs.com/todos", {
//             auth: {
//                 username: "navneet",
//                 password: "1234567",
//             },
//             headers: {
//                 Authorization: "Bearer 123"
//             }
//         });
//         console.log(response.data);
//     } catch (error) {
//         console.error("Error fetching todos:", error);
//     }
// }

// main();
