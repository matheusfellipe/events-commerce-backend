import { injectable } from "tsyringe";

import UserRepository from "../repositories/userRepository";
import User from "../models/Users";



@injectable()
class FindAllUsersService{
    userRepository:UserRepository;

    constructor(userRepository:UserRepository){
this.userRepository = userRepository;
    }
    public async execute():Promise<User>{
        const user = await this.userRepository.getAllUser       
        if(!user){
            throw new Error('Does not have users avaliable!')
        }
        return ;
    }
}

export default FindAllUsersService;