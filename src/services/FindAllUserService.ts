import { inject, injectable } from "tsyringe";

import UserRepository from "../repositories/userRepository";
import User from "../models/Users";


@injectable()
class FindAllUsersService{
    

    constructor(

    private userRepository: UserRepository
    )
    {}
    public async execute():Promise<User[]>{
        const user = await this.userRepository.getAllUser();    
        if(!user){
            throw new Error('Does not have users avaliable!')
        }
        return user;
    }
}

export default FindAllUsersService;