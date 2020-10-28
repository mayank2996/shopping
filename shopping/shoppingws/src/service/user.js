const userCollection =require("../model/users")

let userService={}
userService.addUser=(value)=>{
    return userCollection.addUser(value).then((data)=>{
        if(data){
            console.log(data,33);
            return data;
        }

        else{
            console.log(data);
            let err =new Error("Registeration unsuccessfull");
            err.status=402;
            throw err;
        }
    })
}
userService.getuser=(value)=>{
     
    return userCollection.getUser(value).then((data)=>{
    
        if(data)
        {
            return data;
        }
        else{
            let err =new Error("invalid Username or Password");
            err.status=402;
            throw err;
        }
    })
}

userService.getuserByUsername=(value)=>{
     
    return userCollection.getUserByUsername(value).then((data)=>{
    
        if(data)
        {
            return data;
        }
        else{
            let err =new Error("invalid Username ");
            err.status=402;
            throw err;
        }
    })
}
userService.getProduct=(value)=>{
     
    return userCollection.getProduct(value).then((data)=>{
    
        if(data)
        {
            return data;
        }
        else{
            let err =new Error("No product available");
            err.status=402;
            throw err;
        }
    })
}
userService.updatePurchase=(obj,username)=>{
    return userCollection.updatePurchase(obj,username).then((data)=>{
        if(data!=null)
        {
            return data;
        }
        else{
            let err=new Error("unable to update the purchases");
            err.status=500;
            throw err;
        }
    })
}

userService.addWishlist=(prod,username)=>{

    return userCollection.addWishlist(prod,username).then((data)=>{
        if(data!=null)
        {
            return data;
        }
        else{
            let err=new Error("unable to update the Wishlist");
            err.status=500;
            throw err;
        }
    })
}
userService.updateOrder=(prodid,username)=>{
    return userCollection.updateOrder(prodid,username).then((data)=>{
        if(data!=null)
        {
            return "success"
        }
        else{
            let err=new Error("unable to update the purchases");
            err.status=500;
            throw err;
        }

    })
}

userService.updateWishList=(prodid,username)=>{
    return userCollection.updateWishlist(prodid,username).then((data)=>{
        if(data!=null)
        {
            return "success"
        }
        else{
            let err=new Error("unable to update the purchases");
            err.status=500;
            throw err;
        }

    })
}
module.exports=userService;