// import { Request,Response } from "express";
import Order from "../models/Orders";
import Event from "../models/Events";
// import { getUserById } from "./usersController"; 
import { badRequest, internalServerError, validateNumber, notFound, ok } from '../utils/generics.responses';


interface Events {
    event_id: number;
    ticket: number;
}

interface Request {
    user_id: number;
    event: Event[];
}

export const execute = async (
{user_id,event}:Request,req,res
)=> {
    const {id} = req.params;
    // const user = await User.findOneBy({user_id:id});
    // if(!user){
    //     throw notFound
    // }

    const eventFind = await Event.find() 
}

