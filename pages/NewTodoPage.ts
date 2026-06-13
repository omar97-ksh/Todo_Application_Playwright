import { Page } from "@playwright/test";
import BasePages from "../base/BasePages";

export default class NewTodoPage extends BasePages{ 
//Constructor
   constructor(page:Page){
     super(page);
    }
//Eleements 
private get newTodoInput(){return '[data-testid="new-todo"]';}
private get submitNewTask(){return '[data-testid="submit-newTask"]';}
private get backButton(){return '[data-testid="back"]';}

//Methods 
async load(){
    await this.page.goto('/todo/new');
   return this;
}
async addNewTask(task:string){
    await this.page.locator(this.newTodoInput).fill(task);
    await this.page.locator(this.submitNewTask).click();
}



}