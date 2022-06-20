import User from "../models/Users";
import UserBody from "./userCreate";

export default interface userInterface {
    create(data:UserBody): Promise<User>;
    findByEmail(email:string): Promise<User|undefined>;
    findById(user_id:number): Promise<User|undefined>;
    getAllUser(): Promise<User|undefined>;

}