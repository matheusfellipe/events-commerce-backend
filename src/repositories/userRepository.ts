import  User  from "../models/Users";
import UserBody from "../interfaces/userCreate";
import userInterface from "../interfaces/userInterface";
import { AppDataSource } from "../db";
import { Repository } from "typeorm";




class userRepository implements userInterface {
  private ormRepository: Repository<User>
  
  constructor(){
    this.ormRepository = AppDataSource.manager.getRepository(User);
  }

     public async create   (
        {userName,password,email,isAdmin}:UserBody
      ):Promise<User> {
        
        const user =  await this.ormRepository.create({
            userName,
            password,
            email,
            isAdmin
        })
        await this.ormRepository.save(user);
        return user;
      };

      public async findByEmail(email: string): Promise<User|undefined> {
          
        const findUser =  await this.ormRepository.findOne({
            where:{
                email,
            }
        })

        return findUser;
      
      }  
        
       

      public async findById(user_id:number): Promise<User|undefined> {
          
        const findUser =  await this.ormRepository.findOneBy({
        user_id
        })
        return findUser;
      
      }  

      public async getAllUser(): Promise<User[]> {
        const user  = await this.ormRepository.find();
        return user;
      }
    
    }

    export default userRepository;