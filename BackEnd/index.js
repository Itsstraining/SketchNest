const express =require('express');
const app=express();
const Server=require("http").Server(app);
const io= require('socket.io');


Server.listen(3000,()=>{
    console.log("Server is running at port: "+3000);
})
app.get("/",(req,res)=>{
    res.sendFile("");
})
io.on('connection',function(){
    console.log(" co nguoi dang nhap");
})

