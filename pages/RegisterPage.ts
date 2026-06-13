import { APIRequestContext, BrowserContext, Page } from "@playwright/test";
import User from "../models/user";
import UserApi from "../apis/UserApi";
import BasePages from "../base/BasePages";

export default class RegisterPage extends BasePages{
 //Constructor
    constructor(page:Page,request?:APIRequestContext,context?:BrowserContext){
     super(page,request,context);
    }
 //Eleemnts 
 private get firstNameInput(){return '[data-testid="first-name"]'};
 private get lasttNameInput(){return '[data-testid="last-name"]'};
 private get emailInput(){return '[data-testid="email"]'};
 private get passwordInput(){return '[data-testid="password"]'};
 private get confirmPasswordInput(){return '[data-testid="confirm-password"]'};
 private get submitButton(){return '[data-testid="submit"]'};

 //Methods 
 async  load(){ await this.page.goto('/signup'); return this;}

 async register(user:User,password:string){
 await this.page.locator(this.firstNameInput).fill(user.getfirstName());
 await this.page.locator(this.lasttNameInput).fill(user.getlastName());
 await this.page.locator(this.emailInput).fill(user.getEmail());
 await this.page.locator(this.passwordInput).fill(password);
 await this.page.locator(this.confirmPasswordInput).fill(password);
 await this.page.locator(this.submitButton).click();
 }
async registerUsingApi(user:User){
    const  response =await new UserApi(this.request!).registerUsingApi(user);
    const responseBody =await response.json();
    const access_token =responseBody.access_token;
    const firstName=responseBody.firstName;
    const userID= responseBody.userID;
    user.setAccessToken(access_token);
    this.context!.addCookies([
    {
     name:"access_token",
     value:access_token,
     url:"https://qacart-todo.herokuapp.com",
    
    },
    {
     name:"firstName",
     value:firstName,
     url:"https://qacart-todo.herokuapp.com",     
    },
    {
     name:"userID",
     value:userID,
     url:"https://qacart-todo.herokuapp.com",     
    },
    
    ]);
    
}
 
 


}