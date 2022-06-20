import  User  from "../models/Users";
import UserBody from "../interfaces/userCreate";
import userInterface from "../interfaces/userInterface";
import { AppDataSource } from "../db";

const datasource = AppDataSource;


class userRepository implements userInterface {
     
     public async create   (
        {userName,password,email,isAdmin}:UserBody
      ):Promise<User> {
        
        const user =  await datasource.manager.create(User,{
            userName,
            password,
            email,
            isAdmin
        })
        await user.save();
        return user;
      };

      public async findByEmail(email: string): Promise<User|undefined> {
          
        const findUser =  await datasource.manager.findOne(User,{
            where:{
                email,
            }
        })

        return findUser;
      
      }  
        
       

      public async findById(user_id:number): Promise<User|undefined> {
          
        const findUser =  await datasource.manager.findOneBy(User,{
        user_id
        })
        return findUser;
      
      }  

      public async getAllUser(): Promise<User> {
        const [user] = await datasource.manager.find(User)
        return user;
      }
    
    }

    export default userRepository;