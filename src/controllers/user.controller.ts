import {Request,Response} from 'express';
import { User } from "../models/user";
import { badRequest, internalServerError, validateNumber, notFound, ok } from '../utils/generics-responses';

interface UserBody {
    firstname: string;
    lastname: string;
    cpf: number;
    email: string;
  }

export const getUsers = async (req: Request,res:Response) => {
    try {
        const users = await User.find();
        return res.json(users)
    } catch (error){
        if (error instanceof Error){
            return internalServerError
        }
    }
};

export const getUser = async (req:Request,res:Response) => {
    try {
        const {id} = req.params;
        const user = await User.findOneBy({user_id: parseInt(id)});

        if(!user) return notFound
    } catch (error){
        if (error instanceof Error){
            return internalServerError
        }
    }
};

export const createUser = async (
    req: Request<unknown, unknown, UserBody>,
    res: Response
  ) => {
    const { firstname, lastname,cpf,email } = req.body;
    const user = new User();
    user.firstName = firstname;
    user.lastName = lastname;
    user.cpf = cpf;
    user.email = email;
    await user.save();
    return res.json(user);
  };
  
  export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
      const user = await User.findOneBy({ user_id: parseInt(id) });
      if (!user) return res.status(404).json({ message: "Not user found" });
  
      await User.update({ user_id: parseInt(id) }, req.body);
  
      return res.sendStatus(204);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };
  
  export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const result = await User.delete({ user_id: parseInt(id) });
  
      if (result.affected === 0)
        return res.status(404).json({ message: "User not found" });
  
      return res.sendStatus(204);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };