import {test,expect}from'@playwright/test';
import {faker} from'@faker-js/faker';
import User from '../models/user';
import RegisterPage from '../pages/RegisterPage';
import TodoPage from '../pages/TodoPage';
test.describe("Register page ",()=>{
// register test case 
test("should register a new user successfully with valid data", async ({page})=>{
  const user =new User();
   const passwrod=user.getPasswrod();
const registerPage=new RegisterPage(page);
(await registerPage
  .load())
  .register(user,passwrod);
 const todoPage = new TodoPage(page);
// Assertion 
 const welocmeMessage=todoPage.getWelocmeMessage()
 await expect(welocmeMessage).toBeVisible();
});




});// Test Suite 