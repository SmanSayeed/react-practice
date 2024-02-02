import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;
    constructor(){
        this.client
                .setEndpoint(conf.appwriteUrl)
                .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email,password,name}){
          const userAccount =  await this.account.create(ID.unique(),email,password,name);
          if(userAccount){
            // make user login
          }else{
            return "registration failed";
          }      
    }

    async login({email,password}){
       const user = await this.account.createEmailSession(email,password);
       if(user){
        //login method
       }else{
        return "Login failed"
       }
    }

    async getCurrentUser(){
       try {
        return await this.account.get();    
       } catch (err) {
        console.log(err)
       } 
       return null;
    }

    async logout(){
        try {
            return this.account.deleteSessions()
        } catch (err) {
            console.log(err)
        } 
        return null;
    }
}
const authService = new AuthService()
export default authService;

// const client = new Client()
//     .setEndpoint(conf.appwriteUrl) // Your API Endpoint
//     .setProject(conf.appwriteProjectId);               // Your project ID

// const account = new Account(client);

// const promise = account.create('[USER_ID]', 'email@example.com', '');

// promise.then(function (response) {
//     console.log(response); // Success
// }, function (error) {
//     console.log(error); // Failure
// });
