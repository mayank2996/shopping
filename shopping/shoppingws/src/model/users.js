const connection=require("./connection")
const validator=require("../utilities/validators")
let userCollection={};
userCollection.generateId = () => {
    return connection.getUserCollection().then((model) => {
        return model.distinct("purchase.orderId").then((ids) => {
            let bId = Math.max(...ids);
            return bId + 1;
        })
    })
}
userCollection.addUser=(userInfo)=>{
    return userCollection.generateId().then((id) =>{
    return connection.getUserCollection().then((user)=>{
        return userCollection.getUser(userInfo).then((val)=>{
            if(val==null)
            {
               
        return user.insertMany({userName:userInfo.username,name:userInfo.name,password:userInfo.password,purchase:[{"orderId" : id,pId:"1002", orderDate:"2019-09-17T00:00:00.000Z",price:"14999"}]}).then((data)=>{
            if(data){
                console.log(data);
                return data;
            }
            else{
                return null;
            }
        })
    }
    else{
        return "User already exists";
    }
})
    })
    })
}
userCollection.getUser=(value)=>{
    validator.ValidateUsername(value.username);
    validator.ValidatePassword(value.password);
    return connection.getUserCollection().then((user)=>{
        return user.findOne({userName:value.username,password:value.password},{}).then((data)=>{
        if(data){
            
            console.log(data);
            return data;
        }
        else{
            return null;
        }
    })
    })
}

userCollection.getUserByUsername=(value)=>{
    
    return connection.getUserCollection().then((user)=>{
        return user.findOne({userName:value},{}).then((data)=>{
        if(data){
            
            console.log(data);
            return data;
        }
        else{
            return null;
        }
    })
    })
}


userCollection.getProduct=()=>{
    return connection.getProductCollection().then((user)=>{
        return user.find({},{}).then((data)=>{
        if(data.length!=0){
            
            
            return data;
        }
        else{
            
            
            let err=new Error("Invalid username or password");
            err.status=500;
            throw err;
        }
    })
    })

    }
    userCollection.updateQuantity=(obj)=>{
        return connection.getProductCollection().then((product)=>{
           
            
            return product.update({id:obj.pId},{$inc:{"pSeller.pQuantity":-1}}).then((udata)=>{
                if(udata.nModified){
                    
                    return "updated";
                }
            })
        })
    }





    userCollection.user=(obj)=>{
        return connection.getUserCollection().then((product)=>{
           
            
            return product.findOne({username:obj}).then((udata)=>{
                if(udata){
                    
                    return udata;
                }
            })
        })
    }




    userCollection.updatePurchase=(obj,username)=>{
        return connection.getUserCollection().then((collection)=>{
            return userCollection.updateQuantity(obj).then((udata1)=>{
                
                
            return userCollection.generateId().then((data)=>{
                obj.orderId=data
            return collection.update({userName:username},{$push:{purchase:obj}},{runValidators:true}).then((udata)=>{
                if(udata.nModified)
                {
                    if(udata1=="updated"){
                    return obj.orderId}
                }
                else{
                    return null;
                }
            })
        })
    })
})
}

userCollection.addWishlist=(prod,username)=>{
    return connection.getUserCollection().then((collection)=>{
        return collection.find({'wishlist.prodid':prod.prodid}).then(product=>{
            if(product.length>0)
            {
                return " Product already in wishlist"
            }
            else{
                     return collection.update({userName:username},{$push:{wishlist:prod}},{runValidators:true}).then((udata)=>{
                      if(udata.nModified)
                      {
            
                            return " Product added successfully"
                        }
                     else{
                     return null;
                     }
    })
}
})
})
}
userCollection.updateOrder=(prodid,username)=>{
    id=Number(prodid)
    console.log(id);
    
    return connection.getUserCollection().then((user)=>{
        return user.updateMany({userName:username},{$pull:{purchase:{orderId:id}}}).then((data)=>{
            if(data.nModified)
            {
                console.log("inside Modified")
                return data;
            }
            else{
                console.log("unable")
                return null;
            }
        })
    })
}

userCollection.updateWishlist=(prodid,username)=>{
    id=Number(prodid)
    console.log(id);
    
    return connection.getUserCollection().then((user)=>{
        return user.updateOne({userName:username},{$pull:{wishlist:{id:id}}},{multi:false}).then((data)=>{
            if(data.nModified)
            {
                console.log("inside Modified")
                return data;
            }
            else{
                console.log("unable",username,prodid)
                return null;
            }
        })
    })
}
module.exports=userCollection