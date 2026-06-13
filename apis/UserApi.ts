import { APIRequestContext } from "@playwright/test";
import User from "../models/user";
export default class UserApi{
private request:APIRequestContext;
constructor(requset:APIRequestContext){
this.request=requset;
}

async registerUsingApi(user:User,email?:string,password?:string){
    return this.request.post('/api/v1/users/register',{
    data:{
     email:email ??user.getEmail(),
     firstName:user.getfirstName(),
     lastName:user.getlastName(),
     password:password ?? user.getPasswrod(), 
   
    },
 });
}
}