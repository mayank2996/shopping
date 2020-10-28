const express = require('express');
const routing = express.Router();
const dbModule = require('../model/data');
// const userCollection=require("../model/users")
const userService=require("../service/user")

//routing for Login - EXPECTS NAME AND PASSWORD!!
routing.get('/setupDb', (req, res, next) => {
    dbModule.setupDb().then((data) => {
        res.send(data)
    }).catch((err) => {
        next(err)
    })
})
routing.post('/getuser',(req,res,next)=>{
    console.log(req.body,88)
userService.getuser(req.body).then((data)=>{
    console.log(data,req.body)
    res.json(data);
    
    
}).catch((err) => {
    next(err)
})





})

routing.get('/getuser/:username',(req,res,next)=>{
    let {username}=req.params;
    userService.getuserByUsername(username).then((data)=>{
        
        res.json(data);
        
        
    }).catch((err) => {
        next(err)
    })
    
    
    
    
    
    })
routing.post('/adduser',(req,res,next)=>{
    // console.log(22,req.body)
    userService.addUser(req.body).then((data)=>{
        res.json(data)
        // console.log(data,"22");
    }).catch((err)=>{
        console.log("22");
        
        next(err);
    })
})
routing.get('/getproduct',(req,res,next)=>{
    
    
    userService.getProduct().then((data)=>{
        
        res.json(data);
        
        
    }).catch((err) => {
        next(err)
    })
    
    })

    routing.put('/updatewishlist/:username',(req,res,next)=>{
    
        let{username}=req.params;
        userService.addWishlist(req.body,username).then((data)=>{
            
            res.json(data);
            
            
        }).catch((err) => {
            next(err)
        })
        
        })
routing.put("/updateProduct/:username",(req,res,next)=>{
    let {username}=req.params;
    userService.updatePurchase(req.body,username).then((data)=>{
       res.json(data);
    }) .catch((err)=>{
        next(err);
    })   
})

routing.put("/updateorder/:orderid",(req,res,next)=>{
    let{orderid}=req.params;
  
    
    userService.updateOrder(orderid,req.body.userName).then((data)=>{
        res.json(data);
     }) .catch((err)=>{
         next(err);
     })   
})

routing.put("/removewishlist/:pid",(req,res,next)=>{
    let{pid}=req.params;
  console.log(req.body,555)
    
    userService.updateWishList(pid,req.body.username).then((data)=>{

        res.json(data);
     }) .catch((err)=>{
         next(err);
     })   
})
module.exports = routing;