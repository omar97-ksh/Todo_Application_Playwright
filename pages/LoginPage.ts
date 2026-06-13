import { Page } from "@playwright/test";
import BasePages from "../base/BasePages";

export default class LoginPage extends BasePages{
  constructor(page:Page){
     super(page);
    }
 // Elements    
 private get emailInput(){return '[data-testid="email"]';}
 private get passwordInput(){return '[data-testid="password"]';}
 private get submitButton(){return '[data-testid="submit"]';}

 async load(){await this.page.goto('/login'); return this;}
 async logiWithVaildEmailAndPassword(email:string,password:string){
 await this.page.locator('[data-testid="email"]').fill(email);
 await this.page.locator('[data-testid="password"]').fill(password);
 await this.page.locator('[data-testid="submit"]').click();

 }
}