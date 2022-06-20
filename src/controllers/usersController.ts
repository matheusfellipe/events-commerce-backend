import { Request, Response } from 'express';

import CreateUserService from '../services/CreateUserService';
import FindAllUsersService from '../services/FindAllUserService';

import { container } from 'tsyringe';


export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, userName,password,isAdmin } = request.body;
    const userService = container.resolve(CreateUserService);

    const user = await userService.execute({
      userName,
      email,
      password,
      isAdmin
    });

    return response.json(user);
  }

  public async getUser(request:Request,response:Response): Promise<Response>{
    const findUser = container.resolve(FindAllUsersService);
    const user = await findUser.execute
    return response.json(user)
  }
}