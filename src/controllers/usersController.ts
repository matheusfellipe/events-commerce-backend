import { Request, Response } from 'express';

import CreateUserService from '../services/CreateUserService';

import { autoInjectable, container } from 'tsyringe';

@autoInjectable()
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
}