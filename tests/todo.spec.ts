import { faker } from '@faker-js/faker';
import {test,expect}from'@playwright/test';
import User from '../models/User';
import UserApi from '../apis/UserApi';
import TodoApi from '../apis/TodoApi';
import RegisterPage from '../pages/RegisterPage';
import NewTodoPage from '../pages/NewTodoPage';
import TodoPage from '../pages/TodoPage';

test.describe("Todo Page ", ()=>{

test("should be able the user to add new todo " ,async({page,request,context})=>{
      //Create User 
      const user =new User();
 //  Register Using  Api 
const registerUsingApi= new RegisterPage(page,request,context);
  await registerUsingApi.registerUsingApi(user);
 //  add new todo   
const newTodoPage= new NewTodoPage(page);
(await newTodoPage
  .load())
  .addNewTask("playwright");
//Assertion 
const todoPage =new TodoPage(page);
const todoItem=  await todoPage.getTodoByInedx(0);
 expect(todoItem).toEqual("playwright");
});
test("should be able to delete todo",async({page,request,context})=>{
//Create User 
const user =new User();

//register Using Api 
const registerUsingApi= new RegisterPage(page,request,context);
  await registerUsingApi.registerUsingApi(user);

//  add todo Uisng Api 
const todoPage=new TodoPage(page,request);
   todoPage.load();
   todoPage.addTodoUsingApi(user);
   todoPage.deleteTodo();
 const noTodo=  await todoPage.getNotoTodoMesseage();
 await expect(noTodo).toBeVisible();
});
});
