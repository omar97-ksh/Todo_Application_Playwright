import { faker, th } from "@faker-js/faker";

export default class User {
    private email;
    private firstName;
    private lastName;
    private password;
    private accessToken :string='';
    private userID :string='';
    constructor(){
        this.firstName=faker.person.firstName();
        this.lastName=faker.person.lastName();
        this.email=faker.internet.email();
        this.password=faker.internet.password();
    }
    
   getfirstName(){return this.firstName;}
   getlastName(){return  this.lastName;}
   getEmail(){ return this.email;}
   getPasswrod(){return this.password;}
   getAccessToken(){return this.accessToken}
      setAccessToken(accessToken:string){this.accessToken=accessToken;}

}
