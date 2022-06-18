import { inject,injectable } from "tsyringe";

import User from "../models/Users";
import userRepository from "../repositories/userRepository";

interface IRequest {
    userName: string;
    email: string;
    password: string;
    isAdmin:boolean;
  }

  @injectable()
class CreateUserService {
  constructor(
    @inject('userRepository')
    private userRepository: userRepository,
  ) {}

  public async execute({ userName, email,password,isAdmin }: IRequest): Promise<User> {
    const checkCustomersExists = await this.userRepository.findByEmail(
      email,
    );

    if (checkCustomersExists) {
      throw new Error('Email address already used.');
    }

    const user = await this.userRepository.create({
     userName,
     email,
     password,
     isAdmin
    });

    return user;
  }
}

export default CreateUserService;
