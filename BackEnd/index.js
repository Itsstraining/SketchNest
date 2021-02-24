const express =require('express');
const app=express();
const Server=require("http").Server(app);
const body = require('body-parser');
// const io= require('socket.io');
app.use(body,json());
let array = {
 name:"gian",
 ip:"123123"
}

app.get("/",(req,res)=>{
    res.send(array);
})
// io.on('connection',function(){
//     console.log(" co nguoi dang nhap");
// })
Server.listen(3000,"0.0.0.0",()=>{
    console.log("Server is running");
})
