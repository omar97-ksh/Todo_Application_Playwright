import { faker } from '@faker-js/faker';
import {test,expect}from'@playwright/test';
import User from '../models/user';
import UserApi from '../apis/UserApi';
import LoginPage from '../pages/LoginPage';
import TodoPage from '../pages/TodoPage';

test.describe("login page ",()=>{
test("should login user successfully with valid data",async({page,request})=>{
   const user =new User();
    const email=user.getEmail();
   const  password= user.getPasswrod();
    //  Register  Using Api 
    new UserApi(request).registerUsingApi(user,email,password)
    const loginPage = new LoginPage(page);
    (await loginPage
      .load())
      .logiWithVaildEmailAndPassword(email,password);
  //Assertion 
  const todoPage=new TodoPage(page);
 const welocmeMessage=todoPage.getWelocmeMessage()
 await expect(welocmeMessage).toBeVisible();
});
})