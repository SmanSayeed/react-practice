import conf from "../conf/conf";
import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client.setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client)
        this.bucket=new Storage(this.client);
    }

    async createPost([title,slug,content,featured_image,status,userId]){
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug,{
                title,
                content,
                featured_image,
                status,
                userId
            })
        } catch (err) {
            console.log("Appwrite service: createPost: ",err)
        } 
    }

    async updatePost(slug,{title,content,featured_image,status}){
        try {
            return await this.databases.updateDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug,{
                title,
                content,
                featured_image,
                status
            })
        } catch (err) {
            console.log("Appwrite service: upatePost: ",err)
        } 
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug)
            return true;
        } catch (err) {
            console.log("Delete : ",err)
        } 
        return false;
    }

    async getPost(slug){
        try {
            await this.databases.getDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug)
        } catch (err) {
            console.log("get single ",err)
        } 
    }
    async getPosts(){
        try {
            await this.databases.listDocuments(conf.appwriteCollectionId,conf.appwriteCollectionId)
        } catch (err) {
            console.log("get posts ",err)
        } 
    }

    async getActivePosts(queries=[Query.equal("status",true)]){
        try {
            await this.databases.listDocuments(conf.appwriteDatabaseId,conf.appwriteCollectionId, queries)
        } catch (err) {
            console.log("get active",err)
        } 
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(conf.appwriteBucketId,ID.unique,file)
        } catch (err) {
            console.log("file: ",err)
        } 
    }

    async deleteFile(fileId){
        try {
             await this.bucket.createFile(conf.appwriteBucketId,fileId);
             return true;
        } catch (err) {
            console.log("delete file: ",err)
        } 
        return false;
    }

     getFilePreview(fileId){
        try {
            return this.bucket.getFilePreview(conf.appwriteBucketId,fileId)
        } catch (err) {
            console.log("delete file: ",err)
        } 
        return false;
    }
}

const service = new Service();
export default service;