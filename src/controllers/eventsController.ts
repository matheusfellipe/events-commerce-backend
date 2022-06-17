import { Request, Response } from "express";
import  Event  from "../models/Events";

interface EventBody {
    name: string;
    price:number;
    tickets: number;
    description: string;
    address: string;
}

export const createEvent = async (
    req: Request<EventBody>,
    res: Response
) => {
    const {name,price,tickets,description,adrress} = req.body;
    const event = new Event();
    event.name = name;
    event.price = price;
    event.tickets = tickets;
    event.description = description;
    event.address = adrress;
    await event.save();
    return res.json(event);
};

export const findByName = async (req:Request,res:Response) => {
    try {

    } catch (error) {

    }
}

export const findAllById = async (req:Request,res:Response) => {
    try {

    } catch (error) {
        
    }
}

export const updateQuantity = async (req:Request,res:Response) => {
    try {

    } catch (error) {
        
    }
}