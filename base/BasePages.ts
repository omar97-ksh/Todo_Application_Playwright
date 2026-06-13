import { APIRequestContext, BrowserContext, Page } from "@playwright/test";

export default class BasePages{
    protected page:Page;
    protected context?:BrowserContext;
    protected request?:APIRequestContext;
    constructor(page:Page,request?:APIRequestContext,context?:BrowserContext,){
     this.page=page;
     this.request=request;
     this.context=context;
    }

}