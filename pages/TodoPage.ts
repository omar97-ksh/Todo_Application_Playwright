import { th } from "@faker-js/faker";
import { APIRequestContext, Page } from "@playwright/test";
import BasePages from "../base/BasePages";
import TodoApi from "../apis/TodoApi";
import User from "../models/user";

export default class TodoPage extends BasePages{
// //Constructor
   constructor(page:Page,request?:APIRequestContext){
     super(page,request);
    }
//element 
 private get welocmeMessage(){return '[data-testid="welcome"]';}
 private get deleteButton(){return '[data-testid="delete"]';}
 private get noTodoMessage(){return '[data-testid="no-todos"]';}
 private get paginationlink(){return'[data-test-id="pagination-link"]';}
 private get todoItem(){return '[data-testid="todo-item"]';}

//Method 
async load(){await this.page.goto('/todo');}
 getWelocmeMessage(){return this.page.locator(this.welocmeMessage);
 }
 async getTodoByInedx(index :number ){

  return  await this.page.locator(this.todoItem)
  .nth(index)
  .innerText();
 }
 async addTodoUsingApi(user:User){
     await new TodoApi(this.request!).addTodoUsingApi(user);
 }
 async deleteTodo(){ await this.page.locator(this.deleteButton).click();}
async getNotoTodoMesseage(){return this.page.locator(this.noTodoMessage);}
}