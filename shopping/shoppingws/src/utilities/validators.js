let validator={};
validator.ValidateUsername=(username)=>{
    let pattern=new RegExp(/^[a-z]{3,}[@][a-z]{3,}(.com)$/);
    if(!pattern.test(username))
    {
        
        let err = new Error("Invalid Username");
        err.status = 406
        throw err;
    }
}
validator.ValidatePassword=(password)=>{
    let pattern=new RegExp(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/);
    if(!pattern.test(password))
    {
        let err = new Error("Invalid Password");
        err.status = 406
        throw err;
    }
}
module.exports=validator;